import { useState } from "react";

export default function useDraggable() {
    const [isDragging, setIsDragging] = useState(false);
    const handleStart = () => {
        setIsDragging(true);
    };
    const handleStop = () => {
        setIsDragging(false);
    };
    return isDragging;
}
