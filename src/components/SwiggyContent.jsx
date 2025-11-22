
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SwiggyComponent from './SwiggyComponent';
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContex"
export default function SwiggyContent(){
    const {category , setSelectedItem ,query ,setQuery ,location ,setLocation ,locationQuery ,setLocationQuery ,restData ,filtereddata} = useContext(DataContext);
    const [isSearchOpen, setIsSearchOpen] = useState(false); 

    const searchlocation = async(e) =>{
        setLocationQuery(e.target.value);

        const locationResp = await fetch(`http://api.positionstack.com/v1/forward?access_key=YOUR_KEY&query=${e.target.value}`);
        const data = await locationResp.json();
        setLocation(data.data || []);
    }

    useEffect(()=>{
        if(isSearchOpen){
            document.body.style.overflow ="hidden";
        }else{
            document.body.style.overflow ="auto";
        }
        return ()=>{
            document.body.style.overflow="auto";
        }
    },[isSearchOpen]);

    return(
        <>
            <div className='flex bg-[#ff5200] h-[300px]'>
                <div className='left-img w-[950px] h-[450px]'>
                    <img className='w-full h-full' src="images/left_img.png" alt="" />
                </div>
                <div className='mid-content flex-col h-full'>
                    <div>
                        <p className='text-[48px] text-center text-white font-bold mt-12'>Order food & groceries. Discover best restaurants. Swiggy it!</p>
                    </div>
                    <div className="inputs w-full py-7 flex items-center">
                        <div className='flex items-center relative'>
                            <input type="text" 
                                className='bg-[#ffffff] rounded-[14px] h-15 w-[340px] ml-30 p-5 ' 
                                placeholder='Location'
                                value={locationQuery}
                                onChange={searchlocation}
                            />
                            <FaLocationDot className='absolute left-105'/>
                        </div>
                        <ul className="absolute mt-2 p-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {location.map((loc, index) => (
                            <li 
                            key={index}
                            className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                            >
                            {loc.name}, {loc.region}
                            </li>
                        ))}
                        </ul>
                        <div className='flex items-center relative'>
                            <input
                                type="text"
                                className='bg-[#ffffff] rounded-[14px] h-15 w-[450px] mx-20 text-bold p-5'
                                placeholder='Search for restaurant , item or more'
                                id="search"
                                onFocus={() => setIsSearchOpen(true)}
                                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                            />
                            <FaSearch className='absolute left-122'/>
                        </div>
                        {
                            isSearchOpen && (
                            <div className="fixed top-0 left-0 w-full h-full bg-white z-50 px-100  pt-5 inline">
                                <input
                                type="text"
                                autoFocus
                                className="w-full p-4 border border-gray-400 rounded-lg text-lg"
                                placeholder="Search restaurants, cuisines, dishes…"
                                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                                />

                                <button
                                className="text-l font-bold m-5 cursor-pointer"
                                onClick={() => {setIsSearchOpen(false);query.length = 0}}
                                >
                                ✖ Close
                                </button>

                                <div className=" fixed inset-0 top-35 px-95 overflow-y-auto">
                                    {query.length > 0 && (
                                    filtereddata.map((item) => (
                                        <div 
                                        key={item.id}
                                        className="object-cover top-0 left-0 w-full h-[100px] bg-slate-50 z-50 my-4 flex items-center cursor-pointer "
                                        onClick={() => setSelectedItem(item)}
                                        >
                                        <img className="w-20 h-20" src={item.image} alt={item.name} />
                                        <p className="font-bold mx-4">{item.name}</p>
                                        </div>
                                    ))
                                    )}
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className='right-img w-[950px] h-[450px] ml-auto'>
                    <img className='h-full' src="images/right_img.png" alt="" />
                </div>
            </div>
            <SwiggyComponent />
        </>
    )
}