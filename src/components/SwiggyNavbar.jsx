import { useContext } from "react";
import SwiggyContent from "./SwiggyContent";
import { CgProfile } from "react-icons/cg";
import { DataContext } from "../context/DataContex";
import RestCard from "./RestCard";

export default function SwiggyNavbar(){
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
                            <li><a  href="#">Partner with us</a></li>
                            <li className="border-white-200 "><a  href="#DowndloadApp" className="duration-500">Get the App</a></li>
                            <li><a  href="#">< CgProfile className="text-[2rem]"/></a></li>
                        </nav>

                    </div>
            </header>
            <SwiggyContent />
        </>
    )
}