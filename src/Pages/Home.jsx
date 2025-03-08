import React, { useEffect, useState } from "react";
import ImageSlider from "../Components/ImageSlider";
import Header from "../Components/Header";
import CategorySlider from "../Components/CategorySlider";
import AddButton from "../Components/AddButton";

import Choices from "../Components/Choices";
import { displayAllPartsApi } from "../services/allAPI";






const Home = () => {
  const [getAllParts, setGetAllParts] = useState([]);

  useEffect(() => {
    displayAllParts();
    
  },[]);


  




  const displayAllParts = async () => {
    try {
      const result = await displayAllPartsApi();
      console.log("result get", result);
      if (result.status == 200) {
        setGetAllParts(result.data.carParts);
      }
    } catch (error) {
      console.error("Failed to fetch parts:", error);
    }
  };

  
  return (
    <>
      <ImageSlider />
      <AddButton displayAllParts={displayAllParts}/>
      <CategorySlider displayData={getAllParts}/>
      <Choices displayData={getAllParts} /> 
    

    
    </>
  );
};

export default Home;
