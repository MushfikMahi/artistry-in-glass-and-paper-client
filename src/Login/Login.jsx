import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { toast } from "react-toastify";
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
      toast("You have sucessfully loged in", {
        className: "mt-20",
      }),
      navigate(location?.state ? location.state : "/")
        
      )
      .catch((error) => toast.error(error.message));
  };
  const handelGoogleSignIn = () => {
    googleCreateUser()
      .then(() => {
        toast("You have sucessfully loged in", {
          className: "mt-20",
        }),
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };
  const handleGitHubSignIn = () => {
    gitHubCreateUser()
      .then(() => {
        toast("You have sucessfully loged in", {
          className: "mt-20",
        }),
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/shiny-textured-background_53876-95197.jpg?t=st=1714100017~exp=1714103617~hmac=daef6a87bfbddf95bd5ecde314bbc1f4e2c9d958ec8038c77427fda967e7623f&w=1380)",
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
                  <button className="btn bg-transparent border-[#ff6b6b] hover:border-transparent text-white hover:bg-[#ff6b6b]">
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
                  className="btn bg-transparent w-full border-[#ff6b6b] hover:border-transparent text-white hover:bg-[#ff6b6b]"
                  onClick={handelGoogleSignIn}
                >
                  <FaGoogle />
                  Log in with Google
                </button>
              </div>
              <div className="mt-5">
                <button
                  className="btn bg-transparent w-full border-[#ff6b6b] hover:border-transparent text-white hover:bg-[#ff6b6b]"
                  onClick={handleGitHubSignIn}
                >
                  <FaGithub />
                  Log in with GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
