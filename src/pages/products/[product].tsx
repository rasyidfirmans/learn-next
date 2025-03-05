import { useRouter } from "next/router";

const DetailProductPage = () => {
    const {query} = useRouter();

    return (
        <div>
            <h1>Detail Product Page</h1>
            <p>Product Name: {query.product}</p>
        </div>
    );
}

export default DetailProductPage;