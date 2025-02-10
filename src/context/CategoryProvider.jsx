import React, { createContext, useState } from 'react'

export const CategoryContext = createContext()

const CategoryProvider = ({children}) => {

    const [categories, setCategories] = useState({
            car: [],
            bike: [],
            bus: [],
            cycle: [],
            scooty: [],
            others: [],
          });
        
          const addItemToCategory = (category, item) => {
            console.log(`Adding item to category: ${category}`, item); // Debugging
            setCategories((prevCategories) => ({
              ...prevCategories,
              [category]: [...prevCategories[category], item],
            }));
          };
    
  return (
    <CategoryContext.Provider value={{categories, addItemToCategory}}>
        {children}
        </CategoryContext.Provider>
  )
}

export default CategoryProvider