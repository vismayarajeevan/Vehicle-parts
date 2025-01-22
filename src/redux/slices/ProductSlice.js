import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    activeButton:1,
    activeCondition:1,
    availability:'available',
    image:null,
    partName: '',
    category: null,
    description: '',
    contactNumber: '',

}
  


const productslice =createSlice({
    name:"products",
    initialState,
    reducers:{
        setActiveButton:(state,action)=>{
          state.activeButton =action.payload
        },
        setActiveCondition:(state,action)=>{
            state.activeCondition = action.payload
        },
        setAvailability:(state,action)=>{
            state.availability = action.payload
        },
        setImage:(state,action)=>{
            state.image = action.payload
        },
        setPartName:(state,action)=>{
            state.partName = action.payload
        },
        setCategory:(state,action)=>{
            state.category = action.payload
        },
        setDescription:(state,action)=>{
            state.description = action.payload
        },
        setContactNumber:(state,action)=>{
            state.contactNumber = action.payload
        },

        
          
    }
})

export const { setActiveButton,setActiveCondition,setAvailability,setImage,setPartName,setCategory,setDescription, setContactNumber,} =productslice.actions

    export default productslice.reducer