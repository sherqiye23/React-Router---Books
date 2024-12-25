import { Outlet } from "react-router"
import React from "react";
import UserFooter from "../../components/Client/User Footer";
import UserNavbar from "../../components/Client/User Navbar";

export default function UserLayout() {
    return (
        <>
            <UserNavbar/>
            <Outlet />
            <UserFooter/>
        </>
    )
}