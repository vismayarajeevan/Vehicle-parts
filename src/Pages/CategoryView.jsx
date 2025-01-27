import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import OverallView from '../reusablecomponents/OverallView';

const CategoryView = () => {
  const { categoryName } = useParams(); // Access category name from URL
  const location = useLocation();
  const { categoryItems } = location.state || { categoryItems: [] };

  console.log('Category Name:', categoryName); // Debugging
  console.log('Category Items:', categoryItems); // Debugging

  return (
    <>
      <OverallView items={categoryItems} title={`Category: ${categoryName}`} />
    </>
  );
};

export default CategoryView;
