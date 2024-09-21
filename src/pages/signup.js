// pages/signup.js
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const Signup = () => {
  const baseUrl = "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const [errormessage, setErrormessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Prepare the data to be sent to the backend
    const userData = {
      email,
      password,
    };

    try {
      const registraion = await axios.request({
        url: baseUrl + "",
        method: "POST",
        data: userData,
      });
      setProcessing(false);
      console.log(registraion.data);
      alert("registraion successful -- now login in ");
    } catch (err) {
      console.log(err.response);
      setProcessing(false);
      alert("registraion failed");
      let errormessage = JSON.stringify(err.response.data.message);
      setErrormessage(errormessage);
    }
  };

  return (
    <div className="w-full m-auto ">
      <div className="flex  w-w-w m-auto move mt-2">
        <IoMdArrowRoundBack />
        <h1 className=" font-semibold ">Create an Account</h1>
      </div>
      <p className="text-xs flex justify-center mt-10">
      Create your account . it takes less than a minute.<br/>
      input your email and password

      </p>

      <form
        className=" p-2 w-full  items-center flex  flex-col"
        onSubmit={handleSubmit}
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
            onClick={handleSubmit}
            disabled={processing}
            type="submit"
          >
            {processing ? "Registering..." : "Create an Account"}
          </button>
        </div>


        <div className="flex  w-full move justify-center">
          <div className="bg-black border w-2/5 h-1  " />
          <div>Or</div>
          <div className="bg-black border w-2/5 h-1  " />
        </div>
        <div className="mt-5 flex p-2  w-full ">
          <button className="border p-1 border-black rounded w-full ">
           Sign up with Google
          </button>
        </div>
      </form>
    </div>
  );
};

//   <button
//     className="border px-2 border-black rounded  "
//     type="submit"
//     disabled={processing}
//   >
//     {processing ? "Registering..." : "Register"}
//   </button>
export default Signup;

Signup.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
