import React from 'react'
import { FaBars, FaGlobe, FaMobile } from 'react-icons/fa';
import { SiAntdesign, SiProgress } from 'react-icons/si';
import { AiFillAppstore } from 'react-icons/ai';


export const feature = [
  {
    icon: <FaBars />,
    title: "Business Stratagy",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    icon: <AiFillAppstore />,
    title: "App Development",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    icon: <SiProgress />,
    title: "SEO Optimisation",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    icon: <FaMobile />,
    title: "Mobile Development",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
];

const Feature = () => {
  return (
    <div className='my-20'>
      <div className="">
        <div className="text-center my-10">
          <h4 className="text-wine text-xl my-2">FEATURES</h4>
          <h1 className="text-5xl font-semibold text-gray">What I Do</h1>
        </div>
        <div className="">
          <div className="lg:grid grid-cols-3 items-center justify-center gap-6 w-[90%] mx-auto">
            {feature.map((item, i) => (
              <div className="bg-black lg:w-[20rem] text-gray mb-10  hover:bg-opacity-60 hover:-translate-y-1 transition-all cursor-pointer duration-300 flex items-center justify-center px-5 h-[17rem] shadow-black rounded-lg shadow-xl" key={i}>
                <div className="">
                  <div className="text-wine py-2 text-6xl"> {item.icon} </div>
                  <div className="text-2xl font-semibold my-2"> {item.title} </div>
                  <div className=""> {item.des} </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
