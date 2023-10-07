"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

function CustomPagination() {
    const router = useRouter();
    const params = useParams();

    // const [currentPage, setCurrentPage] = useState();
    const currentPage = Number(params.pageNumber) || 1;

    // const handleClick = value => {
    //     setCurrentPage(prevPage => prevPage + value);
    // };

    return (
        <div className="flex justify-center items-center gap-4">
            <button
                className="px-6 py-2 bg-slate-400 rounded-xl"
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
                    // if (currentPage === 1) {
                    //     router.push(`/products/page/${currentPage}`);
                    // } else {
                    //     router.push(`/products/page/${currentPage + 1}`);
                    // }
                    router.push(`/products/page/${currentPage + 1}`);
                }}
            >
                Next
            </button>
        </div>
    );
}

export default CustomPagination;
