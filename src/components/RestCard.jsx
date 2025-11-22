import { FaStar } from "react-icons/fa";

export default function RestCard({image, offer, title ,rating, minTime, maxTime, name, place}){
    return(
        <div className="w-[273px]  shrink-0 grow mb-4">
            <div className="group  h-[182px] rounded-[15px]  relative ">
                <img className="group-hover:scale-110 duration-150 object-cover image-overlay w-full h-full" src={`images/${image}`} alt="" />
                <div className=" absolute h-full w-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tight ">
                   {offer}
                </div>
            </div>
            <div className="mt-3 text-xl font-bold">
                {title}
            </div>
            <div className="mt-3 text-xl font-bold flex item-center ">
                <FaStar className="mr-3"/> <p className="mb-5 text-[18px]">{rating}</p>
                <span className="ml-2 text-[18px] font-normal">{minTime} -{maxTime} mins</span>
            </div>
            <div className="text-slate-700">
                {name}
                <br />
                {place}
            </div>
        </div>
    )
}