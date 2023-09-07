import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { SlMenu } from 'react-icons/sl'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'
import SweetAlert from '../Components/SweetAlert'
import NavbarComps from '../Components/NavBar'


const SignUp = () => {
    const [scroll, setScroll] = useState(false)
    const [box, setBox] = useState(false)
    const [view, setView] = useState(false)
    const [forms, setForms] = useState({
        email: '',
        name: '',
        password: '',
    })

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
    const changeForm = event => {
        setForms({
            ...forms,
            [event.target.name]: event.target.value
        })
    }
    
  const handleView = () => {
    setView(!view)
  }
    const SubmitForm = event => {
        event.preventDefault()
        if(!forms.email) return SweetAlert('Request Failed', 'Email is required', 'error')
        if(!forms.name) return SweetAlert('Request Failed', 'Name is required', 'error')
        if(!forms.password) return SweetAlert('Request Failed', 'Password is required', 'error')
        if(!box) return SweetAlert('Request Failed', 'Agreement to terms and conditions is required', 'error')
        SweetAlert('Request Successful', 'Information successfully added to Database', 'success')
    }

    return (
        <div>
            {view && <NavbarComps closeView={() => setView(!view)} />}
            <div className="bg-[#f9f9f9] pb-20 mb-32">
                <div className={`fixed z-10 w-full ${scroll ? 'bg-white border-b py-3' : 'py-5'}`}>
                    <div className="flex items-center justify-between w-[80%] mx-auto">
                        <Link to='/' className=''> <img src={logo} alt="" className='w-28' /> </Link>
                        <div className="items-center hidden lg:flex">
                            <Link to='' className='text-sm capitalize py-3 px-5 font-semibold text-blue-900'>home</Link>
                            <Link to='' className='text-sm capitalize py-3 px-5 font-semibold text-blue-900'>intro</Link>
                            <Link to='' className='text-sm capitalize py-3 px-5 font-semibold text-blue-900'>features</Link>
                            <Link to='' className='text-sm capitalize py-3 px-5 font-semibold text-blue-900'>details</Link>
                            <Link to='' className='text-sm capitalize py-3 px-5 font-semibold text-blue-900'>drop</Link>
                            <Link to='' className='bg-blue-950 text-white px-4 py-1 text-sm rounded-full'>Start selling</Link>
                        </div>
                        <div className="lg:hidden" onClick={() => handleView(!view)}> <SlMenu /> </div>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br />
                <div className="text-center text-5xl text-blue-900 font-semibold">Vinci Sena</div>
            </div>
            <div className="w-[90%] mx-auto pt-10 rounded-xl bg-[#f9f9f9] mb-6 pb-10 ">
                <div className="text-blue-900 px-3 text-[1rem] lg:text-center text-left pb-5">Entesque adipiscing commodo elit at imperdiet dui accumsan. Commodo viverra maec sene viso derio <Link className='text-blue-500 underline decoration-1'>log in</Link></div>
                <form onSubmit={SubmitForm} className="grid-rows-1 lg:grid-cols-2 px-3">
                    < input name='email' placeholder='Email' onChange={changeForm} value={forms.email} type="email" className="lg:w-full w-full text-sm outline-none border border-slate-600 px-5 py-4 mb-5 rounded-full text-left" />
                    <br />
                    <input name='name' placeholder='Name' onChange={changeForm} value={forms.name} type="text" className="lg:w-full w-full text-sm px-4 outline-none border border-slate-600 py-5 mb-5 rounded-full text-left" />
                    <br />
                    <input name='password' placeholder='Password' onChange={changeForm} value={forms.password} type="password" className="lg:w-full w-full text-sm outline-none border border-slate-600 px-4 mb-5 py-5 rounded-full text-left" />
                    <br />
                    <input type="checkbox" name="box" onChange={event => setBox(event.target.checked)} checked={box} value={box} className='mb-5 mr-2  items-center text-sm' /><div className='text-[0.8rem] text-center text-zinc-500'>Turpis tincidunt id aliquet ri <Link className='text-zinc-500 underline decoration-1'>Privacy policy.</Link> and <Link className='text-zinc-500 underline decoration-1'>Terms and Conditions</Link></div>
                    <br />
                    <button className='bg-unique mt-4 text-white text-center  py-4 rounded-full px-5 lg:w-full w-full'>Sign up</button>
                </form>
            </div>
            <div className="bg-[#f9f9f9] w-full mt-20 mx-auto">
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
            </div>
        </div>
    )
}

export default SignUp
