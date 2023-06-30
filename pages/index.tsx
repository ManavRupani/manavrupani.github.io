

import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar';
import { motion } from "framer-motion"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <head>
        <title>Create Next App</title>
        <meta name="Decription" content="Genrated by next app"/>
        <meta name="viewport" content="width-device-width,initial-scale=1"/>
        <link rel="icon" href='/favicon.ico'/> 
      </head>
      <main className='w-full h-screen font-bodyfont bg-bodyColor text-textLight overflow-hidden overflow-y-scroll'>
      <Navbar  />
      </main>
    /</>
    
  );
}
