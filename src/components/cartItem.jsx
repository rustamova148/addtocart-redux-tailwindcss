import { useState, useEffect } from "react";
import { products } from "../product";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart";

const CartItem = (props) => {
const {productId, quantity} = props.data;
const [detail, setDetail] = useState([]);
const dispatch = useDispatch();
useEffect(() => {
   const findDetail = products.filter(product => product.id === productId)[0];
   setDetail(findDetail);
}, [productId])
console.log(detail);
const handleMinusQuantity = () => {
   dispatch(changeQuantity({
        productId: productId,
        quantity: quantity - 1
   }));
}
const handlePlusQuantity = () => {
    dispatch(changeQuantity({
        productId: productId,
        quantity: quantity + 1
   }));
}
  return (
    <div className="w-80 flex justify-between items-center bg-slate-600 text-white ps-3 pe-4 py-3 border-b-2 border-slate-700 gap-3 rounded-md">
        <img src={detail.image} alt="" className="w-12"/>
        <h3>{detail.name}</h3>
        <p>${detail.price * quantity}</p>
        <div className="w-20 flex justify-between gap-1">
            <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={handleMinusQuantity}>-</button>
            <span>{quantity}</span>
            <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={handlePlusQuantity}>+</button>
        </div>
    </div>
  )
}

export default CartItem