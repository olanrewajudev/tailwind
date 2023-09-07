import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
const NavbarComps = ({ closeView }) => {

    return (
        <div className="bg-black/90 fixed z-50 w-screen overflow-y-hidden h-screen ">
            <div className="pt-8 mb-8">
                <div className="flex items-center justify-between">
                    <div className="">
                        <img src={logo} alt="" className="w-32 bg-white rounded-full px-6 py-3 ml-10" />
                    </div>

                    <div className="mr-10 text-4xl text-white">
                        <HiOutlineBars3BottomRight className="cursor-pointer" onClick={closeView} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 text-white">
                <Link to="/" className="font-semibold ml-5 text-[#fff] text-xl">
                    home
                </Link>
                <Link to="/signup" className="font-semibold ml-5 text-xl">
                    signup
                </Link>
            </div>
        </div>
    )
}

export default NavbarComps