import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import WindowCard from "../components/WindowCard";
import { useEffect } from "react";
import { usePreloader } from "../contexts/PreloaderContext";

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
            stagger: 0.3
        });
    })

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, [setLoading]);



    return (
        <div className="min-h-screen border border-transparent">
            <div className="project-heading sticky top-32 ml-28 header z-10 ">
                <h1 className=" text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                <p className="text-xl">beep beep boop bop</p>
            </div>
            <div className="project-container h-[85vh] mt-48 ml-8 mr-36 mb-4 p-8 border-[3px] border-black rounded-lg panel relative z-20 flex items-center gap-x-12 overflow-x-auto   custom-box-shadow">

                {Array.from({ length: 8 }).map((_, index) => (
                    <WindowCard title={`project#${index + 1}`} key={index} width="4xl">

                        <div className="sticky top-32 ml-28 header z-10 flex" >
                            <p className="text-xl">beep beep boop bop</p>
                            <p className="text-xl">beep beep boop bop</p>
                            <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                            <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                            <p className="text-xl">beep beep boop bop</p>
                            <p className="text-xl">beep beep boop bop</p>
                            <p className="text-xl">beep beep boop bop</p>
                        </div>
                    </WindowCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
