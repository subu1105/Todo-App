import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser } from '@fortawesome/free-solid-svg-icons'

function Todolist(props) {
    return (<>

        <li className="list-item">
            {props.item}

            <span className="icons">
                <FontAwesomeIcon icon={faEraser} className="icon-delete icon-eraser" onClick={(e) => {
                    props.deleteItem(props.index)
                }} />


            </span>
        </li>
    </>)

}
export default Todolist