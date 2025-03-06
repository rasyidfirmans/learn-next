import Image from "next/image";
import Image404 from "../../public/image404.svg";
import Button from "@/components/elements/button/Button";
import Head from "next/head";
import { useRouter } from "next/router";

const Page404 = () => {
    const router = useRouter();
    const handleGoToHome = () => {
        router.push("/");
    }

    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Image src={Image404} alt="404" className="w-1/4"></Image>
                <h1 className="font-bold text-3xl mt-8">Page Not Found</h1>
                <p className="text-slate-500 mt-3">Sorry, the page you&lsquo;re looking for could not be found</p>
                <Button className="mt-5 bg-indigo-500 text-white py-3 px-5 rounded-full cursor-pointer" onClick={handleGoToHome}>Go to Home</Button>
            </div>
        </>
    );
};

export default Page404;