interface ButtonProps {
    children: string;
    variant: 'solid' | 'outline' | 'success' | 'danger';
    click?: any;
    styles?: any;
}

export const Button = ({ children, variant, click, styles }: ButtonProps) => {
    const getStyles = (variant: string) => {
        switch (variant) {
            case 'solid':
                return `bg-black border border-black transition-colors text-white p-2 rounded-md hover:bg-white hover:text-black active:bg-gray-400`;
            case 'outline':
                return `bg-white border border-gray-200 p-2 rounded-md hover:border-gray-500 transition-colors active:bg-gray-400`;
            case 'success':
                return `bg-blue-600 text-white border border-blue-500 p-2 rounded-md hover:bg-blue-500 transition-colors active:bg-blue-200`;
            case 'danger':
                return `bg-red-500 text-white border border-red-500 p-2 rounded-md hover:bg-white hover:text-red-500 transition-colors active:bg-red-200`;
            default:
                return `bg-black border border-black transition-colors text-white p-2 rounded-md hover:bg-white hover:text-black active:bg-gray-200`;
        }
    };

    return (
        <button className={`${getStyles(variant)} ${styles && styles}`} onClick={() => click("first")}>
            {children}
        </button>
    );
};
