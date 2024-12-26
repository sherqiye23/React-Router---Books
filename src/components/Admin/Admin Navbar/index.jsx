import { NavLink } from "react-router-dom"

export default function AdminNavbar() {
    return (
        <>
            <nav className="bg-stone-300 p-3 px-10 flex justify-start items-center">
                    <NavLink
                        className="text-2xl font-semibold mx-2"
                        to="/admin"
                        style={({ isActive }) => {
                            return isActive ? { color: "purple", textDecoration: "underline" } : {};
                        }}>
                        Dashboard
                    </NavLink>
                    <NavLink
                        className="text-2xl font-semibold mx-2"
                        to="/books"
                        style={({ isActive }) => {
                            return isActive ? { color: "purple", textDecoration: "underline" } : {};
                        }}>
                        Books Table
                    </NavLink>
            </nav>
        </>
    )
}