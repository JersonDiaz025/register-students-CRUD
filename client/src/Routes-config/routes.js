import Dashboard from "../pages/home/Dashboard";
import HeaderTableFilter from "../components/FilterTable/FilterDataTable";
import Contact from "../pages/Contact";
import RegisterStudent from "../components/AddStudent/RegisterStudent";
import Register from "../pages/register/Register";
import Login from "../pages/login/SignIn";
import { getData } from "../hooks/useGetData";
import Profile from "../pages/profile/Profile";

export function configRoutes(store) {
    const { data, updateStudent } = getData();
    
    const routes = [
        { path: "/", element: Dashboard, props: data},
        { path: "/students", element: HeaderTableFilter, props: { data, updateStudent, store } },
        { path: "/contact", element: Contact },
        { path: "/register", element: RegisterStudent, props: { updateStudent, store } },
        { path: "/signUp", element: Register },
        { path: "/signIn", element: Login },
        { path: "/profile", element: Profile, props: store }
    ]
    return {
        data,
        routes
    }
}


