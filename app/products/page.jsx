import CustomPagination from "@/components/CustomPagination";

function page() {
    return (
        <div>
            <h2>products library</h2>
            <div className="w-full h-screen flex justify-center items-center">
                <div>
                    <CustomPagination />
                </div>
            </div>
        </div>
    );
}

export default page;
