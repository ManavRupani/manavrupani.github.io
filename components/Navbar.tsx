import { logo } from "@/public/assests"
// // const logo = require('../public/assests/newmrlogodrid.png');
import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { motion } from "framer-motion"
const Navbar = () => {
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titlefont flex items-center justify-between'>
        <motion.div 
          initial={{ opacity : 0 }} 
          animate={{ opacity : 1 }} 
          transition={{ duration : 0.5 }}
        >
        <Image className="w-14"src={logo} alt="manav"/>
        </motion.div>
        <div>
        <ul className="flex text-[13px] gap-7">
            <Link className="flex flex-center gap-1 font-meduim text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link " href="#home">
            <motion.li
              initial={{ y : -10, opacity : 0 }}
              animate={{ y : 0, opacity : 1 }}
              transition={{duration:0.1}}
            >Home</motion.li></Link>
            <Link className="flex flex-center gap-1 font-meduim text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link " href="#home">
            <li><span className="text-textGreen">01.</span>About</li></Link>
            <Link className="flex flex-center gap-1 font-meduim text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link " href="#home">
            <li><span className="text-textGreen">02.</span>Experiance</li></Link>
            <Link className="flex flex-center gap-1 font-meduim text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link " href="#home">
            <li><span className="text-textGreen">03.</span>Projects</li></Link>
        </ul>
        
      </div>
        {/* <div className=' text-textGreen text-[50px]'>MR</div> */}
      </div>
      
    </div>

  )
}

export default Navbar