import { create } from "zustand";
import { supabase } from "../Service/SupaBase";

const useAuth = create((set) => ({
  User: null,
  Loading: false,
  Error: null,

  login: async (email, password) => {
    set({ Loading: true, Error: null });

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) set({ Error: error.message, Loading: false });
    else set({ User: data.user, Loading: false });
  },

  Signup: async (email, password) => {
    set({ Loading: true, Error: null });

    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) set({ Error: error.message, Loading: false });
    else {
      alert("Check your email to confirm your account!");
      set({ User: data.user, Loading: false });
    }
  },

  logout: async () => {
    set({ Loading: true, Error: null });

    const { error } = await supabase.auth.signOut();
    if (error) set({ Error: error.message, Loading: false });
    else set({ User: null, Loading: false });
  },
}));

export default useAuth;