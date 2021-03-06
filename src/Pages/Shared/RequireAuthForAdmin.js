import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from './Loading';
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { signOut } from "firebase/auth";

const RequireAuthForAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();

    if (loading || adminLoading) {
        return <Loading />
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

        if(admin){
            return children;
        }
}

export default RequireAuthForAdmin;