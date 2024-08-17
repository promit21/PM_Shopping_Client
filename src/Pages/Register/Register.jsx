import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, setUser, currentUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = currentUser?.displayName;
    const photoUrl = currentUser?.photoURL;
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photoUrl);

    // Password validation
    if (!/^(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/^(?=.*[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Clear any previous error messages
    setError("");

    // Create User
    createUser(email, password, name, photoUrl)
      .then((result) => {
        setUser(result?.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/1zdrcjb/signin.jpg)",
      }}
    >
      <div className="card shrink-0 w-full max-w-sm shadow-2xl  my-10 animate__animated animate__zoomIn">
        <h1 className="text-center text-3xl font-bold mt-10">
          Please Sign Up Now!
        </h1>
        <form
          onSubmit={handleRegister}
          className="card-body"
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter Your Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover font-bold">
                Forgot password?
              </a>
            </label>
            {error && (
              <small className="text-center text-red-700">{error}</small>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-orange-500 border-none">Sign Up</button>
          </div>
        </form>
        <div className="mb-10">
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-blue-700 font-bold" to="/logIn">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
