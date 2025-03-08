/* eslint-disable @typescript-eslint/no-unused-vars */
import fetcher from "@/utilities/swr/fetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

type productType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};

const ProductPage = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!isLogin) {
            router.push("/auth/login");
        }
    }, [isLogin, router]);

    // fetching data to API
    const { data, error, isLoading } = useSWR(`/api/products`, fetcher);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await fetch("/api/products").then(response => response.json()).then(response => setProducts(response.data));
    //     };
    //     fetchData();
    // }, []);

    return (
        <>
            <h1 className="font-bold text-4xl text-center my-8">Our Product</h1>
            <div>
                <ul className="mx-10 flex flex-wrap gap-15 justify-center">
                    {data ? 
                        data.data.map((product: productType) => (
                            <li key={product.id} className="w-1/5">
                                <div>
                                    <img src={product.image} alt={product.name} className="w-full"/>
                                    <h2 className="font-bold text-xl mt-5">{product.name}</h2>
                                    <p className="text-slate-600">{product.category}</p>
                                    <p className="mt-3 text-xl font-bold">{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                                </div>
                            </li>
                        )) : (
                            [...Array(4)].map((_, index) => (
                                <li key={index} className="w-1/5">
                                    <div className="animate-pulse">
                                        <div className="bg-gray-300 h-72 w-full rounded-md"></div>
                                        <h2 className="bg-gray-300 h-6 mt-5 w-3/4 rounded-md"></h2>
                                        <p className="bg-gray-300 h-4 mt-2 w-1/2 rounded-md"></p>
                                        <p className="bg-gray-300 h-6 mt-3 w-1/2 rounded-md"></p>
                                    </div>
                                </li>
                            ))
                        )
                    }
                </ul>
            </div>
            
        </>
    );
}

export default ProductPage;