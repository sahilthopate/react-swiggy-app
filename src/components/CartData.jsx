import { useContext } from "react"
import { DataContext } from "../context/DataContex"

export default function CardData(){
    const {selectCart ,setSelectCart} = useContext(DataContext);
    return(
        <>
            {
                selectCart && (
                    <div className=" fixed inset-0 bg-slate-300 top-0 left-0 z-70">
                        <p>Cart Section is an working progress !</p>
                        <div className="">
                            <button 
                            onClick={() => {setSelectCart(false);
                            }} 
                            className="absolute top-5 right-5 text-black text-3xl cursor-pointer group-hover:scale-110"
                            >
                            ✕
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}