import { NavLink } from "react-router-dom"

export default function AdminNavbar() {
    const navLinkStyle = ({ isActive }) => 
        isActive 
            ? { color: "purple", textDecoration: "underline" } 
            : { color: "black", textDecoration: "none" };
    return (
        <>
            <nav className="bg-stone-300 p-3 px-10 flex justify-start items-center">
                    <NavLink
                        className="text-2xl font-semibold mx-2"
                        to="/admin"
                        style={navLinkStyle}>
                        Dashboard
                    </NavLink>
                    <NavLink
                        className="text-2xl font-semibold mx-2"
                        to="/admin/adminbooks"
                        style={navLinkStyle}>
                        Books Table
                    </NavLink>
            </nav>
        </>
    )
}