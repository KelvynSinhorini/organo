import './index.css'

const InputText = (props) => {
    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default InputText;