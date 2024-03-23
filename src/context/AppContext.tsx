'use client';
import { createContext, useState } from "react";
import { AppContextTypes } from "@/types/context";

export const AppContext = createContext<AppContextTypes | undefined>(undefined)

export default function AppState({children}: { children: React.ReactNode }) {
    
    // 1. Toggling Sidebar
    
    const [toggleSidebar, setToggleSidebar] = useState(false);
    
    // 1. Toggling Sidebar

    return (
        <AppContext.Provider value={{toggleSidebar, setToggleSidebar}} >
            {children}
        </AppContext.Provider>
    )
}