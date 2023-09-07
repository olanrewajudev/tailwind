import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { SlMenu } from 'react-icons/sl'
import header from '../assets/images/header.png'
import introduction from '../assets/images/introduction.jpg'
import ImageViewar from '../Components/ImageViewar'
import details from '../assets/images/details-1.png'
import detail from '../assets/images/details-2.png'
import deals from '../assets/images/details-3.png'
import { FaArrowRight, FaBookmark, FaFacebookF, FaHeadphonesAlt, FaInstagram, FaPinterestP, FaSimplybuilt, FaSquare, FaTwitter } from 'react-icons/fa'
import NavbarComps from '../Components/NavBar'



const Home = () => {
    const [scroll, setScroll] = useState(false)
    const [view, setView] = useState(false)
    const [bars, setBars] = useState(false)
    const [viewing, setViewing] = useState('')

    window.onscroll = function () {
        siteScroll()
    }

    function siteScroll() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    const handleview = (item) => {
        setViewing(item)
        setView(!view)
        setBars(!bars)
    }
    return (
        <div>
            {view && <NavbarComps closeView={() => setBars(!bars)} />}
            {view && <ImageViewar img={viewing} closeView={() => setView(!view)} />}
            <div className="bg-banner z-10 pb-16">
                <div className={`fixed z-10 w-[100%] ${scroll ? 'bg-white border-b py-3' : 'py-5'}`}>
                    <div className="flex items-center justify-between w-[75%] mx-auto">
                        <Link to='/' className=""> <img src={logo} alt="" className="w-28" /> </Link>
                        <div className="items-center hidden lg:flex">
                            <Link to='' className="text-sm capitalize py-3 px-5 font-bold text-blue-900">home</Link>
                            <Link to='' className="text-sm capitalize py-3 px-5 font-bold text-blue-900">intro</Link>
                            <Link to='' className="text-sm capitalize py-3 px-5 font-bold text-blue-900">features</Link>
                            <Link to='' className="text-sm capitalize py-3 px-5 font-bold text-blue-900">details</Link>
                            <Link to='' className="text-sm capitalize py-3 px-5 font-bold text-blue-900">drop</Link>
                            <Link to='' className="text-white bg-blue-950 text-sm py-1.5 px-5 rounded-full">Start selling</Link>
                        </div>
                        <div className="lg:hidden" onClick={() => handleview(!bars)}> <SlMenu /> </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto">
                    <div className="flex flex-col items-center gap-6 col-2 justify-center py-14">
                        <div className="text-blue-950 font-extrabold text-4xl text-center lg:text-left leading-[3.5rem]">Lorem ipsum dolor sit amet consectetur adipisic</div>
                        <div className="semibold text-zinc-500 text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque, deleniti aperiam accusantium porro dignissimos officiis vero sunt asperiores. Soluta!</div>
                        <div className="flex flex-col lg:flex-row gap-6 items-center lg:justify-start justify-center w-full">
                            <Link to='' className='border border-unique bg-unique py-4 px-8 text-orange-50 rounded-full hover:bg-transparent hover:text-unique transition-all font-semibold'>Sign up for free</Link>

                            <Link to='' className='border border-unique bg-transparent py-4 px-8 text-unique rounded-full hover:bg-unique hover:text-orange-50 transition-all font-semibold'>Discover</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img onClick={() => handleview(header)} src={header} alt="" className="" />
                    </div>
                </div>
            </div>
            <div className="w-10/12 mx-auto my-20 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="overflow-hidden">
                        <img onClick={() => handleview(introduction)} src={introduction} alt="" className='w-screen lg:w-10/12  mx-auto hover:brightness-50 transition-all hover:scale-105' />
                    </div>
                    <div className="">
                        <div className="flex items-start gap-6 flex-col mb-14 h-full justify-center">
                            <div className="text-[1.4rem] lg:text-3xl font-semibold text-blue-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vero.</div>
                            <div className="text-[0.8rem] leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis doloremque autem fugiat suscipit officia cumque, atque, dolores possimus explicabo sint consequatur quis rem et optio, eaque nam ullam! Dolor, repudiandae.</div>
                            <Link className='border border-unique bg-unique text-white hover:bg-transparent hover:text-unique py-2 px-6 rounded-full'>Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#040470] w-100 h-10/12 lg:px-20 px-6 py-20">
                <div className="font-extrabold text-3xl text-white text-center leading-[4rem]">Lorem ipsum dolor sit.</div>
                <div className="text-white/80 text-center pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid a repellendus, corporis amet necessitatibus quos!</div>
                <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">

                    <div className="border border-zinc-800 rounded-lg pt-2">
                        <div className="border-l-2 p-2 border-orange-700">
                            <div className="text-red-400 font-extrabold bg-[#3232a0] w-fit px-5 py-5 rounded-full text-4xl"> <FaHeadphonesAlt /> </div>
                        </div>
                        <div className="p-2">
                            <div className="text-white text-2xl pb-5 font-semibold">Lorem ipsum dolor sit amet, adipisicing.</div>
                            <div className="text-white/80 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium asperiores accusantium? Itaque.</div>
                            <div className="text-white flex items-center">learn more <FaArrowRight /> </div>
                        </div>
                    </div>

                    <div className="border border-zinc-800 rounded-lg pt-2">
                        <div className="border-l-2 p-2 border-orange-700">
                            <div className="text-red-400 bg-[#3232a0] font-extrabold w-fit px-5 py-5 rounded-full text-4xl"> <FaBookmark /> </div>
                        </div>
                        <div className="p-2">
                            <div className="text-white text-2xl pb-5 font-semibold">Lorem ipsum dolor sit amet, adipisicing.</div>
                            <div className="text-white/80 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium asperiores accusantium? Itaque.</div>
                            <div className="text-white flex items-center">learn more <FaArrowRight /> </div>
                        </div>
                    </div>
                    <div className="border border-zinc-800 pt-2 rounded-lg">
                        <div className="border-l-2 p-2 border-orange-700">
                            <div className="text-red-400 font-extrabold bg-[#3232a0] w-fit px-5 py-5 rounded-full text-4xl"> <FaSimplybuilt /> </div>
                        </div>
                        <div className="p-2">
                            <div className="text-white text-2xl pb-5 font-semibold">Lorem ipsum dolor sit amet, adipisicing.</div>
                            <div className="text-white/80 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium asperiores accusantium? Itaque.</div>
                            <div className="text-white flex items-center">learn more <FaArrowRight /> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-10/12 pl-6 lg:pl-16 mt-32 lg:px-20">
                <div className="text-blue-950 lg:text-[2rem] text-[1.5rem] font-[600] leading-1 pb-4">Diam vel quam elementum pulvinar etiam non quam. Elementum facilisis leo velfri</div>
                <div className="text-blue-950/80 lg:text-[1rem] text-[0.9rem] leading-7">Eu ultrices vitae auctor eu augue ut lectus. A erat nam at lectus. Metus aliquam eleifend mi in. Tempus egestas sed sed risus pretium quam vulputate. pharetra pharetra massa massa ultricies mi. Lorem sed risus ultricies tristique</div>
            </div>
            <div className="flex-cols lg:flex items-center mt-32 mb-40 justify-between w-10/12 mx-auto">
                <img src={details} alt="" className="w-[85%] lg:w-[60%]  h-auto" />
                <div className=" mt-16 lg:pb-10">
                    <Link className='w-fit bg-orange-100 text-unique px-5 py-1 rounded-full'>Step 1</Link>
                    <div className="text-blue-950 font-semibold pt-3 text-4xl">Aliquet enim tortor atel</div>
                    <div className="text-blue-950/60 pt-10 pb-10 text-[0.9rem]">Dignissim cras tincidunt lobortis feugiat. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Morbi blandit cursus risus at nibh nisl condimentum</div>
                    <Link className='border border-unique bg-unique text-white hover:bg-transparent hover:text-unique py-2 px-6 rounded-full font-semibold'>Lightbox</Link>
                </div>
            </div>

            <div className="flex-cols lg:flex w-10/12 mx-auto">
                <div className="pr-10 pb-10">
                    <Link className='w-fit bg-orange-100 text-unique px-5 py-1 rounded-full'>Step 2</Link>
                    <div className="text-blue-950 font-semibold pt-3 text-[2rem]">Diam ut venenatis tellus</div>
                    <div className="text-blue-950/60 pt-6 pb-5 text-[0.9rem]">Volutpat diam ut venenatis tellus. Faucibus pulvinar elementum integer enim neque. Rhoncus urna neque viverra justo nec ultrices dui malesuada pellen tesque</div>
                    <div className=" flex-cols ">
                        <div className="text-[0.9rem]  flex items-center leading text-blue-950/80 gap-4"> <FaSquare /> Massa ultricies mi quis hendrerit dolor condimtis</div>
                        <div className="text-[0.9rem]  flex items-center leading text-blue-950/80 gap-4"> <FaSquare /> Pellentesque id nibh tortor id aliquet deriva</div>
                        <div className="text-[0.9rem]  flex items-center leading text-blue-950/80 gap-4"> <FaSquare /> Ectus proin molestie a iaculis at erat pellent</div>
                    </div>
                </div>
                <img src={detail} alt="" className='w-[85%] lg:w-[60%] h-auto' />
            </div>
            <div className="flex-cols lg:flex items-center mt-32 mb-40 justify-between w-10/12 mx-auto">
                <img src={deals} alt="" className="w-[100%] lg:w-[60%]  h-auto" />
                <div className=" mt-16 lg:pb-10">
                    <Link className='w-fit bg-orange-100 text-unique px-5 py-1 rounded-full'>Step 3</Link>
                    <div className="text-blue-950 font-semibold pt-3 text-4xl">Commodo viverra mauris</div>
                    <div className="text-blue-950/60 pt-10 pb-10 text-[0.9rem]">Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Neque gravida in fermentum et sollicitudin ac nterdum consectetur libero</div>
                    <Link to='/signup' onClick={() => window.scrollTo(0, 0)} className='border border-unique bg-unique text-white hover:bg-transparent hover:text-unique py-2 px-6 rounded-full'>Sign up now</Link>
                </div>
            </div>
            <div className="flex-cols w-10/12 items-center justify-center lg:px-32 lg:py-2 mx-auto">
                <div className="lg:text-center text-blue-950 font-semibold text-3xl">Donec ultrices tincidunt</div>
                <div className="lg:text-center text-[1.rem] pt-4 leading-6">Sodales neque sodales ut libero volutpat sed cras @name ornare arcu dui vivamus arcu vel turpis nunc eget lorem dolor sed viverra</div>
                <div className="pt-10 flex-cols w-10/12  ">
                    <input type="email" placeholder='Email address' className='border border-zinc-850 mb-6 rounded-full lg:rounded-br-[2rem] outline-none lg:rounded-r-[2rem]  lg:rounded-bb-[2rem] lg:px-20 py-4 px-10 text-sm text-start' /><button className='bg-unique text-white lg:rounded-tl-[2rem] lg:rounded-bl-[2rem] py-[1rem] px-20 rounded-full lg:px-10'>Subscribe</button>
                </div>
            </div>
            <div className="bg-[#f9f9f9] w-full mt-32 h-full">
                <div className="flex-cols lg:flex items-center justify-between pt-20 pb-16 mx-auto  ml-[7%] mr-[7%]">
                    <div className=" pb-10">
                        <div className="text-[#454545] text-1xl font-semibold">Lorem, ipsum.</div>
                        <div className="text-[#454545] text-[0.8rem] leading-6">
                            Dui vivamus arcu felis bibendum ut tristique et <br /> egestas. Dictum sit amet justo donec enim. <br /> Parturient montes nascetur ridiculus mus mauris
                        </div>
                    </div>
                    <div className="pb-10">
                        <div className="text-[#454545]  font-semibold">Links</div>
                        <div className="text-[0.8rem] leading-8">Important: Terms & Conditions, Privacy Policy</div>
                        <div className="text-[0.8rem] leading-8">Useful: Colorpicker, Icon Library, Illustrations</div>
                        <div className="text-[0.8rem] leading-8">Menu: Home, Intro, Features, Details</div>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <Link className=' bg-white p-[0.8rem] ml-4 rounded-full'> <FaFacebookF /> </Link>
                            <Link className=' bg-white p-[0.8rem] ml-4 rounded-full'> <FaTwitter /> </Link>
                            <Link className=' bg-white p-[0.8rem] ml-4 rounded-full'> <FaPinterestP /> </Link>
                            <Link className=' bg-white p-[0.8rem] ml-4 rounded-full'> <FaInstagram /> </Link>
                        </div>
                        <div className="pl-6  pt-6">
                            <div className="text-[0.8rem]">Nam aliquam sem et tortor cons</div>
                            <Link className='font-semibold text-[0.7rem]'>contact@olanrewajuwebdesigner.com</Link>
                        </div>
                    </div>
                </div>
                <div className=" pb-10 text-center">Copyright © Olanrewaju</div>
            </div>
        </div>
    )
}

export default Home
//