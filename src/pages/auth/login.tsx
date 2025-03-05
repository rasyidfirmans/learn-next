import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push("/products");
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button className="bg-blue-600 rounded-md px-5 py-2 cursor-pointer" onClick={handleLogin}>Login</button>
            <p>Don&lsquo;t have any account? Register <Link href={"/auth/register"}>here</Link></p>
        </div>
    );
};

export default LoginPage;