import {useState} from 'react'
import Button from '../Button/Button'
import Form from '../Form/Form'
import Result from '../Result/Result'
import './Card.css'


function Card() {

  const [bill, setBill] = useState(0)
  const [tipValue, setTipValue] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(0)
 


  const handleChange = (e) => {
    console.log("bill",bill)
    setBill(e.target.value );
  }

  const handleClick = (e) => {
    console.log("tipvalue",tipValue)
    setTipValue(e.target.value)
  }

  const handleChangePeople = (e) => {
    console.log("people",numberOfPeople)
    setNumberOfPeople( e.target.value );
  }

  const handleChangeCostum = (e) => {
    console.log("tip costum",tipValue)
    setTipValue( e.target.value );
  }

  const handleReset = () => {
    window.location.reload(true)
  }

  const tip = tipValue
  // console.log(tip)
  const billvalue = bill
  // console.log(billvalue)
  const people = numberOfPeople
  
  const tipAmount = billvalue * (tip/100)
  console.log("tipAmount", tipAmount)

  
  let totalPerson = (bill / people) + (tipAmount / people)
  console.log("totalPerson",totalPerson)




  return (
    <div className="container_Card">
      <img src="./assets/images/logo.svg" alt="" />
        <div className="card_Home">
            <Form
            className='form_Bill'
            src='./assets/images/icon-dollar.svg'
            // for='Bill'
            label='Bill'
            type='text'
            id='Bill'
            onChange={handleChange}/>
            <p className='title_btn'>Select tip %</p>
            <div className='buttons'>
                <Button
                className='btn_Tip'
                type='button'
                value='5'
                onClick={handleClick
                }
                >5%
                </Button>
                <Button
                className='btn_Tip'
                type='button'
                value='10'
                onClick={handleClick
                }
                >10%
                </Button>
                <Button
                className='btn_Tip'
                type='button'
                value='15'
                onClick={handleClick
                }>15%</Button>
                <Button
                className='btn_Tip'
                type='button'
                value='25'
                onClick={handleClick
                }>25%</Button>
                <Button
                className='btn_Tip'
                type='button'
                value='50'
                onClick={handleClick
                }>50%</Button>
                <Form
                className='form_Costum'
                placeholder='Costum'
                onChange={handleChangeCostum}/>
            </div>
            
            <Form
            className='form_Bill'
            src='./assets/images/icon-person.svg'
            // for='Number of People'
            label='Number of People'
            id='Number of People'
            onChange={handleChangePeople}/>
            <Result
            amount={`$${tipAmount}`}
            total={`$${totalPerson}`}
            onClick={handleReset}/> 
        </div>
    </div>
  )
}

export default Card