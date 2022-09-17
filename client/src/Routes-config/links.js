import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiArchiveRegister } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";

export function linskNavbar() {
    
    const links_navbar = [
        { to: "/", className: "links", text: "Dashboard", icon: AiFillHome, classIcon: "icons-nav" },
        { to: "/students", className: "links", text: "All students", icon: HiUserGroup, classIcon: "icons-nav" },
        { to: "/register", className: "links", text: "Add student", icon: GiArchiveRegister, classIcon: "icons-nav" },
        { to: "/about", className: "links", text: "About", icon: BsInfoCircle, classIcon: "icons-nav" },
    ]
    return { links_navbar }
}