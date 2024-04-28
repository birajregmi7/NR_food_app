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
    const cartItem = useSelector((store) => { return store.cart.items })
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
                        {/* <li className="hover:font-black">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:font-black">
                            <Link to={'/contact'}>Contact</Link>

                        </li> */}
                        <li>
                            <Link className="flex items-center" to={"/cart"}>
                                <img
                                className="w-14"
                                    src={"data:image/png;base64,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"}
                                />
                                 {cartItem?.length}
                            </Link>
                            {" "}
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