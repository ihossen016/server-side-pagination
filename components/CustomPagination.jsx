"use client";

import { useParams } from "next/navigation";
import PageNumbers from "./PageNumbers";
import Link from "next/link";

function CustomPagination({ baseDir, subDir, subDirPageCountkey, totalPage }) {
    const params = useParams();

    const currentPage = Number(params[subDirPageCountkey]) || 1;
    const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center gap-4">
            {currentPage === 1 ? (
                <button
                    className={`px-6 py-2 bg-slate-400 rounded-xl cursor-not-allowed`}
                    disabled
                >
                    Prev
                </button>
            ) : (
                <Link
                    className={`px-6 py-2 bg-slate-400 rounded-xl ${
                        currentPage === 1 ? "cursor-not-allowed" : ""
                    }`}
                    href={
                        currentPage <= 2
                            ? `/${baseDir}`
                            : `/${baseDir}/${subDir}/${currentPage - 1}`
                    }
                >
                    Prev
                </Link>
            )}

            <PageNumbers
                pageNumbers={pageNumbers}
                currentPage={currentPage}
                baseDir={"products"}
                subDir={"page"}
            />

            {currentPage === totalPage ? (
                <button
                    className={`px-6 py-2 bg-slate-400 rounded-xl cursor-not-allowed`}
                    disabled
                >
                    Next
                </button>
            ) : (
                <Link
                    className={`px-6 py-2 bg-slate-400 rounded-xl`}
                    href={`/${baseDir}/${subDir}/${currentPage + 1}`}
                >
                    Next
                </Link>
            )}
        </div>
    );
}

export default CustomPagination;
