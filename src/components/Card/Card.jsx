import Button from '../Button/Button'
import Form from '../Form/Form'
import Result from '../Result/Result'
import './Card.css'


function Card() {
  return (
    <div className="container_Card">
        <div className="card_Home">
            <Form
            className='form_Bill'
            src='./assets/images/icon-dollar.svg'
            for='Bill'
            label='Bill'
            type='text'
            id='Bill'/>
            <p className='title_btn'>Select tip %</p>
            <div className='buttons'>
                <Button
                className='btn_Tip'>5%</Button>
                <Button
                className='btn_Tip'>10%</Button>
                <Button
                className='btn_Tip'>15%</Button>
                <Button
                className='btn_Tip'>25%</Button>
                <Button
                className='btn_Tip'>50%</Button>
                <Form
                className='form_Costum'
                placeholder='Costum'/>
            </div>
            
            <Form
            className='form_Bill'
            src='./assets/images/icon-person.svg'
            for='Number of People'
            label='Number of People'
            id='Number of People'/>
            <Result/> 
        </div>
    </div>
  )
}

export default Card