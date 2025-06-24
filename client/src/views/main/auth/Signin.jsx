import React, { useState, useEffect } from "react";
import { signin } from "features/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "components/main/buttons/Button";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { status, message, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(credentials));
  };

  return (
    <section className="w-full bg-primary min-h-screen">
      <div className="container mx-auto pt-32">
        <div className="bg-white rounded-lg w-[400px] py-12 px-8 mx-auto shadow-xl">
          <h1 className="text-2xl font-bold text-center text-gray-600 mb-8">
            Sign In
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4 gap-2">
              <label className="text-gray-900 font-normal" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border border-gray-300 p-2 text-lg rounded-md outline-none oultine-primaryfocus:ring-primary focus:border-primary"
                value={credentials.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-4 gap-2">
              <label className="text-gray-900 font-normal" htmlFor="username">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 p-2 text-lg rounded-md outline-none oultine-primaryfocus:ring-primary focus:border-primary"
                value={credentials.password}
                onChange={handleInputChange}
              />
            </div>
            <Button variant="primary" size="lg" className="w-full mt-8">
              signin
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;
