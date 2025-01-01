import React, { useEffect } from "react";
import WindowCard from "../components/WindowCard";
import { usePreloader } from "../contexts/PreloaderContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {

    const { setLoading } = usePreloader();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, [setLoading]);

    useGSAP(() => {
        gsap.from(".contact-card", {
            opacity: 0,
            delay: 3.4,
            duration: 2,
            ease: "power4.out",
        });
    })

    return (
        <div className="contact-card min-h-screen flex items-center justify-center">
            <WindowCard title="/usr/aditya/contact">
                <div className="p-4">
                    <ul className="list-none space-y-4 text-sm">
                        <li className="flex items-center gap-4 contrast-125 grayscale hover:grayscale-0 hover:contrast-100 hover:translate-y-[-2px]">
                            <img
                                src="images/gmail.png"
                                alt="mail"
                                className="w-8 h-8"
                            />
                            <a
                                href="mailto:adityav090304@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-lg"
                            >
                                mail: adityav090304@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-4 contrast-125 grayscale hover:grayscale-0 hover:contrast-100 hover:translate-y-[-2px]">
                            <img
                                src="images/linkedin.png"
                                alt="linkedin"
                                className="w-8 h-8"
                            />
                            <a
                                href="https://www.linkedin.com/in/adiver"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-lg"
                            >
                                linkedin: linkedin.com/in/adiver
                            </a>
                        </li>
                        <li className="flex items-center gap-4 contrast-125 grayscale hover:grayscale-0 hover:contrast-100 hover:translate-y-[-2px]">
                            <img
                                src="images/github.png"
                                alt="github"
                                className="w-8 h-8"
                            />
                            <a
                                href="https://github.com/adiv933"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-lg"
                            >
                                github: github.com/adiv933
                            </a>
                        </li>
                    </ul>
                </div>
            </WindowCard>
        </div>
    );
};

export default Contact;
