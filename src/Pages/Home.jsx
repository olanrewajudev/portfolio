import React from 'react'
import banner from '../assets/banner.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaCss3, FaFacebookF, FaHtml5, FaInstagram, FaLinkedinIn, FaNodeJs, FaReact, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { SiFramer, SiTailwindcss } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { Link } from 'react-router-dom';

const find = [
    {
        Icon: <FaFacebookF />,
        link: 'https://web.facebook.com/?_rdc=1&_rdr'
    },
    {
        Icon: <FaLinkedinIn />
    },
    {
        Icon: <FaInstagram />
    },
    {
        Icon: <FaTwitter />
    },
]

const skill = [
    {
        Icon: <FaReact />
    },
    {
        Icon: <SiTailwindcss />
    },
    {
        Icon: <FaHtml5 />
    },
    {
        Icon: <FaCss3 />
    },
    {
        Icon: <IoLogoJavascript />
    },
    {
        Icon: <FaNodeJs />
    },
    {
        Icon: <SiFramer />
    },
]
const Home = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Front-End Developer", "UI Designer.","Skilled Problem Solver."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div>
            <div className="">
                <div className="lg:flex items-center justify-between gap-5 mx-10">
                    <div className="mt-10">
                        <p className="font-light mb-5 text-gray">WELCOME TO MY WORLD..</p>
                        <h1 className="text-5xl font-bold text-white">Hi, I'm <span className="text-wine capitalize">Olanrewaju Aminu</span></h1>
                        <h2 className="text-4xl font-bold mt-2 text-white">a <span>{text}</span><Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#800020" /></h2>
                        <p className="text-gray mt-4 leading-6 tracking-wide">
                            I use animation as a third dimension by which to simplify experiences
                            and kuiding thro each and every interaction. I'm not adding motion
                            just to spruce things up, but doing it in ways that.
                        </p>
                        <div className="flex items-center justify-center">
                            <div className="my-10">
                                <h1 className="text-gray mb-5 text-center  font-medium">FIND ME IN</h1>
                                <div className="flex items-center justify-between mx-10 gap-4">
                                    {find.map((item, i) => (
                                        <div key={i} className="bg-black rounded-xl hover:text-wine mb-3 hover:bg-opacity-60 hover:-translate-y-1 transition-all cursor-pointer duration-300 shadow-black shadow-2xl w-[4.5rem] text-center flex items-center justify-center text-3xl text-white h-[5rem]"> {item.Icon} </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={banner} alt="banner" className='w-[45rem]' />
                    </div>
                </div>
                <div className="border-b py-5 border-black mx-10"></div>
            </div>
        </div>
    )
}

export default Home
