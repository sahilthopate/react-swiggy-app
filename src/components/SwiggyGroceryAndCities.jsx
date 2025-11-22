import { useEffect, useState } from "react";

export default function(){
    const [cities ,setCities] = useState([]);
    const [showAll ,setShowAll] = useState(false); 

    const visibleCities = showAll ? cities : cities.slice(0,11)

    useEffect(()=>{
        fetch("/cities.json")
        .then(res=>res.json())
        .then(data=>setCities(data))
        .catch(err=>console.log(err))
    },[])
    return(
        <>
            <div>
                <div className="w-full " id="DowndloadApp">
                    <img src="/images/Appdowndload.png" alt="" />
                </div>
                <div className="mx-45 my-15 font-bold text-[25px]">
                    <div className="mb-10">Cities With food delivery</div>
                    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 justify-between">
                        {
                            visibleCities.map(
                                (city,index)=>{
                                    return(
                                        <div key={index} className="border border-black-200 w-[200px] h-20 p-2 rounded-[14px]    flex items-center justify-center">
                                            <a href="" className="text-[14px] font-400 ">Order food online in <span className="">{city.city}</span></a>
                                        </div>
                                    )
                                })
                        }
                        {
                            (!showAll ? (
                                <button className="border border-black-200 w-[200px] h-[80 px] p-4 rounded-[14px] inline text-[14px] font-400 cursor-pointer" onClick={()=>setShowAll(true)}>see more</button>
                            ):(
                                <button className="border border-black-200 w-[200px] h-[80 px] p-4 rounded-[14px] inline text-[14px] font-400 cursor-pointer" onClick={()=>setShowAll(false)}>less more</button>
                            ))
                        }
                        
                    </div>                    
                </div>
            </div>
        </>
    )
}