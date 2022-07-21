import "./Button.css";

function Button(props) {
  return (
    <>
      <button
        className={props.className}
        onClick={props.onClick}
        type={props.type}
        value={props.value}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
