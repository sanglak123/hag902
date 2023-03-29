import { UserAuthApi } from "@/data/api";
import { LoginSuccess } from "@/redux/slice/users";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async () => {
    await UserAuthApi.Login(userName, pass, router, dispatch, LoginSuccess);
  };
  return (
    <div id="login" className="w-screen h-screen">
      <div className="bg-green-900 p-3">
        <h2 className="text-white">Login</h2>
      </div>
      <div className="login_items p-7">
        <div className="item">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Username
            </span>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your username"
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </label>
        </div>

        <div className="item mt-3">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Your password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </label>
        </div>

        <div className="item mt-3 text-left">
          <button
            onClick={() => handleLogin()}
            className="p-3 border rounded-sm w-40"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
