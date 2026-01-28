import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass =
    "text-sm font-medium text-neutral-600 hover:text-black transition";

  const activeClass =
    "text-sm font-medium text-black";

  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <h1 className="text-xl font-semibold tracking-wide">
        MARKET PREP
      </h1>

      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          Today
        </NavLink>

        <NavLink
          to="/journal"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          Journal
        </NavLink>

        <NavLink
          to="/archive"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          Archive
        </NavLink>
      </div>
    </nav>
  );
}
