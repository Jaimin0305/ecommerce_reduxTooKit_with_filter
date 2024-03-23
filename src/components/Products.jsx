import React, { useEffect } from 'react';   
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../redux/features/productsDataSlice';
import { addToCart, removeFromCart } from '../redux/features/cartSlice';
import toast from 'react-hot-toast';
import { filterbyall, filterbycategory } from '../redux/features/filterSlice';


const Products = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.app )
    const filterdata = useSelector((state) => state.filter )
    console.log(filterdata);
    const { carts } = useSelector((state) => state.allcart);

    useEffect(() => {
        dispatch(getAllData())
    },[])

    useEffect(()=>{
        filterall(data.products) 
    })
        const filterall =(e)=>{
        dispatch(filterbyall(e))

    }
    

    const filterbyphone = ()=>{
        dispatch(filterbycategory('Smartphone'))   
    }
    const filterbytab = ()=>{
        dispatch(filterbycategory('Tablet'))  
    }
    const filterbylap = ()=>{
        dispatch(filterbycategory('Laptop'))  
    }

    const filterbyaall = ()=>{
        dispatch(filterbycategory(''))   

    }

    const handleaddtocart = (e) =>{
        dispatch(addToCart(e))
        toast.success("Item added to cart")
        
    }


    const handleremovefromcart = (e) =>{ 
        dispatch(removeFromCart(e))
        toast.error("Item removed from cart")
        
    }
    return (
        <>

            <div className="products mt-5 mb-5">
                <div className="container">
                <div className="filterbycategories mb-5">
                <div className="row align-items-center"> 
                    <div className="col-lg-3 col-md-6 mb-md-3 mb-sm-3  text-center mb-3 text-md-center text-sm-center "><button onClick={filterbyaall} className='btn btn-dark w-50 '>All</button></div>
                    <div className="col-lg-3 col-md-6 mb-md-3 mb-sm-3  text-center mb-3 text-md-center text-sm-center text-lg-center"><button onClick={filterbyphone} className='btn btn-dark w-50 '>Smartphone</button></div>
                    <div onClick={filterbytab} className="col-lg-3 col-md-6 mb-md-3 mb-sm-3  text-center mb-3 text-md-center text-sm-center text-lg-center"><button className='btn btn-dark w-50'>Tablet</button></div>
                    <div onClick={filterbylap}className="col-lg-3 col-md-6 text-md-center text-sm-center text-center"><button className='btn btn-dark w-50'>Laptop</button></div>
                </div>
                </div>
                    <div className="row gy-4">
                        {
                            filterdata.filterdatas  .length <=0 ?
                            (
                            data.products.map((ele, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6" key={index}>        
                                        <div className="card">
                                            <img src={ele.featuredImage} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                
                                                    <h5 className="card-title m-0 text-truncate">{ele.name}</h5>
                                                    <p className="card-text text-truncate mt-1 mb-1">{ele.description}</p>
                                                    <h5 className='m-0'>$ {ele.basePrice}</h5>

                                                    {
                                                        carts.some(p=> p.id === ele.id)?
                                                        (<button onClick={() => handleremovefromcart(ele.id)} className='btn btn-danger w-100 mt-3'>Remove From Cart</button>) 
                                                         :
                                                        (<button onClick={() => handleaddtocart(ele)} className='btn btn-warning w-100 mt-3'>Add To Cart</button>)
                                                    }
                                                    
                                                    
                                                </div>  
                                        </div>
                                    </div>
                                )
                            })
                            )
                        :
                        (
                            filterdata.filterdatas.map((ele, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6" key={index}>        
                                        <div className="card">
                                            <img src={ele.featuredImage} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                
                                                    <h5 className="card-title m-0 text-truncate">{ele.name}</h5>
                                                    <p className="card-text text-truncate mt-1 mb-1">{ele.description}</p>
                                                    <h5 className='m-0'>$ {ele.basePrice}</h5>

                                                    {
                                                        carts.some(p=> p.id === ele.id)?
                                                        (<button onClick={() => handleremovefromcart(ele.id)} className='btn btn-danger w-100 mt-3'>Remove From Cart</button>) 
                                                         :
                                                        (<button onClick={() => handleaddtocart(ele)} className='btn btn-warning w-100 mt-3'>Add To Cart</button>)
                                                    }
                                                     
                                                    
                                                </div>  
                                        </div>
                                    </div>
                                )
                            })
                        )
                        } 
  

                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default Products; 