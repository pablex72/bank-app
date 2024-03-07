import { createSlice } from "@reduxjs/toolkit";
import  { userList }  from "./Components/Data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers:{
        addUser: (state,action)=>{
            // console.log(action)
            state.push(action.payload)
        },
        updateUser: (state,action)=>{
            // console.log(action)
            const {id,isApproved} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu){
                uu.isApproved =isApproved;
            }
        },
        updateUserAmount: (state,action)=>{
            // console.log(action)
            const {id,amount} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu){
                uu.amount =amount;
            }
        },

    }
})
export const {addUser, updateUser,updateUserAmount} = userSlice.actions
export default userSlice.reducer;