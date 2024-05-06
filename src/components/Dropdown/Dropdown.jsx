import {IoIosArrowDown} from "react-icons/io";
import {useState, useRef, useEffect} from "react";

// eslint-disable-next-line react/prop-types
const Dropdown = ({options, setValue, value}) => {

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const handlerOpen = () => {
        setIsOpen(true);
    }

    const handlerValue = (index) => {
        setValue(options[index]);
        setIsOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);

    return (
        <div className="text-white w-1/4 relative"  ref={ref}>
            <button
                className="flex items-center justify-between border-gray-600 border-2 rounded w-full h-full px-4 py-2"
                onClick={handlerOpen}>
                <div className="flex items-center gap-x-3 w-full h-full">
                    {/* eslint-disable-next-line react/prop-types */}
                    {value.Element} {value.name}
                </div>
                <IoIosArrowDown className={"transform-all duration-300 " + (isOpen ? "rotate-0" : "rotate-180 ")}
                />
            </button>

            {isOpen ?
                <div
                    className="absolute flex flex-col w-full left-0 top-12 border-gray-600 border-2 rounded bg-black ">
                    {
                        // eslint-disable-next-line react/prop-types,no-unused-vars
                        options.map((item, index) => (
                            // eslint-disable-next-line react/jsx-key
                            <button key={item.name}
                                    className={"flex items-center gap-x-3 h-full px-4 py-2 hover:bg-gray-600"}
                                    onClick={() => handlerValue(index)}>
                                {item.Element} {item.name}
                            </button>
                        ))
                    }
                </div>
                : <></>
            }


        </div>
    )
}

export default Dropdown;