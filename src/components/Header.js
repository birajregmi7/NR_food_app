import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOffline from './useOffline'
import { website_Logo } from "../Constant";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
const Header = () => {
    const { user } = useContext(UserContext)
    const [setingAuth, setSetingAuth] = useState(false)
    const isOffline = useOffline()
    const cartItem = useSelector((store) => {return store.cart.items})
    console.log(cartItem)
    return (
        <>
            <div className='flex justify-between border-b-2 pt-8 lg:ml-60 lg:mr-60 '>
                <img className="max-w-24 h-24 " src={website_Logo} alt="Logo" />
                <div className='flex items-center justify-center '>
                    <ul className="flex gap-32 text-3xl font-semibold pb-4  text-[#02060cbf]
 ">
                        <li className="hover:font-black">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:font-black">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:font-black">
                            <Link to={'/contact'}>Contact</Link>

                        </li>
                        <li>
                            <Link to={"/cart"}>Cart</Link>
                            {" "} {cartItem?.length}
                        </li>
                    </ul>
                </div>

                <div>
                    {setingAuth ? <button onClick={() => setSetingAuth(false)}>Logout</button> : <button onClick={() => setSetingAuth(true)}>Login</button>}
                    <div>{isOffline ? <p>Offline Check your connection🔴</p> : <p>Online 🟢 Welcome {user}</p>}</div>
                </div>

            </div>

        </>)
}

export default Header