import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/authSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        navigate("/");
        dispatch(logout());
    }

    const handleCancel = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Are you sure waant to Logout?</h3>
            <button onClick={handleLogout}>Yes</button>
            <button onClick={handleCancel}>No</button>
        </div>
    );
}

export default Logout;
