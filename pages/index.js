import Head from "next/head";
import PortfolioSlider from "./slider";



import {
  
  AiFillLinkedin,
 
  AiFillGithub,
  AiFillPhone,
  
  AiFillMail,
 
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import ecommerce from "../public/ecommerce.png"
import soon from "../public/soon.jpg"

import Image from "next/image";
import menu from "../public/menu.png"

export default function Home() {
 
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
 
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 bg-color-main">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="flex items-center gap-2"><AiFillPhone/>(773) 961-9740</h1>
            <h1 className="flex items-center gap-2"><AiFillMail/>saif8502@gmail.com</h1>
        
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1DrbsNxdVSMGu9gEULJNyE3ldQgmQL7e5/view?usp=share_link" target="_main"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Muhammed Saif
            </h2>
            <h3 class="text-2xl py-2 dark:text-white md:text-3xl" style={{
    paddingBottom: "38px"}}>Web Developer.</h3>

            <div>
            
        <PortfolioSlider/>
     
    </div>

            <p className="text-md py-5 leading-8  max-w-xl mx-auto md:text-xl py-4 text-teal-600">
             Let&apos;s Connect!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
             
              <a href="https://www.linkedin.com/in/muhammed-saif/" target="_main"><AiFillLinkedin /></a>
              
              <a href="https://github.com/saif8502" target="_main"><AiFillGithub /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} alt="icon" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects I have built</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             I always love to learn and implement new things. With the help of some research I have built these projects.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am looking for an opportunity to showcase my skills and learn from my peers.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
             <a href="https://my-store-olive.vercel.app/" target="_main"> <Image src={ecommerce} alt="ecommerce-image" width={800} height={600} />
             </a>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                E-commerce Website
              </h3>
         
              <h4 className="py-4 text-teal-600">About</h4>
              <p className="text-gray-800 py-1">• Developed a dynamic and fully responsive website using React.js and JavaScript.</p>
              <p className="text-gray-800 py-1">• Advanced State Management of the entire application using React Context API</p>
              <p className="text-gray-800 py-1">• Next.js best practices, such as static generation and server-side rendering</p>
              <p className="text-gray-800 py-1">• Integrated the website with Sanity.io to manage the content of application using Sanity.</p>
              <p className="text-gray-800 py-1">• Integrated Stripe to manage payments, products, shipping rates, and the entire checkout process</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <a href="https://react-vite-projects-5-menu.netlify.app/" target="_main"><Image src={menu} alt="menu-image" width={800} height={600} /></a>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
               Landing Page
              </h3>
              <h4 className="py-4 text-teal-600">About</h4>
              <p className="text-gray-800 py-1">• Created a Landing page of Menu .</p>
              <p className="text-gray-800 py-1">• The Landing Page has buttons to filter through different items.</p>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={soon} alt="coming-image" width={800} height={600} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Stay Tuned
              </h3>
             
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
