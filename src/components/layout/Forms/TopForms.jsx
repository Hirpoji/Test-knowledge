import uuid from "react-uuid";
import Button from "../../Button/Button.jsx";
import {useNavigate} from "react-router-dom";

const TopForms = () => {
    const navigate = useNavigate();
    const createForm = () =>{
        const id = uuid();
        navigate(`/forms/${id}`);
    }

    return (<div className="bg-black w-full  flex items-center justify-center">
        <div className="flex items-center justify-center w-full max-w-[1480px] p-12 text-white flex-col gap-5">
            <h3 className="flex gap-x-4">
                <a className="font-bold">
                    Главная
                </a>
                <span className="text-gray-500 font-bold">/</span>
                <span className="text-gray-500 font-bold">Тесты</span>
            </h3>

            <h2 className="font-bold mb-10">Создать новый тест</h2>
            <Button color="bg-white border-white text-black hover:text-white" onClick={createForm}>Новая форма</Button>
        </div>
    </div>)
}

export default TopForms;