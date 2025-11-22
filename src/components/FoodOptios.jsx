import { useContext, useEffect, useState } from "react";
import { FaArrowRight , FaArrowLeft } from "react-icons/fa6";
import { DataContext } from "../context/DataContex";
import SelectedFoodDescription from "./SelectedFoodDescription";

export default function FoodOptions(){
    const {category , setCategory ,filtereddata ,slide,setSlide , setSelectedItem} = useContext(DataContext)
    
    useEffect(() => {
    fetch("/food.json")
        .then((res) => res.json())
        .then((data) => setCategory(data))
        .catch((err) => console.log("Error:", err));
    }, []);

    return(
        <div className="max-w-full h-[500px] mx-auto pt-30 ">
            <div className="flex items-center justify-between mx-45">
                <div className="font-bold text-[25px]">Order our best food options</div>
                <div className="flex items-center justify-center ">
                    <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer" onClick={()=>setSlide(slide-3)}>
                        <FaArrowLeft />
                    </div>
                    <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer" onClick={()=>{
                        if(category.length - 8 == slide) return false ;setSlide(slide+3)}}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex pl-3  pt-10 mx-38 overflow-hidden">
                {
                    filtereddata.map(
                        (cat,index)=>{
                            return(
                                <div style={{
                                    transform:`translateX(-${slide*100}%)`
                                }}key={index} className=" shrink-0 w-[150px]  duration-500 cursor-pointer">
                                    <img  src={cat.image} width={150} height={160.99} alt=""  onClick={()=>{setSelectedItem(cat)}}/>
                                </div>
                            )
                        }
                    )
                }
                
            </div>
            <hr className="my-10 mx-40 border"/>
            <SelectedFoodDescription />
        </div>
        
    )
}