import { useContext, useState } from "react";
import SwiggyContent from "./SwiggyContent";
import { CgProfile } from "react-icons/cg";
import { DataContext } from "../context/DataContex";
import Partner from "./Partner";

export default function SwiggyNavbar(){
    const {setPartnerClick} = useContext(DataContext);
    const [loginClick , setLoginClick] = useState(false);

    return(
        <>
            <header className=" shadow-xl bg-[#ff5200] pt-8" >
                    <div className="max-w-1280px mx-auto px-25 flex items-center">
                        <div className="w-[100px]">
                            <img src="images/swiggylogo.png" className="w-full" alt="" />
                        </div>
                        <div className="font-bold text-[25px] text-[#ffffff] ">
                            <span>Swiggy</span>
                        </div>
                        <nav className="border-[white] mx-5 flex list-none gap-7 ml-auto text-[#ffffff] font-bold text-[1rem] py-5">
                            <li><a  href="#">Swiggy Corporate</a></li>
                            <li><button className="cursor-pointer" onClick={()=>{setPartnerClick(true);
                            }}>Partner with us</button></li>
                            <li className="border-white-200 "><a  href="#DowndloadApp" className="duration-500">Get the App</a></li>
                            <li><button  onClick={()=>
                                {
                                    setLoginClick(true);
                                    if(loginClick){
                                        setLoginClick(false);
                                    }
                                }}
                                >< CgProfile className="text-[2rem] cursor-pointer"/></button></li>
                            {
                                loginClick && (
                                    <div className=" bg-orange-300 w-40 h-auto absolute top-25 right-30 rounded-[14px]">
                                        <div className="mb-0.5 group">
                                            <button className="text-black cursor-pointer py-2 w-full group-hover:bg-amber-500">login</button>
                                        </div>
                                        <div className="mt-0.5 group">
                                            <button className="text-black cursor-pointer py-2 w-full group-hover:bg-amber-500">Sign up</button>
                                        </div>
                                    </div>
                                )
                            }
                        </nav>

                    </div>
            </header>
            <SwiggyContent />
            <Partner />
        </>
    )
}