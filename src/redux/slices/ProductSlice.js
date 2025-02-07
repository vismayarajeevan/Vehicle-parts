import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    activeButton:1,
    activeCondition:1,
    parts: [],
    locationAccessGranted: false,
    location: null,
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
        // Reset the active category button
    resetActiveButton: (state) => {
        state.activeButton = "";  // Reset to initial value (empty string or default category)
      },
      // Reset the active condition button
      resetActiveCondition: (state) => {
        state.activeCondition = "";  // Reset to initial value (empty string or default condition)
      },
      addPart: (state, action) => {
        state.parts.push(action.payload)
      },
      setLocationAccess: (state, action) => {
        state.locationAccessGranted = action.payload; // Add this action
      },
      setLocation: (state, action) => {
        state.location = action.payload;
    },
    setParts: (state, action) => {
      state.parts = action.payload;
  },
    }
})

export const { setActiveButton,setActiveCondition, resetActiveButton, resetActiveCondition,addPart, setLocationAccess, setLocation, setParts} =productslice.actions

    export default productslice.reducer