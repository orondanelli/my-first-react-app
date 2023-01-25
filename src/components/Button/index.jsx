import './index.css'

const Button = ({ name, action }) => {

    return (
        <button className="button-action" onClick={action}> {name}</button>
    )
}

export default Button;