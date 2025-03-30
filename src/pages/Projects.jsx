import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import WindowCard from "../components/WindowCard";
import { useEffect } from "react";
import { usePreloader } from "../contexts/PreloaderContext";
import { projects } from "../data";
import { Link } from "react-router-dom";

const Projects = () => {
    const { setLoading } = usePreloader();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        gsap.from(".project-container", {
            y: 200,
            opacity: 0,
            delay: 3.5,
            duration: 3,
            ease: "elastic.out(0.6,0.4)",
        });
        gsap.from(".project-heading", {
            y: 100,
            opacity: 0,
            delay: 3.4,
            duration: 2,
            ease: "power4.out",
            stagger: 0.3,
        });
    });

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, [setLoading]);

    return (
        <div className="min-h-screen border border-transparent">
            <div className="project-heading sticky top-32 ml-28 header z-10">
                <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">
                    Projects
                </h1>
                <p className="text-xl">beep beep boop bop</p>
            </div>
            <div className="project-container h-[85vh] mt-48 ml-8 mr-36 mb-4 p-8 border-[3px] border-black rounded-lg panel relative z-20 flex items-center gap-x-12 overflow-x-auto custom-box-shadow">
                {projects.map((project, index) => (
                    <WindowCard
                        title={`project#${index + 1}`}
                        key={index}
                        width="2xl"
                        className="w-[360px] h-[450px] flex flex-col justify-between"
                    >
                        <div className="w-full flex flex-col h-full overflow-hidden">
                            <div className="relative w-full h-48 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-9=84 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 duration-300"
                                />

                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 duration-300 flex justify-center items-center">
                                    <span className="text-white text-lg font-bold">{project.name}</span>
                                </div>
                            </div>

                            <div className="w-full p-2 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full border border-black"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-x-4 items-center justify-around mb-3 px-4">
                                <Link
                                    to={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-box-shadow border-4 border-black w-36 h-8 p-1 hover:bg-black hover:text-white font-bold flex justify-center items-center gap-x-1"
                                >
                                    Live Link
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>

                                <Link
                                    to={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-box-shadow border-4 border-black w-32 h-8 p-2 hover:bg-black hover:text-white font-bold flex justify-center items-center gap-x-2"
                                >
                                    Code
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>

                            </div>
                        </div>
                    </WindowCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
