import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 1200);

        checkScreenSize(); 
        window.addEventListener("resize", checkScreenSize); // Listen for resize

        return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
    }, []);

    return isSmallScreen;
};

export default useScreenSize;
