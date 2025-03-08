/* eslint-disable @typescript-eslint/no-unused-vars */
import fetcher from "@/utilities/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

type productType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};

const DetailProductPage = (data: productType) => {
    const {query} = useRouter();
    
    // client-side fetching data to API
    // const {data, error, isLoading} = useSWR(`/api/products/${query.product}`, fetcher);

    return (
        <>
            <h1 className="font-bold text-4xl text-center my-8">Detail Product</h1>
            <div className="flex justify-center w-full">
                <div className="w-1/4">
                    <img src={data.image} alt={data.name} className="w-full"/>
                    <h2 className="font-bold text-xl mt-5">{data.name}</h2>
                    <p className="text-slate-600">{data.category}</p>
                    <p className="mt-3 text-xl font-bold">{data.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                </div>
            </div>
        </>
    );
}

// server-side fetching data to API
export const getServerSideProps = async ({params}: {params: {product: string}}) => {
    const res = await fetch(`http://localhost:3000/api/products/${params.product}`);
    const response = await res.json();

    return {
        props: response.data
    };
};


export default DetailProductPage;