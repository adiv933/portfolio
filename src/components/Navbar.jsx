import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) =>
        `${new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            weekday: 'short',
        }).format(date)} | ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;


    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[96%] bg-white shadow-lg border-black border-[3px] rounded-lg flex justify-between items-center px-4 py-2">
            <div className="font-bold text-3xl text-black leading-6 tracking-tighter hover:tracking-wide duration-200 cursor-pointer" onClick={() => navigate('/')}>AV</div>

            <div className="text-black text-md">
                /user/aditya
                {location.pathname === "/" ? "/home" : location.pathname}
            </div>

            <div className="text-black text-md">
                {formatDate(dateTime)}
            </div>
        </div>
    );
};

export default Navbar;
