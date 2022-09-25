import Dashboard from "../pages/home/Dashboard";
import SidebarHeader from "../components/FilterTable/FilterDataTable";
import Contact from "../pages/Contact";
import RegisterStudent from "../components/AddStudent/RegisterStudent";
import Register from "../pages/register/Register";
import Login from "../pages/login/SignIn";
import { getData } from "../hooks/useGetData";
import Profile from "../pages/profile/Profile";

export function configRoutes(user) {
    const { data, updateStudent } = getData();
    
    const routes = [
        { path: "/", element: Dashboard, props: data},
        { path: "/students", element: SidebarHeader, props: {data, updateStudent } },
        { path: "/contact", element: Contact },
        { path: "/register", element: RegisterStudent, props: updateStudent},
        { path: "/signUp", element: Register },
        { path: "/signIn", element: Login },
        { path: "/profile", element: Profile, props: user }
    ]
    return {
        data,
        routes
    }
}


