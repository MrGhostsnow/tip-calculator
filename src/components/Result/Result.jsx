import Button from "../Button/Button";
import "./Result.css";

function Result(props) {
  return (
    <div className="container_Result">
      <div className="card_Result">
        <div className="amount">
          <p>
            Tip Amount
            <span> / person</span>
          </p>
          <p className="value_Amount">{props.amount}</p>
        </div>
        <div className="total">
          <p>
            Total
            <span> / person</span>
          </p>
          <p className="value_Total">{props.total}</p>
        </div>
        <Button className="btn_Reset" onClick={props.onClick}>
          RESET
        </Button>
      </div>
    </div>
  );
}

export default Result;
