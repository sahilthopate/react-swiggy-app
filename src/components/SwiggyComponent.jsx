import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";

export default function SwiggyComponent(){
    const [selectedComponent , setSelectedComponent] = useState(false);

    useEffect(() => {
        document.body.style.overflow = selectedComponent ? "hidden" : "auto";
    }, [selectedComponent]);

    return(
       <div>
            <div className="bg-[#ff5200] flex items-center justify-items-end pl-50">
                <div className="componetntOne w-[590px] cursor-pointer"> 
                    <img  className='w-full h-full' src="images/componentOne.png" alt="delivery" onClick={()=>{setSelectedComponent(true)}
                    }/>
                </div>
                <div className="componentTwo w-[590px] cursor-pointer">
                    <img className='w-full h-full ' src="images/componentTwo.png" alt="Dineout" onClick={()=>{setSelectedComponent(true)}}/>
                </div>
            </div>
             {selectedComponent && (
            <div className="fixed inset-0 bg-white bg-opacity-80 px-40 z-50 overflow-y-auto">
                <div>
                    <button 
                        onClick={() => setSelectedComponent(false)} 
                        className="absolute top-5 right-5 text-black text-3xl cursor-pointer"
                        >
                        ✕
                    </button>
                </div>
                <div className="text-[100px] m-50">
                    <div>
                        <ImSearch />
                    </div>
                    <div>
                        <p>Page Not Found</p>
                    </div>
                </div>
                </div>
             )}
       </div>      
        
    )
}