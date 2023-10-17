"use client";

import { useParams } from "next/navigation";
import PageNumbers from "./PageNumbers";
import Link from "next/link";
import "./styles.css";

function CustomPagination({ baseDir, subDir, subDirPageCountkey, totalPage }) {
    const params = useParams();

    const currentPage = Number(params[subDirPageCountkey]) || 1;
    const pageNumbers = Array.from(
        { length: Number(totalPage) },
        (_, i) => i + 1
    );

    return (
        <div className="rnp-container">
            {currentPage === 1 ? (
                <button className={"rnp-prev-next disable-btn"} disabled>
                    Prev
                </button>
            ) : (
                <Link
                    className={"rnp-prev-next"}
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

            {currentPage === Number(totalPage) ? (
                <button className={"rnp-prev-next disable-btn"} disabled>
                    Next
                </button>
            ) : (
                <Link
                    className={"rnp-prev-next"}
                    href={`/${baseDir}/${subDir}/${currentPage + 1}`}
                >
                    Next
                </Link>
            )}
        </div>
    );
}

export default CustomPagination;
