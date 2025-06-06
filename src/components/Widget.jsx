import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Widget = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    useGSAP(() => {
        gsap.from(".widget", {
            x: -200,
            opacity: 0,
            delay: 3.7,
            duration: 2,
            ease: "power2",
        });
    })


    return (
        <div className="widget fixed left-8 top-20 max-w-[22rem] shadow-lg rounded-lg border-[3px] border-black bg-white">
            <div className="px-4 py-4 flex flex-col items-center">
                {/* <Link to="https://mac-template.webflow.io/" target="_blank" class="tooltip"> */}
                <img
                    src="images/pc.png"
                    alt="pc"
                    className="w-24 h-24 rounded-2xl border-[3px] border-black mb-2 contrast-125 grayscale hover:grayscale-0 hover:contrast-100"
                />
                {/* <span class="tooltip-text">design inspiration from</span> */}
                {/* </Link> */}
                <div className="text-2xl font-semibold text-gray-700">{dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>

            <div className="px-3 py-4 mx-2 rounded-lg border-[3px] border-black bg-gray-200">
                <div className="flex justify-between items-center gap-x-2 hover:translate-y-[-2px] ">
                    <div className="text-sm text-gray-600 font-semibold ">cpu</div>
                    <div className="h-4 w-52 bg-gray-200 rounded-full border-2 border-black ">
                        <div className="h-full bg-gray-500 hover:bg-emerald-300" style={{ width: "50%" }}></div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3 gap-x-2 hover:translate-y-[-2px] ">
                    <div className="text-sm text-gray-600 font-semibold ">mem</div>
                    <div className="h-4 w-52 bg-gray-200 rounded-full border-2 border-black ">
                        <div className="h-full bg-gray-500 hover:bg-blue-300" style={{ width: "70%" }}></div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3 gap-x-2 hover:translate-y-[-2px] ">
                    <div className="text-sm text-gray-600 font-semibold ">sleep</div>
                    <div className="h-4 w-52 bg-gray-200 rounded-full border-2 border-black ">
                        <div className="h-full bg-gray-500 hover:bg-red-500" style={{ width: "20%" }}></div>
                    </div>
                </div>
            </div>

            <MusicPlayer />
        </div>
    );
};

const MusicPlayer = () => {
    const [isNextHovered, setIsNextHovered] = useState(false);
    const [isPrevHovered, setIsPrevHovered] = useState(false);

    return (
        <div className="w-full flex items-center py-4 rounded-lg shadow-lg justify-evenly ">
            <img
                src="images/flawed_mangoes.jpg"
                alt="flawed_mangoes"
                className="w-20 h-20 rounded-lg hover:scale-105 border-[3px] border-black"
            />

            <div className="flex flex-col items-start justify-between">
                <div className="text-lg font-semibold self-center">the beginning</div>
                <div className="flex items-center space-x-4">
                    <button
                        onMouseEnter={() => setIsPrevHovered(true)}
                        onMouseLeave={() => setIsPrevHovered(false)}
                        className="p-2 hover:scale-110 "
                    >
                        {isPrevHovered ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
                            </svg>
                        )}
                    </button>

                    <button className="p-2 hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <button
                        onMouseEnter={() => setIsNextHovered(true)}
                        onMouseLeave={() => setIsNextHovered(false)}
                        className="p-2 hover:scale-110 "
                    >
                        {isNextHovered ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Widget;
