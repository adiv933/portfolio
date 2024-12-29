import MacSVG from "../../public/MacSVG";
import WindowCard from "../components/WindowCard";

const Projects = () => {
    return (
        <div className="min-h-screen">
            <div className="sticky top-28 ml-28 header z-10">
                <h1 className="text-6xl font-bold mb-2">Projects</h1>
                <p className="text-xl">beep beep boop bop</p>
            </div>
            <div className="h-screen mt-40 ml-8 mr-36 p-8 border-[3px] border-black rounded-lg panel relative z-20 flex items-center gap-x-12 overflow-hidden">
                <WindowCard title="hello world!">
                    <MacSVG />
                    <p className="text-gray-700 tracking-tight">
                        <b>Hi, I'm Aditya</b><br /><br />
                        A full-stack developer and tech enthusiast. Let's collaborate and bring ideas to life!
                    </p>
                    <button className="custom-box-shadow border-4 border-black w-full p-2 mt-4 hover:bg-black hover:text-white font-bold flex justify-center items-center gap-x-2">
                        click to download resume
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                        </svg>

                    </button>
                    
                </WindowCard>
                <WindowCard title="hello world!">
                    <MacSVG />
                    <p className="text-gray-700 tracking-tight">
                        <b>Hi, I'm Aditya</b><br /><br />
                        A full-stack developer and tech enthusiast. Let's collaborate and bring ideas to life!
                    </p>
                    <button className="custom-box-shadow border-4 border-black w-full p-2 mt-4 hover:bg-black hover:text-white font-bold flex justify-center items-center gap-x-2">
                        click to download resume
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                        </svg>

                    </button>
                </WindowCard>   
                <WindowCard title="hello world!">
                    <MacSVG />
                    <p className="text-gray-700 tracking-tight">
                        <b>Hi, I'm Aditya</b><br /><br />
                        A full-stack developer and tech enthusiast. Let's collaborate and bring ideas to life!
                    </p>
                    <button className="custom-box-shadow border-4 border-black w-full p-2 mt-4 hover:bg-black hover:text-white font-bold flex justify-center items-center gap-x-2">
                        click to download resume
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                        </svg>

                    </button>
                </WindowCard>
                <WindowCard title="hello world!">
                    <MacSVG />
                    <p className="text-gray-700 tracking-tight">
                        <b>Hi, I'm Aditya</b><br /><br />
                        A full-stack developer and tech enthusiast. Let's collaborate and bring ideas to life!
                    </p>
                    <button className="custom-box-shadow border-4 border-black w-full p-2 mt-4 hover:bg-black hover:text-white font-bold flex justify-center items-center gap-x-2">
                        click to download resume
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                        </svg>

                    </button>
                </WindowCard>
            </div>
        </div>
    );
};

export default Projects;
