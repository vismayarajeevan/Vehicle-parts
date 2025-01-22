import React from 'react'
import ImageSlider from '../Components/ImageSlider'
import Header from '../Components/Header'
import CategorySlider from '../Components/CategorySlider'
import AddButton from '../Components/AddButton'
import Choices from '../Components/Choices'
import GoogleMapView from '../Components/GoogleMapView'

const Home = () => {
  return (
    <>
     <Header />
     <ImageSlider />
     <AddButton />
     <CategorySlider />
     <Choices />
     <GoogleMapView />
    </>
  )
}

export default Home