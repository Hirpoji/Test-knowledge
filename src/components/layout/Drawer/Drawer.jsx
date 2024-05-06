import DarkHeader from "../Header/DarkHeader";
import {FiGithub} from "react-icons/fi";
import {TbBrandTelegram} from "react-icons/tb";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Drawer = ({isOpenDrawer, setIsOpenDrawer}) => {

    const toggleDrawer = () => {
        setIsOpenDrawer(false)
    }

    return isOpenDrawer ? (
        <div className="bg-black z-30 fixed top-0 left-0 w-screen h-screen overflow-hidden ">
            <DarkHeader setIsOpenDrawer={setIsOpenDrawer}/>
            <div className="max-w-[1480px] flex w-full h-full m-auto">
                <div className="flex w-1/2 h-full text-white px-10 mt-80 flex-col gap-y-10">
                    <a>
                        <h1>Профиль</h1>
                    </a>
                    <Link to={"/forms"} onClick={toggleDrawer}>
                        <h1>Тесты</h1>
                    </Link>
                    <a>
                        <h1>Документация</h1>
                    </a>
                </div>

                <div className="flex w-1/2 h-full px-10 pt-80 flex-col gap-y-10">
                    <h2 className="text-gray-500 text-3xl">Связаться с нами</h2>
                    <div className="text-white flex gap-x-8">
                        <FiGithub className="w-12 h-12 hover:text-blue-400 hover:cursor-pointer"/>
                        <TbBrandTelegram className="w-12 h-12 hover:text-purple-400 hover:cursor-pointer"/>
                    </div>

                    <h2 className="text-blue-400 text-3xl">
                        roadtothejun@gmail.com
                    </h2>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Drawer;
1;
