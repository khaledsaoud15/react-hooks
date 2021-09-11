import React, {useState} from 'react'
import { BlogArr } from './Counter'


const Cart = () => {
    const [salary,setSalary] = useState(100)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)

    const valueAdd = (e)=>{
        setValue1(e.target.value)
    }

    const valueMinus = (e)=>{
        setValue2(e.target.value)
    }

    // const value3 = (e)=>{
    //     setValue3(e.target.value)
    // }

    const add = ()=>{
        setSalary(salary + parseInt(value1));
        
    }
    const minus = ()=>{
        setSalary(salary - parseInt(value2));
    }



   return(
    <div className="cart">
        <h1>{salary}$</h1>
        <input type="number"
        placeholder={value1}
        onChange={valueAdd} />
        <button onClick={add}>Add</button>

        <input type="number"
        placeholder={value2}
        onChange={valueMinus} />
        <button onClick={minus }>Minus</button>
       
    </div>
      
   )
    
}

export default Cart
