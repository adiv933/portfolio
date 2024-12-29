import { useState } from "react";

const wallpapers = [
    "bg-gray-200",
    "bg-red-300",
    "bg-amber-300",
    "bg-lime-200",
    "bg-teal-300",
    "bg-orange-300",
    "bg-purple-300",
];


const useChangeWallpaper = () => {
    const [wallpaperIndex, setWallpaperIndex] = useState(0);
    function setWallpaper() {
        setWallpaperIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
    }
    return [wallpapers[wallpaperIndex], setWallpaper];
};

export default useChangeWallpaper;