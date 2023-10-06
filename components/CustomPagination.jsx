"use client";
import Link from "next/link";
import { useState } from "react";

function CustomPagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const handleClick = value => {
        setCurrentPage(prevPage => prevPage + value);
    };

    return (
        <div className="flex justify-center items-center gap-4">
            <button disabled={currentPage <= 1} onClick={() => handleClick(1)}>
                <Link
                    className="px-6 py-2 bg-slate-400 rounded-xl"
                    href={`/products/page/${currentPage}`}
                >
                    Prev
                </Link>
            </button>

            <button onClick={() => handleClick(-1)}>
                <Link
                    className="px-6 py-2 bg-slate-400 rounded-xl"
                    href={`/products/page/${currentPage}`}
                >
                    Next
                </Link>
            </button>
        </div>
    );
}

export default CustomPagination;
