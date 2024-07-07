import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authSrvice from "../firebase/firebase.auth";
function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState("");
  const onSubmit = async (data) => {
    try {
      setLoader(true);
      const user = await authSrvice.signUp(data);

      if (!user) {
        throw new Error("something went wrong while creating user");
      }
      navigate("/");
    } catch (error) {
      setErr(error?.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="absolute justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 bg-black/80 text-white rounded w-3/12 min-w-80 py-6">
      <h3 className=" text-red-600 text-center text-sm absolute -bottom-10">
        {err.split(":")[1]}
      </h3>
      <h1 className=" text-blue-200 font-bold text-2xl">Register</h1>
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
        <Button className="rounded hover:bg-blue-600">Register</Button>

        <span className="flex gap-2">
          You have an account{" "}
          <Link to="/login">
            <p className=" underline text-blue-600">Login</p>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
