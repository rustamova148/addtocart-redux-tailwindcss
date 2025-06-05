import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import { products } from "../product";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const Detail = () => {
  const {slug} = useParams();
  const [detail, setDetail] = useState([]);
  console.log(detail);
  const [quantity,setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(()=>{
    const findDetail = products.filter(product => product.slug === slug);
    if(findDetail.length > 0){
      setDetail(findDetail[0]);
    }else{
      window.location.href = "/";
    }
  }, [slug])
  
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  }
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  }
  const handleAddToCart = () => {
        dispatch(addToCart({
          productId: detail.id,
          quantity: quantity
        }));
  }
  return (
    <div>
      <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
      <div className="flex flex-col lg:flex-row items-center gap-5 mt-5">
          <div>
             <img src={detail.image} alt="detailimg" width={600} height={600} />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[16px] sm:text-[20px] md:text-[35px] lg:text-[35px] uppercase font-bold">{detail.name}</h1>
            <p className="font-bold text-3xl">
              ${detail.price}
            </p>
            <div className="flex gap-5 h-[70px]">
              <div className="flex gap-2 justify-center items-center">
                <button className="bg-gray-100 w-10 h-[50px] font-bold text-xl rounded-xl flex justify-center items-center" onClick={handleMinusQuantity}>-</button>
                <span className="bg-gray-200 w-10 h-full font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
                <button className="bg-gray-100 w-10 h-[50px] font-bold text-xl rounded-xl flex justify-center items-center" onClick={handlePlusQuantity}>+</button>
              </div>
              <button className="bg-slate-900 text-white px-7 rounded-xl shadow-2xl
              text-[12px] md:text-[13px] lg:text-[16px]" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
            <p className="text-[13px] md:text-[16px] md:w-[510px] lg:text-[16px]">{detail.description}</p>
          </div>
      </div>
    </div>
  )
}

export default Detail