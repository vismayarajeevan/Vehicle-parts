import React from 'react'
import ImageSlider from '../Components/ImageSlider'
import Header from '../Components/Header'
import CategorySlider from '../Components/CategorySlider'
import AddButton from '../Components/AddButton'

const Home = () => {
  return (
    <>
     <Header />
     <ImageSlider />
     <AddButton />
     <CategorySlider />
    </>
  )
}

export default Home