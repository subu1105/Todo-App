import { useState } from "react";


const ToDoInput = (props) => {

    const [inputText, setInputText] = useState("")
    function inputchange(e) {
        setInputText(e.target.value)
    }
    return (<>
        <div className="input-container">
            <input type="text" className="input-box-todo" placeholder="Enter Your todo ?" onChange={inputchange}
                value={inputText} />
            <button className="add-btn"
                onClick={() => {
                    props.addList(inputText)
                    setInputText("")

                }}
            >+</button>



        </div>
    </>)
}
export default ToDoInput;