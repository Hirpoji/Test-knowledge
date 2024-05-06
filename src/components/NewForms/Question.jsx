import {useState} from "react";
import {FaRegCircleDot} from "react-icons/fa6";
import {FaCircleDot} from "react-icons/fa6";
import Dropdown from "../Dropdown/Dropdown.jsx";
import TypeQuestion from "./TypeQuestion.jsx";

const Question = () => {

    const [value, setValue] = useState(TypeQuestion[0]);

    const [questions, setQuestions] = useState([
        {
            questionText: null,
            questionType: "radio",
            options: [
                {optionText: "Bengaluru"},
                {optionText: "Mumbai"},
                {optionText: "Delhi"},
                {optionText: "Chennai"}
            ],
            open: true,
            required: false
        },

    ]);

    const changeQuestionText = (event) => {
        const index = 0;

        setQuestions(prevQuestions => {
            const updatedQuestions = [...prevQuestions];

            updatedQuestions[index] = {
                ...updatedQuestions[index],
                questionText: event.target.value
            };
            return updatedQuestions;
        });
    };


    console.log(questions[0].questionText);

    return (
        <div className="w-full bg-black rounded-xl">
            <div className="p-6 flex flex-col justify-center gap-6">
                <div className="flex gap-4 justify-between">
                    <input placeholder={"Вопрос без заголовка"} className="w-1/2" value={questions[0].questionText}
                           onChange={changeQuestionText}/>
                    <Dropdown options={TypeQuestion} setValue={setValue} value={value}/>
                </div>
                <div className="flex justify-between flex-col gap-4">
                    <a className="text-white text-xl font-bold flex gap-2 items-center">
                        <FaRegCircleDot/>
                        Вопрос 1
                    </a>
                    <a className="text-white text-xl font-bold flex gap-2 items-center">
                        <FaCircleDot/>
                        Вопрос 2
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Question;