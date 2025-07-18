import {useState} from 'react'

function MyComponent(){
    const [name,setName] = useState("Guest")
    const [quantity,setQuantity] = useState(0)
    const [comment,setComment] = useState()
    const [payment,setPayment] = useState()
    const [shipping,setShipping] = useState()

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    const handleChangePayment = (event) => {
        setPayment(event.target.value)
    }

    function handleChangeShipping(event){
        setShipping(event.target.value)
    }

    return(
        <>
            <input value={name} onChange={handleNameChange}/>

            <p>Name:{name}</p>


            <input value={quantity} onChange={handleQuantityChange} type='number'/>

            <p>Quantity:{quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter the comment here!...'></textarea>

            <p>Comments:{comment}</p>

            <select value={payment} onChange={handleChangePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">GiftCard</option>
            </select>

            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
                                checked={shipping==="Pick Up"}
                                onChange={handleChangeShipping}/>
            Pick Up                
            </label>
            
            <br/>

            <label>
                <input type="radio" value="Delivery" 
                                checked={shipping==="Delivery"}
                                onChange={handleChangeShipping}/>

                Delivery
            </label>

            <p>
                Shipping: {shipping} 
            </p>
        </>
    )
}

export default MyComponent