import { create } from "zustand";
import { supabase } from "../Service/SupaBase";



const useAuth = create((set)=>({
    User: null,
    Loading:false,
    Error:null, 

    login: async (email,password) =>{
        set({Loadinging:true,Error:null})

        const {data,Error}= await supabase.auth.signInwithpassword({email,password})
        if(Error) set({Error:Error.message,Loading:false})
        else set({User:data.User,Loading:false})
    },

    Signup:async(email,password)=>{
        set({Loading:true,Error:null})
        const {data,Error}= await supabase.auth.signUp({email,password})
        if(Error) set({Error:Error.message,Loading:false})
        else {
       alert("Check your email to confirm your account!");
        set({User:data.User,Loading:false})
        }
    },

    logout: async()=>{
        set({Loading:true,Error:null})
        const {Error}= await supabase.auth.signOut()
        if(Error) set({Error:Error.message,Loading:false})
        else set({User:null,Loading:false})
    }
}))


export default useAuth