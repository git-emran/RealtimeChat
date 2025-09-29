import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "John", _id: 123, age: 24 },
  isLoggedIn: false,
  isLoading: false,

  login: () => {
    console.log("Just loggedIn");
    set({ isLoggedIn: true, isLoading: true });
  },
}));
