import { useContext } from "react"
import { DataContext } from "../context/DataContex"
import RestCard from "./RestCard";

export default function OnlineDelivery(){
    const {restData } = useContext(DataContext);
    return(
        <div className="max-w-[1200px] mx-auto mb-20 ">
            <div className="flex items-center justify-between mb-10">
                <div className="font-bold text-[25px]">Restaurant with online food delivery in pune</div>
            </div>
            <div className="grid grid-cols-4 gap-4 ">
                {
                    restData.map(
                        (data,index)=>{
                            return <RestCard {...data} key={index}/>
                        }
                    )
                }
            </div>
        </div>
    )
}