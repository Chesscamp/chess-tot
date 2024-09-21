import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { global } from "styled-jsx/css";

const Login = () => {
  const baseUrl = "";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [errormessage, setErrormessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const userData = {
      email,
      password,
    };
    try {
      const registration = await axios.request({
        url: baseUrl + "",
        method: "POST",

        data: {
          email: userData.email,
          password: userData.password,
        },
      });
      const data = registration.data.data;
      console.log(data);

      if (data) {
        localStorage.setItem("token", data.token);
        window.location.href = "/userpage";
        setProcessing(false);
        alert("login successful");
        // Redirect to the logged-in page
      } else {
        setError("Invalid email or password");
        setProcessing(false);
      }
    } catch (err) {
      // console.log(err.response);
      // setProcessing(false);
      // alert("login failed");
      // let errmeg = JSON.stringify(err.response.data.message);

      // setErrormessage(errmeg);
    }
  };

  return (
    <div className="w-full m-auto ">
      <div className="flex  w-w-w m-auto move mt-2">
        <IoMdArrowRoundBack />
        <h1 className=" font-semibold ">Login</h1>
      </div>
      <p className="text-xs flex justify-center mt-10">
        Log in to challenge your friends, improve your game, <br />
        and explore endless chess possibilities. your next great <br />
        match awaits
      </p>

      <form
        className=" p-2 w-full  items-center flex  flex-col"
        onSubmit={handleLogin}
      >
        <div className="m-2 w-full">
          <input
            className=" outline-black w-full border border-black"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="m-2 w-full">
          <input
            className="outline-none w-full border border-black"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-5 flex p-2  w-full ">
          <button
            className="border p-1 border-black rounded w-full bg-cust-purple text-white "
            onClick={handleLogin}
            disabled={processing}
          >
            {processing ? "Processing..." : "Login"}
          </button>
        </div>
        <p>
          <Link href="">Forgot password</Link>
        </p>
        <div className="flex  w-full move justify-center">
          <div className="bg-black border w-2/5 h-1  " />
          <div>Or</div>
          <div className="bg-black border w-2/5 h-1  " />
        </div>
        <div className="mt-5 flex p-2  w-full ">
          <button className="border p-1 border-black rounded w-full ">
            <Link href='./signup'>
           Create an Account 
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
