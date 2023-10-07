"use client";

import { useRouter, useParams } from "next/navigation";

function CustomPagination({ baseDir, subDir, subDirPageCountkey }) {
    const router = useRouter();
    const params = useParams();

    const currentPage = Number(params[subDirPageCountkey]) || 1;

    return (
        <div className="flex justify-center items-center gap-4">
            <button
                className={`px-6 py-2 bg-slate-400 rounded-xl ${
                    currentPage === 1 ? "cursor-not-allowed" : ""
                }`}
                disabled={currentPage === 1}
                onClick={() => {
                    if (currentPage === 2) {
                        router.push(`/${baseDir}`);
                    } else {
                        router.push(`/${baseDir}/${subDir}/${currentPage - 1}`);
                    }
                }}
            >
                Prev
            </button>
            <button
                className="px-6 py-2 bg-slate-400 rounded-xl"
                onClick={() => {
                    router.push(`/${baseDir}/${subDir}/${currentPage + 1}`);
                }}
            >
                Next
            </button>
        </div>
    );
}

export default CustomPagination;
