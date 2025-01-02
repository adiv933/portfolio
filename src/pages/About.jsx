import Draggable from "react-draggable";
import WindowCard from "../components/WindowCard";
import { useEffect, useRef, useState } from "react";
import useDraggable from "../hooks/useDraggable";
import { useGSAP } from "@gsap/react";
import { usePreloader } from "../contexts/PreloaderContext";
import gsap from "gsap";
import { skills } from "../data";

const About = () => {

    const [showArrow, setShowArrow] = useState(true);
    const scrollableDivRef = useRef(null);
    const { isDragging, handleStart, handleStop } = useDraggable();
    const { setLoading } = usePreloader();

    useEffect(() => {
        const handleScroll = () => {
            if (scrollableDivRef.current.scrollTop > 0) {
                setShowArrow(false);
            } else {
                setShowArrow(true);
            }
        };

        const currentDiv = scrollableDivRef.current;
        if (currentDiv) {
            currentDiv.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (currentDiv) {
                currentDiv.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);


    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, [setLoading]);

    useGSAP(() => {
        gsap.from(".about", {
            y: 100,
            opacity: 0,
            delay: 3.4,
            duration: 2,
            ease: "power4.out",
            stagger: 0.3
        });
    })

    return (
        <div className="min-h-screen">
            <Draggable
                bounds="parent"
                onStart={handleStart}
                onStop={handleStop}
            >
                <div className={`about absolute right-44 top-24 ${isDragging
                    ? "cursor-grabbing"
                    : "cursor-grab"
                    }`}>

                    <WindowCard title="/usr/aditya/about/experience.txt" width="2xl">
                        <div className="flex flex-col h-[36rem] tracking-tight relative">
                            {/* Top bar */}
                            <div className="flex items-center gap-x-6 bg-gray-300 border-b-[3px] border-black pl-4">
                                <span className="hover:font-semibold">File</span>
                                <span className="hover:font-semibold">View</span>
                                <span className="hover:font-semibold">Text</span>
                            </div>

                            {/* Scrollable content */}
                            <div className="flex-1 overflow-y-auto p-3 bg-white " ref={scrollableDivRef}>
                                <h4 className="text-xl font-semibold underline mb-4">Work Experience</h4>
                                <ul className="space-y-4 text-md">
                                    <li>
                                        <strong>Intern - MakeItAiFor.Me, Remote</strong> (May 2024 – August 2024)
                                        <br />
                                        Full stack developer. Tech stack: ReactJS, NextJS, NestJS, Tailwind CSS
                                    </li>
                                    <li>
                                        <strong>Dev Head - IECSE Manipal, Manipal</strong> (August 2024 – Present)
                                        <br />
                                        The official Computer Science Club of Manipal
                                    </li>
                                    <li>
                                        <strong>Organizing Committee - Revels’24 fest, Manipal</strong> (January 2024 – March 2024)
                                        <br />
                                        System Admin and WebDev, Manipal
                                    </li>
                                    <li>
                                        <strong>Freelance Fullstack Developer</strong> (May 2024 – Present)
                                        <br />
                                        Working with multiple clients under tight deadlines
                                    </li>
                                </ul>

                                <h4 className="text-xl font-semibold underline mt-8 mb-4">Experiences</h4>
                                <ul className="space-y-4 text-md">
                                    <li>
                                        <strong>AppLab HackXhibit’23</strong>: A 36-hour hackathon, creating an Android app to aid in finding lost items.
                                    </li>
                                    <li>
                                        <strong>OpenCode’23</strong>: Contributed to a month-long open-source challenge organised by IIIT Allahabad.
                                    </li>
                                    <li>
                                        <strong>DevSprint 2024</strong>: Participated in this hackathon creating a team collaboration platform – TopFlow.
                                    </li>
                                    <li>
                                        Worked on the frontend and the server of <strong>Order of Chaos</strong> - a coding + fast typing multiplayer event
                                        creating a new defense mechanism for the game from scratch.
                                    </li>
                                </ul>
                                <h4 className="text-xl font-semibold underline mt-8 mb-4">Education</h4>
                                <ul className="space-y-4 text-md">
                                    <li>
                                        <strong>Manipal Institute of Technology, Manipal Karnataka</strong><br />B. Tech Information Technology - 2026
                                        <span className="blinking-cursor">|</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Down arrow indicator */}
                            {showArrow && (
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center ">
                                    <div className="animate-bounce ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-7 h-7 text-black border-[3px] border-black rounded-full"
                                            fill="black"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    </WindowCard>

                </div>

            </Draggable >

            <Draggable
                bounds="parent"
                onStart={handleStart}
                onStop={handleStop}

            >
                <div className={`about absolute left-24 top-48 ${isDragging
                    ? "cursor-grabbing"
                    : "cursor-grab"
                    }`}>
                    <WindowCard title="/usr/aditya/about/skills" width="lg">
                        <div className="flex h-full tracking-tight">
                            <div className="w-1/4 border-r-[3px] border-black p-1 pt-4 bg-gray-100">
                                <h4 className="text-md font-semibold mb-4  tracking-tight">quick access</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="cursor-pointer hover:font-semibold"><i class="ri-article-line"> </i>documents</li>
                                    <li className="cursor-pointer hover:font-semibold"><i class="ri-gallery-line"> </i>pictures</li>
                                    <li className="cursor-pointer hover:font-semibold"><i class="ri-music-2-line"> </i>music</li>
                                    <li className="cursor-pointer font-semibold"><i class="ri-id-card-line"> </i>skills</li>
                                    <li className="cursor-pointer hover:font-semibold"><i class="ri-folder-download-line"> </i>downloads</li>
                                </ul>
                            </div>

                            <div className="w-3/4 p-4">
                                <div className="grid grid-cols-4 gap-4">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="flex flex-col items-center hover:scale-105 ">
                                            <div className="w-16 h-16 bg-gray-200 border-[3px] border-black rounded-lg flex items-center justify-center">
                                                <img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    className="max-w-full max-h-full grayscale contrast-125 hover:grayscale-0"
                                                />
                                            </div>
                                            <p className="text-md font-semibold text-center">{skill.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </WindowCard>
                </div>

            </Draggable>
        </div >
    );
};

export default About;