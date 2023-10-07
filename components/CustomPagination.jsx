"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

function CustomPagination() {
    const router = useRouter();
    const params = useParams();

    const currentPage = Number(params.pageNumber) || 1;

    return (
        <div className="flex justify-center items-center gap-4">
            <button
                className={`px-6 py-2 bg-slate-400 rounded-xl ${
                    currentPage === 1 ? "cursor-not-allowed" : ""
                }`}
                disabled={currentPage === 1}
                onClick={() => {
                    if (currentPage === 2) {
                        router.push(`/products`);
                    } else {
                        router.push(`/products/page/${currentPage - 1}`);
                    }
                }}
            >
                Prev
            </button>
            <button
                className="px-6 py-2 bg-slate-400 rounded-xl"
                onClick={() => {
                    router.push(`/products/page/${currentPage + 1}`);
                }}
            >
                Next
            </button>

            {/* <Link
                className="px-6 py-2 bg-slate-400 rounded-xl"
                href={
                    currentPage === 2
                        ? `/products`
                        : `/products/page/${currentPage - 1}`
                }
            >
                Prev
            </Link>
            <Link
                className="px-6 py-2 bg-slate-400 rounded-xl"
                href={`/products/page/${currentPage + 1}`}
            >
                Next
            </Link> */}
        </div>
    );
}

export default CustomPagination;
