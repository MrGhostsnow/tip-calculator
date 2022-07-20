import './Form.css'

function Form(props) {
  return (
    <div className={props.className}>
    <form>
    <div>   
        <label for={props.for}>
            {props.label}
        </label>
        <img src={props.src} alt="" />
        <input 
            type={props.type}
            id={props.id}
            onChange={props.onChange}
            value={props.value} 
            placeholder={props.placeholder}/>
    </div>
    </form>
    </div>
  )
}

export default Form