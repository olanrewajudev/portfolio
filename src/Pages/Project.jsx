import React, { useRef } from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { useInView } from 'framer-motion'
const links = [
  {
    icon: project1,
    title: 'Bitcoin Platform',
    details: "XYZ Bitcoin Platform provides a user-friendly interface for seamless cryptocurrency transactions, offering secure and transparent trading experiences. ",
    github: "https://github.com/olanrewajudev/invest-platform",
    online: "https://invest-platform-gules.vercel.app/"
  },
  {
    icon: project2,
    title: 'Tailor Website',
    details: "At XYZ, precision meets style. Explore our online tailor shop for bespoke clothing, where expert craftsmanship and customizable options merge to create garments.",
    github: "https://github.com/olanrewajudev/Joe-Fashion-Concept",
    online: "https://joe-fashion-concept.vercel.app/"
  },
  {
    icon: project3,
    title: 'Landing Page',
    details: "Elevate your online presence with our sleek and responsive landing page designs. Captivate visitors from the moment they arrive, driving engagement and conversions effortlessly.",
    github: "https://github.com/olanrewajudev/avid",
    online: "https://avid-seven.vercel.app/"
  },
  {
    icon: project4,
    title: 'E-commerce Website',
    details: "Discover a world of convenience and choice where our e-commerce platform seamlessly blends a vast product selection with a user-friendly interface..",
    github: "https://github.com/olanrewajudev/ecommerce",
    online: "https://ecommerce-woad-one.vercel.app/"
  },
  {
    icon: project5,
    title: 'Landing Page',
    details: "Elevate your online presence with our sleek and responsive landing page designs. Captivate visitors from the moment they arrive, driving engagement and conversions effortlessly.",
    github: "https://github.com/olanrewajudev/viteproject",
    online: "https://tailwind-iota-eight.vercel.app/"
  },
  {
    icon: project6,
    title: 'Banking Website',
    details: "Experience seamless banking at your fingertips with SecureBank's user-friendly website. From intuitive account management to robust security features, we prioritize your financial well-being.",
    github: "https://github.com/olanrewajudev/hoobank",
    online: "https://hoobank-five-taupe.vercel.app/"
  },

]
const Project = () => {
  const ref = useRef(null);


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
            transform: isInView ? "none" : "translateY(200px)",
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
    <div>
      <div className="">
        <Section >
          <div className="text-center">
            <h4 className="text-wine">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1 className="text-gray text-5xl font-semibold my-2">My Projects</h1>
          </div>
        </Section>
        <div className="">
          <Box>
            <div className="lg:grid items-center justify-center mx-10 my-6 gap-3 grid xl:grid-cols-3 md:grid-cols-2">
              {links.map((item, i) => (
                <div key={i} className="bg-black  mt-5 lg:w-[24rem] rounded-xl py-4 h-[30rem] shadow-2xl shadow-black">
                  <div className="text-cyan-900">
                    <div className="text-6xl flex items-center justify-center py-3 transition duration-300 ease-in-out transform hover:scale-105 "> <img src={item.icon} alt="" className="w-[20rem] rounded-lg" /> </div>
                    <div className="flex items-center my-5 justify-between mx-10">
                      <div className="text-wine text-xl"> {item.title} </div>
                      <div className="flex gap-4">
                        <a href={item.github} target='_blank' className="text-gray bg-bla p-2 rounded-full text-xl"> <FaGithub /> </a>
                        <a href={item.online} target='_blank' className="text-gray bg-bla p-2 rounded-full text-xl"> <FaGlobe /> </a>
                      </div>
                    </div>
                    <div className="mx-10 my-4 text-gray"> <p className=""> {item.details} </p> </div>
                  </div>
                </div>
              ))}
            </div>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Project
