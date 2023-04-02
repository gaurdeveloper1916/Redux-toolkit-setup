const {createSlice} = require("@reduxjs/toolkit")
const intialState =[]
const cartSlice = createSlice({
    name:"cart",
    intialState,
    reducers:{
        add(state,action){
                //Redux:
                //return [...state,action.payload]
                state.push(action.payload)
        },
        remove(state,action){
                state = state.filter((item)=> item.id !== action.payload )
        },
    }
})
export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;

