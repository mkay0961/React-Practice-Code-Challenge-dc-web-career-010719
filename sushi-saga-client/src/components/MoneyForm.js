import React from 'react'

const MoneyForm = (props) => {
    return <form onSubmit={(event)=>props.addMoney(event)} className= "form">
        Deposit Money<input type="number"/>
        <input type="submit"/>
    </form>
}

export default MoneyForm
