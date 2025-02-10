import React, { useEffect, useState } from "react";
import ImageSlider from "../Components/ImageSlider";
import Header from "../Components/Header";
import CategorySlider from "../Components/CategorySlider";
import AddButton from "../Components/AddButton";

import Choices from "../Components/Choices";
import { displayAllPartsApi } from "../services/allAPI";
import { useLocation } from "react-router-dom";






const Home = () => {
  const [getAllParts, setGetAllParts] = useState([]);

  useEffect(() => {
    displayAllParts();
    
  },[]);


  




  const displayAllParts = async () => {
    try {
      const result = await displayAllPartsApi();
      console.log("result", result);
      if (result.status == 200) {
        setGetAllParts(result.data.carParts);
      }
    } catch (error) {
      console.error("Failed to fetch parts:", error);
    }
  };

  
  return (
    <>
      <Header />
      <ImageSlider />
      <AddButton displayAllParts={displayAllParts}/>

      <CategorySlider />
  
      <Choices displayData={getAllParts} /> 
    

    
    </>
  );
};

export default Home;
