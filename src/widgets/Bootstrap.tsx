interface ChildProps {
    children: any;
    className?: string;
};

export const HeadOne = ({ children, className }: ChildProps) => (
    <h1 className={`w-full text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 mb-4 md:text-5xl lg:text-7xl dark:text-white ${className}`}>
        {children}
    </h1>
);

export const ParaOne = ({ children, className }: ChildProps) => (
    <h1 className={`text-gray-500 font-normal lg:text-xl text-lg dark:text-gray-400 ${className}`}>
        {children}
    </h1>
);