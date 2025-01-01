import { createContext, useState, useContext } from "react";

const PreloaderContext = createContext();

export const PreloaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <PreloaderContext.Provider value={{ loading, setLoading }}>
            {children}
        </PreloaderContext.Provider>
    );
};

export const usePreloader = () => useContext(PreloaderContext);
