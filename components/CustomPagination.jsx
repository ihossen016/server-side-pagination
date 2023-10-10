"use client";

import { useParams } from "next/navigation";
import PageNumbers from "./PageNumbers";
import Link from "next/link";

function CustomPagination({ baseDir, subDir, subDirPageCountkey, totalPage }) {
    const params = useParams();

    const currentPage = Number(params[subDirPageCountkey]) || 1;
    const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);
    const defaultPrevNextStyles =
        "px-3 md:px-6 py-2 bg-slate-400 rounded-xl text-sm md:text-base";

    return (
        <div className="flex justify-center items-center gap-1 md:gap-8">
            {currentPage === 1 ? (
                <button
                    className={`${defaultPrevNextStyles} cursor-not-allowed`}
                    disabled
                >
                    Prev
                </button>
            ) : (
                <Link
                    className={`${defaultPrevNextStyles} ${
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
                baseDir={baseDir}
                subDir={subDir}
            />

            {currentPage === totalPage ? (
                <button
                    className={`${defaultPrevNextStyles} cursor-not-allowed`}
                    disabled
                >
                    Next
                </button>
            ) : (
                <Link
                    className={`${defaultPrevNextStyles}`}
                    href={`/${baseDir}/${subDir}/${currentPage + 1}`}
                >
                    Next
                </Link>
            )}
        </div>
    );
}

export default CustomPagination;
