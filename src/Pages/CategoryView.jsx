import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import OverallView from '../reusablecomponents/OverallView';


const CategoryView = () => {
  const { categoryName } = useParams(); // Access category name from URL

  const location = useLocation(); // ✅ Use useLocation to access state

  const categoryItems = location.state?.categoryItems || []; // 
 

 
  const filteredItems = categoryItems.filter(item => item.category.toLowerCase() === categoryName.toLowerCase());

  console.log('Category Name:', categoryName); // Debugging
  console.log('Filtered Category Items:', filteredItems); // Debugging
  



  return (
    <>
      <OverallView items={filteredItems} title={`Category: ${categoryName}`} />
    </>
  );
};

export default CategoryView;
