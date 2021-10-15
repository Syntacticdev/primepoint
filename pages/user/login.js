import styles from "../../styles/Home.module.css";
const Login = () => {
  return (
    <div className="login py-5 box_container w-3/1">
      <div className="form_wrapper transparent  mt-[50px] ">
        <h1 className="text-4xl text-blue-400 mb-5 font-bold text-center italic">
          __PRIME__{" "}
        </h1>
        <h4 className="italic text-blue-400 my-1">Create Prime Account! </h4>
        <form action="/login" method="post">
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="p-2 w-full placeholder-gray-400 border-b-2 outline-none  border-b-blue-400  mb-4  "
              placeholder="Username"
            />
          </div>

          <div className="form-group mt-2">
            <input
              type="text"
              name="password"
              className="p-2 w-full placeholder-gray-400 border-b-2 outline-none  border-b-blue-400  "
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <button className="bg-blue-400 text-white w-full mt-4 py-2 ">
              CREATE ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
