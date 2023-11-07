import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { useScroll, useSpring, motion } from 'framer-motion';

export const links = [
    {
        title: "Home",
        link: "home",
    },
    {
        title: "Feature",
        link: "feature",
    },
    {
        title: "Project",
        link: "project",
    },
    {
        title: "Contact",
        link: "contact",
    },
];
const Header = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <div>
            <motion.div className="progress" style={{ scaleX }}></motion.div>

            <div className="fixed w-full bg-gray z-10 border-b">
                <div className="flex items-center justify-between py-3 px-16">
                    <div className=""> <img src={logo} alt="" className="" /> </div>
                    <div className="lg:flex hidden items-center justify-between">
                        {links.map((item, i) => (
                            <div className="text-base font-normal text-gray-400 px-5 hover:text-wine cursor-pointer" key={i}>
                                <Link activeClass='active' to={item.link} spy={true} smooth={true} offset={-70} duration={500} >
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-3xl lg:hidden hover:text-wine cursor-pointer"> <HiMiniBars3BottomRight /> </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Header
