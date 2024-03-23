import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, emptyCart,addToCart, decreaseqty } from '../redux/features/cartSlice';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import toast from 'react-hot-toast';
       
const Cart = () => {

    const [totalAmt, setTotalAmt] = useState(0);
    const [totalqty, setTotalQty] = useState(0)
    const { carts } = useSelector((state) => state.allcart);
    const dispatch = useDispatch();
    
    const handleIncrement = (e) =>{
        dispatch(addToCart(e))
        toast.success("Item added to cart")
    }

    const handleDecrement = (e) =>{
        dispatch(decreaseqty(e))
    }
    const handleremovefromcart = (e) =>{
        dispatch(removeFromCart(e))
        toast.error("Item removed from cart")

    }

    const clearcart = () =>{
        dispatch(emptyCart())
        toast.success("Your Cart is Empty")

    }

    const total = () =>{
        let totalprice = 0;
        carts.map((ele,ind) =>{
            totalprice = ele.basePrice * ele.qnty + totalprice
        });
        setTotalAmt(totalprice)
    }
    const totalqnty = () =>{
        let totalqnty = 0;
        carts.map((ele,ind) =>{
            totalqnty += ele.qnty 
        });
        setTotalQty(totalqnty)
    }
    
    useEffect(()=>{
        total()
    },[total])     

    useEffect(()=>{
        totalqnty()
    },[totalqnty])
    return (
        <>     
            <div className="carts mt-5 mb-5">   
                <div className="container">
            
                {
                                carts.length !== 0 ? <button onClick={clearcart} className='btn btn-danger mb-5'><MdDeleteForever style={{fontSize:"24px"}}/> Empty Cart</button> : ""
                }   
                
                
                    <div className="row gx-5">
                        <div className="col-8">
                            <div className="row gy-4">

                            
                                {
                                    carts.length === 0 ? 
                                    (
                                        <div className="empty">
                                                <div className="row justify-content-center">
                                                    <div className="col-8 text-secondary text-center">
                                                        <h1>🛒</h1>
                                                        <h4>Your Cart is Empty</h4>
                                                        <Link to={"/"} className='btn btn-success mt-3'>Continue Shopping</Link>
                                                    </div>
                                                </div>
                                            </div>
                                    ) : (
                                        
                                    (carts.map((ele, index) => {
                                        return(
                                        <div className="col-lg-4" key={index}>
                                            <div className="card">
                                                <img src={ele.thumbnailImage} className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title text-truncate">{ele.name}</h5>
                                                        <p className="card-text text-truncate mt-1 mb-1">{ele.description}</p>
                                                        <h5 className='m-0'>$ {ele.basePrice}</h5>
                                                        <div className="d-flex justify-content-between mt-2">
                                                            <button onClick={ele.qnty <=1 ?()=> handleremovefromcart(ele.id):()=> handleDecrement(ele)} className='btn btn-primary'>-</button>
                                                            <input type="text" value={ele.qnty} className='text-center w-50' />
                                                            <button onClick={()=> handleIncrement(ele)} className='btn btn-primary'>+</button>
                                                        </div>
                                                        <button onClick={() => handleremovefromcart(ele.id)} className='btn btn-danger w-100 mt-3'>Remove From Cart</button>
                                                        
                                                    </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                
                                    ))
                                    
                                }

                                
                            </div>
                        </div>
                        <div className="col-4 bg-dark text-white h-100">
                            <div className="total mt-3">
                                <h4>Cart Calculation({carts.length})</h4>
                                <h5 className='mt-4 '>Total Items : {totalqty} </h5>
                                <h2>Grand Total : $ {totalAmt}</h2>
                                <button className='btn btn-success w-100 mt-5 mb-5'>Check Out</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;