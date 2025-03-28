import gsap from "gsap";
import { useEffect } from "react";
import { usePreloader } from "../contexts/PreloaderContext";
import "../preloader.css";

const Preloader = () => {
    const { loading } = usePreloader();

    useEffect(() => {
        if (!loading) return;

        const timeline = gsap.timeline();

        timeline.from(".preloader", {
            y: "100%", 
            duration: 1,
            ease: "elastic.out(0.1, 0.2)",
        })
            .to(".preloader", {
                y: "-100%",
                duration: 1,
                delay: 2, 
                ease: "elastic.out(0.1, 0.2)",
            });

        return () => {
            timeline.kill();
        };
    }, [loading]);

    if (!loading) return null;

    return (
        <div className="preloader">
            <div className="loader"></div>
        </div>
    );
};

export default Preloader;
