import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Users from './layout/users/Users';
import SignUpPage from './layout/signuppage/SignUpPage';


const router =createBrowserRouter([
    {
        path:"/",
        element: <App></App>
        
    },
    {
        path:"/users",
        element: <Users></Users>,
        loader: () => fetch(`${import.meta.env.STARTER_URL}/users`)
    },
    {
        path:"/sign_up",
        element: <SignUpPage></SignUpPage>,
        // loader: ({params}) => fetch(`${import.meta.env.STARTER_URL}/${params.id}`)
    }

])

export default router;