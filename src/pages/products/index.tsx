import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (!isLogin) {
            router.push("/auth/login");
        }
    }, [isLogin, router]);

    return <h1>Product Page</h1>;
}

export default ProductPage;