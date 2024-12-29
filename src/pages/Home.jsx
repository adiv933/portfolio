import WindowCard from "../components/WindowCard";
import Widget from "../components/Widget";
import MacSVG from "../../public/MacSVG"

const Home = () => {
    return (
        <div className="min-h-screen  flex items-center justify-evenly">
            <Widget className="fixed left-8 top-20" />
            <WindowCard title="hello world!">
                <MacSVG />
                <p className="text-gray-700 tracking-tight">
                    <b>Hi, I'm Aditya</b><br /><br />
                    A full-stack developer and tech enthusiast. Let's collaborate and bring ideas to life!
                </p>
            </WindowCard>
        </div>
    );
};

export default Home;
