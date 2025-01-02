import { useState } from "react";

const wallpapers = [
    "bg-[url('/walls/wall0.jpg')]",
    "bg-[url('/walls/wall1.jpg')]",
    "bg-[url('/walls/wall2.jpg')]",
    "bg-[url('/walls/wall3.jpg')]",
    "bg-[url('/walls/wall4.jpg')]",
    "bg-[url('/walls/wall5.jpg')]",
    "bg-[url('/walls/wall6.jpg')]",
];


export default function useChangeWallpaper() {
    const [wallpaperIndex, setWallpaperIndex] = useState(0);
    function setWallpaper() {
        setWallpaperIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
    }
    return [wallpapers[wallpaperIndex], setWallpaper];
};

