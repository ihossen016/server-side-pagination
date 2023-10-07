import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Link
                className="py-5 px-4 bg-slate-200 text-slate-950"
                href={"/products"}
            >
                Go to Products
            </Link>
        </div>
    );
}
