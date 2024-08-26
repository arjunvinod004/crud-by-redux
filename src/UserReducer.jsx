import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./Data";
const userSlice = createSlice({
name:"users",
initialState: usersList,
reducers:{
adduser:(state,action)=>{
   state.push(action.payload)
},
updateuser:(state,action)=>{
    const {id,name,email}=action.payload
console.log(action);
const uu = state.find(user=>user.id==id);
if(uu){
    uu.name=name;
    uu.email=email;

}

},

deleteuser:(state,action)=>{
    const {id}=action.payload
    console.log(action);
    const uu = state.find(user=>user.id==id);
    if(uu){
        return state.filter(f=>f.id!==id)
    }
}
}
})
export const {adduser,updateuser,deleteuser}=userSlice.actions
export default userSlice.reducer;