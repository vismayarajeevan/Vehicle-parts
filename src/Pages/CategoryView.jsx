import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import OverallView from '../reusablecomponents/OverallView';
import { CategoryContext } from '../context/CategoryProvider';

const CategoryView = () => {
  const { categoryName } = useParams(); // Access category name from URL
  // const location = useLocation();

  const {categories} = useContext(CategoryContext)
// Get items for the selected category
const categoryItems = categories[categoryName.toLowerCase()] || [];

console.log('Category Name:', categoryName); // Debugging
console.log('Category Items:', categoryItems); // Debugging

  // const { categoryItems } = location.state || { categoryItems: [] };

  console.log('Category Name:', categoryName); // Debugging
  console.log('Category Items:', categoryItems); // Debugging

  return (
    <>
      <OverallView items={categoryItems} title={`Category: ${categoryName}`} />
    </>
  );
};

export default CategoryView;
