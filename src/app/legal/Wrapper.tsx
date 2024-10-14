const Wrapper = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="py-28 lg:px-10 md:px-10 px-2 bg-background">
            <div className="flex flex-wrap justify-center gap-5">
                <div className="relative lg:w-7/12 md:w-10/12 w-full lg:p-16 p-5 bg-card rounded shadow-xl shadow-slate-700/20 ring-1 ring-gray-900/5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Wrapper;
