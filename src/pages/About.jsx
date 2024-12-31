import Draggable from "react-draggable";
import WindowCard from "../components/WindowCard";

const About = () => {

    const skills = [
        { name: "git", image: "/skills/git.png" },
        { name: "github", image: "/skills/github.png" },
        { name: "mongodb", image: "/skills/mongodb.png" },
        { name: "sql", image: "/skills/sql.png" },
        { name: "express", image: "/skills/express.png" },
        { name: "nodejs", image: "/skills/nodejs.png" },
        { name: "reactjs", image: "/skills/reactjs.png" },
        { name: "nextjs", image: "/skills/nextjs.png" },
        { name: "html", image: "/skills/html.png" },
        { name: "css", image: "/skills/css.png" },
        { name: "ejs", image: "/skills/ejs.png" },
        { name: "tailwind", image: "/skills/tailwind.png" },
        { name: "bootstrap", image: "/skills/bootstrap.png" },
        { name: "java", image: "/skills/java.png" },
        { name: "c++", image: "/skills/cpp.png" },
        { name: "c", image: "/skills/c.png" },
        { name: "javascript", image: "/skills/js.png" },
        { name: "typescript", image: "/skills/ts.png" },
    ];

    return (
        <div className="min-h-screen">
            <Draggable
                bounds="parent"
            >
                <div className="absolute right-44 top-24">

                    <WindowCard title="/usr/aditya/experience" width="xl">
                        <div className="flex flex-col h-[36rem]">
                            <div className="flex items-center gap-x-6 bg-gray-300 border-b-[3px] border-black pl-4 ">
                                <span className="hover:font-semibold">File</span>
                                <span className="hover:font-semibold">View</span>
                                <span className="hover:font-semibold">Text</span>
                            </div>

                            <div className="flex-1 overflow-y-auto p-3 bg-white">
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
                                        <strong>AppLab HackXhibit’23</strong>: A 36-hour hackathon, creating an Android app to aid in finding lost items.{" "}
                                    </li>
                                    <li>
                                        <strong>OpenCode’23</strong>: Contributed to a month-long open-source challenge organised by IIIT Allahabad.{" "}
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
                                        <strong>Manipal Institute of Technology, Manipal Karnataka</strong><br />B. Tech Information Technology - 2026</li>

                                </ul>
                            </div>
                        </div>


                    </WindowCard>
                </div>

            </Draggable>

            <Draggable
                bounds="parent"
            >
                <div className="absolute left-24 top-48">
                    <WindowCard title="/usr/aditya/skill" width="lg">
                        <div className="flex h-full">
                            <div className="w-1/4 border-r-[3px] border-black p-1 pt-4 bg-gray-100">
                                <h4 className="text-md font-semibold mb-4 tracking-tight">Quick Access</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="cursor-pointer hover:font-semibold">Documents</li>
                                    <li className="cursor-pointer hover:font-semibold">Pictures</li>
                                    <li className="cursor-pointer hover:font-semibold">Music</li>
                                    <li className="cursor-pointer hover:font-semibold">Videos</li>
                                    <li className="cursor-pointer hover:font-semibold">Downloads</li>
                                </ul>
                            </div>

                            <div className="w-3/4 p-4">
                                <div className="grid grid-cols-4 gap-4">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="flex flex-col items-center hover:scale-105">
                                            <div className="w-16 h-16 bg-gray-200 border-[3px] border-black rounded-lg flex items-center justify-center">
                                                <img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    className="max-w-full max-h-full grayscale contrast-125 "
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
        </div>
    );
};

export default About;