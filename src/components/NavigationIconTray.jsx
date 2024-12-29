import { NavLink } from "react-router-dom";

export default function NavigationIconTray({ setWallpaper }) {
    const iconClass = "cursor-pointer transition-opacity duration-200";

    const navLinks = [
        {
            name: "home",
            route: "/",
            icon: "/home.png",
        },
        {
            name: "projects",
            route: "/projects",
            icon: "/projects.png",
        },
        {
            name: "about",
            route: "/about",
            icon: "/about.png",
        },
        {
            name: "contact",
            route: "/contact",
            icon: "/contact.png",
        },
    ];

    return (
        <div className="fixed right-6 top-24 h-[80%] w-20 flex flex-col justify-between items-center text-black">
            {/* Top Icons */}
            <div className="space-y-4 flex flex-col">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.route}
                        className={({ isActive }) =>
                            `${iconClass} ${isActive ? "opacity-30" : "opacity-100"}`
                        }
                    >
                        <div className="flex flex-col items-center space-y-1 hover:scale-110 transition duration-200">
                            <img className="w-12 h-12" src={link.icon} alt={link.name} />
                            <span className="text-sm font-semibold">{link.name}</span>
                        </div>
                    </NavLink>
                ))}
            </div>

            {/* Bottom Icon */}
            <div>
                <button
                    className={iconClass}
                    onClick={setWallpaper} 
                >
                    <div className="flex flex-col items-center space-y-1 hover:scale-110 transition duration-200">
                        <img className="w-12 h-12" src="/change.png" alt="Change wallpaper" />
                        <span className="text-sm font-semibold">change wallpaper</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
