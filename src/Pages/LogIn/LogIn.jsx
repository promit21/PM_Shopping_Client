import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
const LogIn = () => {
  const { logInUser, googleLogIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = (email, password);
    console.log(user);

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate(location?.state ? location.state : "/");
  };

  const handleGoogleSignIn = () => {
    googleLogIn().then((result) => console.log(result.user));

    navigate(location?.state ? location.state : "/");
  };

  const handleFacebookSignIn = () => {
    facebookSignIn().then((result) => console.log(result.user));

    navigate(location?.state ? location.state : "/");
  };
  return (
    <div className="w-[80%] mx-auto my-10">
      <div
        className="hero hero-overlay bg-opacity-50 p-10 bg-base-200 rounded-xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/c3JmKS4/LoginBg.jpg)",
        }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <div className="">
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-[#0B0C10]">
                  Hello there
                </h1>
                <p className="mb-5 text-[#0B0C10]">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-50">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="divider divider-accent">or sign up with</div>
              <div className="flex gap-5 justify-center">
                <button
                  onClick={handleGoogleSignIn}
                  className="font-medium text-2xl text-red-400"
                >
                  <FaGoogle />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
