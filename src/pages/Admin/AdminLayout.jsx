import { Outlet } from "react-router"
import React from "react";
import AdminNavbar from "../../components/Admin/Admin Navbar";
import AdminFooter from "../../components/Admin/Admin Footer";

export default function AdminLayout() {
    return (
        <>
            <AdminNavbar/>
            <Outlet />
            <AdminFooter/>
        </>
    )
}