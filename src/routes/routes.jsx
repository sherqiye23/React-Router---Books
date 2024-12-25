// user pages
import UserLayout from "../pages/Client/UserLayout";
import Home from "../pages/Client/Home";
import Basket from "../pages/Client/Basket";
import Favorites from "../pages/Client/Favorites";
import Books from "../pages/Client/Books";
import BookDetail from "../pages/Client/BookDetail";

// admin pages
import AdminLayout from "../pages/Admin/AdminLayout";
import Dashboard from "../pages/Admin/DashBoard";
import AddBook from "../pages/Admin/AddBook";
import AdminBookDetail from "../pages/Admin/AdminBookDetail";
import EditBook from "../pages/Admin/EditBook";
import AdminBooks from "../pages/Admin/AdminBooks";

// not found
import NotFound from "../pages/Not Found";

const RouTeS = [
    // user
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "",
                element : <Home />
            },
            {
                path: "basket",
                element: <Basket/>
            },
            {
                path: "favorites",
                element: <Favorites/>
            },
            {
                path: "books",
                element: <Books/>
            },
            {
                path: "books/:id",
                element: <BookDetail/>
            },
            {
                path:"*",
                element: <NotFound/>
            }
        ]
    },
    // admin
    {
        path: "/admin",
        element: <AdminLayout/>,
        children : [
            {
                path: "",
                element: <Dashboard/>
            },
            {
                path: "books",
                element: <AdminBooks/>
            },
            {
                path: "add-book",
                element: <AddBook/>
            },
            {
                path: "books/detail/:id",
                element: <AdminBookDetail/>
            },
            {
                path: "books/edit/:id",
                element: <EditBook/>
            }
        ]
    }
]

export default RouTeS