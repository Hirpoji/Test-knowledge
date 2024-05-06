import SelectedRadio from "../Icon/SelectedRadio.jsx";
import SelectedCheckbox from "../Icon/SelectedCheckbox.jsx";
import String from "../Icon/String.jsx";
import File from "../Icon/File.jsx";

const TypeQuestion = [
    {
        name: "Один из списка",
        Element: <SelectedRadio/>,
    },
    {
        name: "Несколько из списка",
        Element: <SelectedCheckbox/>,
    },
    {
        name: "Текст", Element: <String/>,
    },
    {
        name: "Файл", Element: <File/>,
    }
]

export default TypeQuestion;