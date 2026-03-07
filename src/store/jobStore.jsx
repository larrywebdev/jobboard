import { create } from "zustand";

export const useJobStore = create((set) => ({
  filter: "",
  setFilter: (filter) => set({ filter }),
}));
