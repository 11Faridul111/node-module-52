import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
      const {user,loading} = useContext(AuthContext);
      const location = useLocation();
      console.log(location.pathname)
      if(loading){
           return <p><span className="loading loading-spinner text-primary"></span></p>
      }

      if(user){
            return children;
      }
      return <Navigate state={location.pathname } to='/login'></Navigate>

};

export default PrivateRouter;