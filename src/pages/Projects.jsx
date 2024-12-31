import MacSVG from "../../public/images/MacSVG";
import WindowCard from "../components/WindowCard";

const Projects = () => {
    return (
        <div className="min-h-screen border border-transparent">
            <div className="sticky top-32 ml-28 header z-10 ">
                <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                <p className="text-xl">beep beep boop bop</p>
            </div>
            <div className="h-[85vh] mt-48 ml-8 mr-36 mb-4 p-8 border-[3px] border-black rounded-lg panel relative z-20 flex items-center gap-x-12 overflow-x-auto   custom-box-shadow">
                {Array.from({ length: 8 }).map((_, index) => (
                    <WindowCard title={`project#${index + 1}`} key={index} width="4xl">
                        <div className="sticky top-32 ml-28 header z-10 flex" >
                            <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                            <p className="text-xl">beep beep boop bop</p>

                            <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                            <p className="text-xl">beep beep boop bop</p>
                        </div>
                        <div className="sticky top-32 ml-28 header z-10 flex" >
                            <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                            <p className="text-xl">beep beep boop bop</p>
                            <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                            <p className="text-xl">beep beep boop bop</p>
                        </div>
                        <div className="sticky top-32 ml-28 header z-10 flex" >
                            <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                            <p className="text-xl">beep beep boop bop</p>
                            <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                            <p className="text-xl">beep beep boop bop</p>
                        </div>
                        <div className="sticky top-32 ml-28 header z-10 flex" >
                            <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                            <p className="text-xl">beep beep boop bop</p>
                            <h1 className="text-[4rem] font-bold mb-2 tracking-tighter">Projects</h1>
                            <p className="text-xl">beep beep boop bop</p>
                        </div>
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
