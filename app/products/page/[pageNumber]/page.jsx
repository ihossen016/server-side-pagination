import CustomPagination from "@/components/CustomPagination";
import React from "react";

function PageNumber() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <CustomPagination
                baseDir={"products"}
                subDir={"page"}
                subDirPageCountkey={"pageNumber"}
            />
        </div>
    );
}

export default PageNumber;
