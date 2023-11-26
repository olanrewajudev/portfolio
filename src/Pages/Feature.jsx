import React, { useRef } from 'react'
import { FaBars, FaGlobe, FaMobile } from 'react-icons/fa';
import { SiAntdesign, SiProgress } from 'react-icons/si';
import { AiFillAppstore } from 'react-icons/ai';
import { motion, useInView } from 'framer-motion';


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
  const ref = useRef(null);
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
  };


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  function Section({ children }) {
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }

  function Box({ children }) {
    const isInView = useInView(ref, { once: true });

    return (
      <article ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </article>
    );
  }


  return (
    <div className='my-20'>
      <motion.div className=""
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
        <Section>
          <div className="text-center my-10" >
            <motion.h4 className="text-wine text-xl my-2" variants={{ hidden: { opacity: 0, y: -20 }, visible }}>FEATURES</motion.h4>
            <motion.h1 className="text-5xl font-semibold text-gray" variants={{ hidden: { opacity: 0, y: -20 }, visible }}>What I Do</motion.h1>
          </div>
        </Section>
        <div className="">
          <Box>
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
          </Box>
        </div>
      </motion.div>
    </div>
  )
}

export default Feature
