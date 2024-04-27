import store from "../utils/store";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItems } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()
    const handleOnRemove = (data) => {
        console.log(data)
            dispatch(removeItems(data))
    }
    const handleClear = () =>{
        console.log('something')
        dispatch(clearCart())
    }
    return (
        <div className="container mx-auto p-4">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><button className="bg-neutral-600 w-20 rounded-lg text-white  h-14" onClick={()=>handleClear()}>Clear Cart</button></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {cartItems.map((item) => (
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">{item?.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item?.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap"><button className="bg-slate-700 text-white w-20" onClick={() => handleOnRemove(item.id)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
