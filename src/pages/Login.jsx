import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Loader } from "../components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../app write services/auth.service";
import { useDispatch } from "react-redux";
import { login, logout } from "../Store/features/authSlice";
import database from "../app write services/database.service";
import { addNote } from "../Store/features/notesSlice";

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState("");
  const onSubmit = async (data) => {
    try {
      setLoader(true);
      
      dispatch(addNote(documents));
      navigate("/");
    } catch (error) {
    } finally {
      setLoader(false);
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <div className="justify-center items-center flex flex-col gap-5 bg-white text-black rounded w-3/12 min-w-80 py-6">
      <h3 className=" text-red-600 text-center text-sm absolute -bottom-10">
        {err.split(":")[1]}
      </h3>
      <h1 className=" text-blue-200 font-bold text-2xl">Login</h1>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-10/12"
      >
        <Input
          label="Email"
          placeholder="Enter email.."
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Password.."
          {...register("password", { required: true })}
        />
        <Button className="rounded hover:bg-blue-600">Login</Button>

        <span className="flex gap-2">
          You don't have an account{" "}
          <Link to="/register">
            <p className=" underline text-blue-600">register</p>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
