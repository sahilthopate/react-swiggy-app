import { useContext, useEffect, useState } from "react";
import RestCard from "./RestCard";
import { DataContext } from "../context/DataContex";
import { BiSolidCart } from "react-icons/bi";
import CardData from "./CartData";


export default function SelectedFoodDescription(){
    const {restData , selectedItem , setSelectedItem , setSelectCart} = useContext(DataContext);

    useEffect(() => {
    if (selectedItem) {
        document.body.style.overflow = "hidden";   
    } else {
        document.body.style.overflow = "auto";    
    }
    return () => {
        document.body.style.overflow = "auto";   
    };
    }, [selectedItem]);

    return(
        <div className="">
            {selectedItem && (
            <div className="fixed inset-0 bg-white bg-opacity-80 px-40 z-50 overflow-y-auto">
                <div className="group">
                    <button className="group-hover:scale-110 hover:bg-red-300 w-20 p-3 bg-red-300 rounded-[10px] cursor-pointer absolute top-5 right-20 flex items-center" onClick={()=>{setSelectCart(true);
                    }}>
                        <BiSolidCart className="font-50 "/> 
                        <p className="pl-2 font-bold">Cart</p>
                        </button>
                </div>
                
                <div className="group">
                    <button 
                    onClick={() => setSelectedItem(null)} 
                    className="absolute top-5 right-5 text-black text-3xl cursor-pointer group-hover:scale-110"
                    >
                    ✕
                    </button>
                </div>
                <div className=" items-center text-black p-5">
                    <div className=" my-20">
                        <h2 className="text-[40px] font-extrabold text-start">{selectedItem.name}</h2>
                        <p className="text-lg font-bold ">
                        Delicious {selectedItem.name} prepared fresh just for you.  
                        Enjoy premium taste and quality!
                        </p>
                    </div>
                    <div className="items-center px-50 pb-10">
                        <img 
                        src={selectedItem.image} 
                        alt={selectedItem.name} 
                        className="w-[300px] h-[300px] object-cover rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="group mx-5">
                        <button className="bg-slate-100 p-2 rounded-2xl w-40 mx-5 cursor-pointer group-hover:scale-110 hover:bg-red-500 duration-150">Add To Card</button>
                        <button className="bg-slate-100 p-2 rounded-2xl w-20">₹ {selectedItem.price}</button>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <p className="text-[20px] font-bold" >Restaurant to Explore: </p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-10">
                        {
                            restData.map(
                                (rest,index)=>{
                                    return <RestCard {...rest} key={index}/>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
            )}
            <CardData />
        </div>
    )
}