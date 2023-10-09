import PageNumbers from "@/components/PageNumbers";
import Link from "next/link";

export default function Home() {
    const pageNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Link
                className="py-5 px-4 bg-slate-200 text-slate-950"
                href={"/products"}
            >
                Go to Products
            </Link>
            <div>
                <PageNumbers pageNumbers={pageNumbers} />
            </div>
        </div>
    );
}
