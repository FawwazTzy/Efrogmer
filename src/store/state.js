// store/state.js
import { create } from "zustand";

export const useZustandState = create((set) => ({
  windowSize: { width: 0, height: 0 },
  isPortrait: false,
  isMobileDevice: false,
  setWindowSize: (size) => set({ windowSize: size }),
  setIsPortrait: (v) => set({ isPortrait: v }),
  setIsMobileDevice: (v) => set({ isMobileDevice: v }),
}));
