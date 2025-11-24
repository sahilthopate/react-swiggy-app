import { useContext, useEffect } from "react"
import { DataContext } from "../context/DataContex";

export default function Partner(){
    const {partnerClick , setPartnerClick} = useContext(DataContext);

    useEffect(() => {
    if (partnerClick) {
        document.body.style.overflow = "hidden";   
    } else {
        document.body.style.overflow = "auto";    
    }
    return () => {
        document.body.style.overflow = "auto";   
    };
    }, [partnerClick]);

    return(
        <>
            {
                partnerClick && (
                    <div className=" fixed inset-0 bg-slate-300 z-50 overflow-y-auto">
                        <div>
                            <button 
                    onClick={() => setPartnerClick(false)} 
                    className="absolute top-5 right-5 text-black text-3xl cursor-pointer group-hover:scale-110"
                    >
                    ✕
                    </button>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-5xl px-100 py-70">Sponcer page does not load</h1> 
                        </div>
                    </div>
                )
            }
        </>
    )
}