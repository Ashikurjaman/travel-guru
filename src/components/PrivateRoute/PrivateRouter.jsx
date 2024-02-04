import { useContext } from "react";
import { AuthContext } from "../Context/AuthContexProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user,loader} = useContext(AuthContext)
    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRouter;