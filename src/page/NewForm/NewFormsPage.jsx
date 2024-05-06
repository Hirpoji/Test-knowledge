import InformationForm from "../../components/NewForms/InformationForm.jsx";
import Question from "../../components/NewForms/Question.jsx";

const NewFormsPage = () => {
    return (<div className="max-w-[1480px] w-full m-auto grid grid-cols-1 pt-[100px] gap-4 px-10">
            <InformationForm/>
            <Question/>
        </div>

    )

}

export default NewFormsPage;