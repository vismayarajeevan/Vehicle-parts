// import React, { useEffect, useState } from "react";
// import ImageSlider from "../Components/ImageSlider";
// import Header from "../Components/Header";
// import CategorySlider from "../Components/CategorySlider";
// import AddButton from "../Components/AddButton";

// import Choices from "../Components/Choices";
// import { displayAllPartsApi } from "../services/allAPI";






// const Home = () => {
//   const [getAllParts, setGetAllParts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Add isLoading state

//   useEffect(() => {
//     displayAllParts();
    
//   },[]);


  




//   const displayAllParts = async () => {
//     try {
//       const result = await displayAllPartsApi();
//       console.log("result get", result);
//       if (result.status == 200) {
//         setGetAllParts(result.data.carParts);
//       }
//     } catch (error) {
//       console.error("Failed to fetch parts:", error);
//     }
//   };

  
//   return (
//     <>
//     <Header/>
//       <ImageSlider />
//       <AddButton displayAllParts={displayAllParts}/>
//       <CategorySlider displayData={getAllParts}/>
//       <Choices displayData={getAllParts} /> 
//       <Choices displayData={getAllParts} isLoading={isLoading} />

    
//     </>
//   );
// };

// export default Home;




import React, { useEffect, useState } from "react";
import ImageSlider from "../Components/ImageSlider";
import Header from "../Components/Header";
import CategorySlider from "../Components/CategorySlider";
import AddButton from "../Components/AddButton";
import Choices from "../Components/Choices";
import { displayAllPartsApi } from "../services/allAPI";

const Home = () => {
  const [getAllParts, setGetAllParts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    displayAllParts();
  }, []);

  const displayAllParts = async () => {
    try {
      const result = await displayAllPartsApi();
      if (result.status === 200) {
        setGetAllParts(result.data.carParts);
      }
    } catch (error) {
      console.error("Failed to fetch parts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <ImageSlider />
      <AddButton displayAllParts={displayAllParts} />
      <CategorySlider displayData={getAllParts} />
      <Choices displayData={getAllParts} isLoading={isLoading} />
    </>
  );
};

export default Home;