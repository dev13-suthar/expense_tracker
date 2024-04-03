import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
    createdAt: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
    amount:number | null;
    transactions: Array<string> | null;
    updatedAt: string | null;
    __v: number | null;
    _id: string | null;
  } | null;


type InitState  = {
    user:UserType
    token:null | string;
}

const initialState:InitState = {
    user:null,
    token:null,
}

export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setuser:(state,action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        removeUser:(state)=>{
            state.user = null;
            state.token = null;
        },
        addMoneyToWallet:(state,action)=>{
            if(state.user){
                state.user.amount += action.payload.amount;
            } 
        },
        spendMoneyFromWallet:(state,action)=>{
            if (state.user && state.user.amount !== null && state.user.amount !== undefined) {
                if (state.user.amount > action.payload.amount) {
                    state.user.amount = (state.user.amount ?? 0) - action.payload.amount;
                }
            }
        }
    }
})

export const {setuser,removeUser,addMoneyToWallet,spendMoneyFromWallet} = globalSlice.actions;
export default globalSlice.reducer;