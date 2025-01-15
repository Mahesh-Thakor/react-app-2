const Loader: React.FC = () => {
    return (
        <>
            <div className="w-full h-full fixed top-[6.5rem] left-0 bg-white dark:bg-gray-900 z-50">
                <div className="flex justify-center items-center mt-[50vh]">
                    <div className="opacity-90 fas fa-circle-notch fa-spin fa-5x text-violet-600"></div>
                </div>
            </div>
        </>
    );
}

export default Loader;