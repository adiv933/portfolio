import Draggable from "react-draggable";
import WindowCard from "../components/WindowCard";
import Widget from "../components/Widget";
import MacSVG from "../../public/MacSVG";

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-evenly">
            <Widget className="fixed left-8 top-20" />
            <Draggable
                bounds="parent"
            >
                <div className="absolute">
                    <WindowCard title="hello world!" className="px-6 py-4" width="md">
                        <MacSVG />
                        <p className="text-gray-700 tracking-tight text-justify">
                            <b>Hi, I'm Aditya</b>
                            <br />
                            <br />
                            A full-stack developer and tech enthusiast. Let's collaborate and bring ideas to life!
                        </p>
                        <button className="custom-box-shadow border-4 border-black w-full p-2 mt-4 hover:bg-black hover:text-white font-bold flex justify-center items-center gap-x-2">
                            click to download resume
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
                        </button>
                    </WindowCard>
                </div>
            </Draggable>
        </div>
    );
};

export default Home;
