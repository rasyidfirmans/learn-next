import Link from "next/link";
import Button from "../elements/button/Button";
import { useRouter } from "next/router";
import InputForm from "../elements/form/TextForm";

const LoginForm = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/products");
  };

  return (
    <div className="w-1/4 mx-auto mt-10 border border-slate-600 p-10 rounded-md">
      <h1 className="font-bold text-3xl text-blue-600 mb-2">Login Page</h1>
      <p className="text-slate-600 mb-5">Welcome, please fulfill the form below</p>
      <InputForm
        htmlFor="email"
        label="Email"
        type="email"
        id="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        htmlFor="password"
        label="Password"
        type="password"
        id="password"
        placeholder="********"
      />
      <Button
        className="block text-white bg-blue-600 py-2 px-5 rounded-md font-bold cursor-pointer w-full mb-3"
        onClick={handleLogin}
      >
        Login
      </Button>
      <p className="text-center">
        Don&lsquo;t have any account? Register{" "}
        <Link href={"/auth/register"} className="text-blue-600 font-bold">here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
