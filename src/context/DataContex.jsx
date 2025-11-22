import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children})=>{
    const [category , setCategory] = useState([]);
    const [restData , setRestData] = useState([]);
    const [query ,setQuery] = useState("");
    const [locationQuery ,setLocationQuery] = useState("");
    const [slide , setSlide] = useState(0);
    const [selectedItem , setSelectedItem] = useState(null);
    const [location ,setLocation] =useState([]);

    const [selectCart , setSelectCart] = useState(false);
   
    const mergedData = [...category, ...restData];

    const filtereddata = mergedData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    // let filtereddata = category.filter((food)=>{
    //   const searchedData = food.name;
    //   return searchedData.toLowerCase().includes(query.toLowerCase());
    // })

  
    
    return(
    <DataContext.Provider value={{category ,setCategory ,filtereddata , query ,setQuery ,slide , setSlide, restData , setRestData ,selectedItem , setSelectedItem ,location ,setLocation ,locationQuery ,setLocationQuery ,selectCart , setSelectCart }}>
        {children}
    </DataContext.Provider>
    )
}