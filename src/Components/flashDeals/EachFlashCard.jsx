import { Link } from "react-router-dom"
import ProductDetailed from "../DetailedProduct/ProductDetailed"

const eachFlashCard = ({ product ,id, addToCart,increment,count}) => {

    return( <>

<div className='box'>
    {console.log(product)}
              <div className='product mtop hover:cursor-pointer ' onClick={()=>id(id)}>
              <Link to="/ProductDetailed">
                
                <div className='img' >
                  <span className='discount'>{product.discount}% Off</span>
                  <img src={product.cover} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{product.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${product.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(product)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
                </Link>
              </div>
            </div>

    </>

    )
                }
export default eachFlashCard