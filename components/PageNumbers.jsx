"use client";

import Link from "next/link";

const PageNumbers = ({
    pageNumbers,
    currentPage,
    baseDir,
    subDir,
    maxVisiblePages = 3,
    defaultLinkStyles = "flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-sm font-medium",
    defaultActiveStyles = "text-red-600 border-2 border-red-600",
    defaultTextStyles = "text-black",
}) => {
    const createPageButton = pageNumber => {
        return (
            <Link
                key={pageNumber}
                href={
                    pageNumber > 1
                        ? `/${baseDir}/${subDir}/${pageNumber}`
                        : `/${baseDir}`
                }
                className={
                    currentPage === pageNumber
                        ? `${defaultLinkStyles} ${defaultActiveStyles}`
                        : `${defaultLinkStyles} ${defaultTextStyles}`
                }
            >
                {pageNumber}
            </Link>
        );
    };

    const renderPagination = () => {
        const totalPages = pageNumbers.length;

        if (totalPages <= maxVisiblePages) {
            return pageNumbers.map(pageNumber => createPageButton(pageNumber));
        } else {
            let startPage = Math.max(
                1,
                currentPage - Math.floor(maxVisiblePages / 2)
            );
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            if (endPage - startPage < maxVisiblePages - 1) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }

            const buttons = [];

            if (startPage > 1) {
                buttons.push(createPageButton(1));
                if (startPage > 2) {
                    buttons.push(<span key="start-ellipsis">...</span>);
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                buttons.push(createPageButton(i));
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    buttons.push(<span key="end-ellipsis">...</span>);
                }
                buttons.push(createPageButton(totalPages));
            }

            return buttons;
        }
    };

    return (
        <div className="flex items-center justify-center gap-1 md:gap-4">
            {renderPagination()}
        </div>
    );
};

export default PageNumbers;
