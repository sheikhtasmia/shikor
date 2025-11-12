import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "News", path: "/news" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Shikor
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-green-700 md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ${
            open ? "top-14" : "-top-96"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name} className="text-center py-2 md:py-0">
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold"
                    : "hover:text-yellow-200"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
