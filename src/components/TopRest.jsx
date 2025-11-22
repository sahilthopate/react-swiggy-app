import { useContext, useEffect, useState } from "react";
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa6";
import { DataContext } from "../context/DataContex";
import RestCard from "./RestCard";

export default function TopRest(){
    const {slide,setSlide ,category,setRestData,restData} = useContext(DataContext);
    const [restSlide ,setRestSlide] = useState(0);

    useEffect(()=>{
        fetch("/restaurantChains.json")
        .then(res=>res.json())
        .then(data=>setRestData(data))
        .catch(err=>console.log(err))
    },[])
    return(
        <>
            <div className="max-w-full h-[500px]  ">
                <div className="flex items-center justify-between mx-45">
                    <div className="font-bold text-[25px]">Top restaurant chains in Pune</div>
                    <div className="flex items-center justify-center ">
                        <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer" onClick={()=>{
                            setRestSlide(restSlide-2); console.log("click")}
                        }>
                            <FaArrowLeft />
                        </div>
                        <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer" onClick={()=>{
                            if(restData.length - 9 == restSlide) return false ;setRestSlide(restSlide+1)}}>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className="flex  overflow-hidden gap-6  mx-42 mt-10">
                   {
                        restData.map((item,index)=>{
                            return <RestCard {...item} key={index} style={{
                                transform:`translateX(-${restSlide*100}%)`
                            }}/>
                        })
                   }
                </div>
                <hr className="my-10 mx-40 border"/>
            </div>
        </>
    )
}