import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isInteractive, setIsInteractive] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updatePosition);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    return (
        <>
            {/* <img
                src={isInteractive ? "/cursor-pointer.png" : "/cursor.png"}
                className="pointer fixed top-3 left-3 w-8 h-8 pointer-events-none"
                style={{
                    transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
                }}
            /> */}
            <div
                className="pointer fixed top-3 left-3 w-4 h-4 rounded-full mix-blend-difference bg-white pointer-events-none transition-all duration-100 ease-[cubic-bezier(0.19, 1, 0.22, 1)]"
                style={{
                    transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
                }}>
            </div>
        </>
    );
};

export default CustomCursor;
