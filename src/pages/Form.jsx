import { Link } from "react-router-dom";
import { Button, Input } from "../components";
import React from "react";
import { useForm } from "react-hook-form";

function Form({ type = "login" }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="absolute justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 bg-white rounded w-3/12 min-w-80 p-6">
      <h1 className=" text-blue-800 font-bold text-2xl">
        DevChat {type.toUpperCase()}
      </h1>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-10/12"
      >
        <Input
          label="Name"
          name="name"
          placeholder="Enter Name.."
          {...register("name", { required: true })}
        />

        {type === "register" && (
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
        )}
        <Input label="Password" type = "password" placeholder="Enter Password.." {...register("password", {required : true})} />
        {type === "register" && (
          <Input label="Avatar" placeholder="Upload Avatar.." type="file" {...register("avatar", {required : true})} />
        )}
        <Button className="rounded hover:bg-blue-600">
          {type === "login" ? "Login" : "Register"}
        </Button>

        <span className="flex gap-2">
          You {type === "login" && <p> don't</p>} have an account{" "}
          <Link to={`${type === "register" ? "/login" : "/register"}`}>
            <p className=" underline text-blue-600">
              {type === "register" ? "login" : "register"}
            </p>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Form;
