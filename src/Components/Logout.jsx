import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/authSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h3>Are you sure want to Logout?</h3>
        <div className="flex justify-evenly mt-10">
          <button
            className="w-1/4 bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 focus:outline-none"
            onClick={handleLogout}
          >
            Yes
          </button>
          <button
            className="w-1/4 bg-white border border-solid border-blue-500 text-blue-500 py-2 px-4 rounded-md font-semibold hover:bg-blue-500 hover:text-white focus:outline-none"
            onClick={handleCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;