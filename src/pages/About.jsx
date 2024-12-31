import WindowCard from "../components/WindowCard";

const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <WindowCard title="/usr/aditya/skill">
                <ul>
                    <li>react</li>
                    <li>mongo</li>
                    <li>express</li>
                    <li>sql</li>
                </ul>
            </WindowCard>
        </div>
    );
};

export default About;