import CustomPagination from "@/components/CustomPagination";

function PageNumber() {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-8">
            <CustomPagination
                baseDir={"products"}
                subDir={"page"}
                subDirPageCountkey={"pageNumber"}
                totalPage={20}
            />
        </div>
    );
}

export default PageNumber;
