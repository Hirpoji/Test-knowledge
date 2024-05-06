const Button = ({
                  // eslint-disable-next-line no-unused-vars,react/prop-types
                    onClick,
                  // eslint-disable-next-line react/prop-types
                    children,
                  // eslint-disable-next-line react/prop-types
                    color = "bg-black border-black text-white hover:text-black",
                }) => {
    return (
        <a
            className={`rounded flex  border-2  hover:bg-transparent transition-all duration-300 cursor-pointer ${color}`}
            onClick={onClick}
        >
            <div className="px-10 py-4 text-semibold w-full h-full font-semibold tracking-tighter">
                {children}
            </div>
        </a>
    );
};

export default Button;
