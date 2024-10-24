import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Features/Budget'

export default function ReduxApi() {
    const [saveMoney, setSaveMoney] = useState("")
    const [cartMoney, setCartMoney] = useState("")
    const [cartName, setCartName] = useState("")

    const [cartlist, setCartList] = useState([])

    const dispatch = useDispatch()

    const count_money = useSelector((state) => state.moneyKey.count_money)

    const addMoney = () => {
        const amount = Number(saveMoney)
        if (amount) {
            dispatch(increment(amount))
            setSaveMoney("")
        }
    }

    const deleteMoney = () => {
        const amount = Number(cartMoney)
        if (amount && cartName) {
            dispatch(decrement(amount))
            setCartList([...cartlist, { cartMoney: amount, cartName }])
            setCartMoney("")
            setCartName("")
        }
    }
    return (
        <div>
           
            
            <div className="container">

                <div className="budget-section">
                    <div className="budget-input">
                        <h2>Budget</h2>
                        <input type="text" placeholder='Enter Total Amount' onChange={(e) => setSaveMoney(e.target.value)} />
                        <button onClick={addMoney}>Set Budget</button>

                    </div>
                </div>

                <div className="input">
                    <h2>Expenses</h2>
                    <input type="text" placeholder='Enter Amount' onChange={(e) => setCartMoney(e.target.value)} />
                    <input type="text" placeholder='Enter Name' onChange={(e) => setCartName(e.target.value)} />
                    <button onClick={deleteMoney}>Add</button>
                </div>


            </div>
            <center>
                <div class="summary-section">
                    <div class="summary-card">
                        <h3>Total Budget</h3>
                        <p>{count_money}</p>
                    </div>
                </div>

           

            <div className="expense-list">
                <h2>Expense List</h2>
                {
                 
                    cartlist ?
                        cartlist.map((e, i) => {
                            return <ul key={i}>
                                <li>
                                    <span>{e.cartName}</span><span>{e.cartMoney}</span>
                                    <span class="actions">
                                        <i class="edit"></i>
                                        <i class="delete">🛒</i>
                                    </span>
                                </li>
                            </ul>
                        })
                        :
                        ""
                    }
            </div>
            </center>

        </div>
    )
}