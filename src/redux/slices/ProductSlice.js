import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    activeButton:1,
    activeCondition:1,
   

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
     
    }
})

export const { setActiveButton,setActiveCondition, resetActiveButton, resetActiveCondition} =productslice.actions

    export default productslice.reducer