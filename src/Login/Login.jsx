import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const { emailPassLogIn, googleCreateUser, gitHubCreateUser } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const hadleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    emailPassLogIn(email, password)
      .then( () => 
    //   navigate(location?.state ? location.state : "/"),
        toast("You have sucessfully loged in", {
          className: "mt-20",
        })
      )
      .catch((error) => toast.error(error.message));
  };
  const handelGoogleSignIn = () => {
    googleCreateUser()
      .then(() => {
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };
  const handleGitHubSignIn = () => {
    gitHubCreateUser()
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896718.jpg?t=st=1712988136~exp=1712991736~hmac=6bebbe7727d8544369d39984e2778a9d3ae1aa5134c6cc6612bac228d78b0b1b&w=996)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="hero">
          <Helmet>
            <title>Artistry - Login</title>
          </Helmet>
          <div className="space-y-5 flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mt-20">
                Login now!
              </h1>
            </div>
            <div className="w-full rounded-2xl p-5 max-w-md shadow-2xl glass">
              <form onSubmit={hadleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered text-white bg-transparent"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered text-white bg-transparent"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-transparent border-green-500 hover:border-transparent text-white hover:bg-green-400">
                    Login
                  </button>
                </div>
              </form>
              <p className="mt-5 text-white">
                Don&apos;t have an account ?{" "}
                <Link to={"/register"} className="text-sky-500 hover:link">
                  Rgister
                </Link>
              </p>
              <div className="mt-5">
                <button
                  className="btn bg-transparent w-full border-green-500 hover:border-transparent text-white hover:bg-green-400"
                  onClick={handelGoogleSignIn}
                >
                  <FaGoogle />
                  Log in with Google
                </button>
              </div>
              <div className="mt-5">
                <button
                  className="btn bg-transparent w-full border-green-500 hover:border-transparent text-white hover:bg-green-400"
                  onClick={handleGitHubSignIn}
                >
                  <FaGithub />
                  Log in with GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
