import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from "react-icons/ai"
// import Image from 'next/image'
import deved from "../../public/dev-ed-wave.png"
import design from "../../public/design.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"
import web1 from "../../public/web1.png"
import web2 from "../../public/web2.png"
import web3 from "../../public/web3.png"
import web4 from "../../public/web4.png"
import web5 from "../../public/web5.png"
import web6 from "../../public/web6.png"
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode?'dark':''}>
      <Head>
        <title>Developed by Fahad</title>
        <meta name="portofolio" content="portofolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 flex justify-between mb-12'>
            <h1 className='text-lg font-burtons dark:text-gray-100'>developedbyfahad</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer dark:text-gray-100'/>
              </li>
              <li><a href="#" className=' bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md ml-8 px-4 py-2 text-white'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center m-10'>
            <h2 className='py-2 text-6xl font-semibold text-teal-500 md:text-7xl'>Fahad Ali J.</h2>
            <h3 className='py-2 text-xl md:text-2xl dark:text-gray-100'>Content Creator & Developer</h3>
            <p className='text-md py-5 text-gray-600 leading-8 md:text-xl md:max-w-xl mx-auto dark:text-gray-400'>
            As a Content Creator & Developer, I specialize in creating revolutionary content and digital experiences that inspire users and clients alike.
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-100'>
              <AiFillTwitterCircle/>
              <AiFillLinkedin/>
              <AiFillYoutube/>
            </div>
            <div className=' relative bg-gradient-to-b from-teal-500 rounded-full overflow-hidden w-80 h-80 mt-20 mx-auto md:w-96 md:h-96'>
              <Image src={deved} layout = "fill" objectFit='cover'/>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-100'>Services I offer</h3>
            <p className='text-md py-2 lead text-gray-800 dark:text-gray-400'>
            Content creation and development are both important aspects of any digital strategy. As a  <span className='text-teal-500'>content creator</span>, I can come up with creative concepts for content pieces, develop compelling visuals to create a stronger impact, and even craft pieces that engage target audiences and followers. As a <span className='text-teal-500'>web developer</span>, I can build fully functioning websites from the ground up, offer integrations with third-party platforms, and provide a modern website experience to visitors.
            </p>
            <p className='text-md py-2 lead text-gray-800 dark:text-gray-400'>
            I offer from a wide range of services, including content creation, programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10 lg:text-sm'>
            <div className='flex flex-col flex-1 items-center text-center shadow-lg dark:shadow-gray-500 p-10 rounded-xl my-10 dark:bg-gray-100'>
              <Image src={design} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Content Creation</h3>
              <p className='py-2 dark:text-gray-600'>
              Content creation is the process of creating and preparing a piece of content for publication to a specific audience, usually online.
              </p>
              <h4 className='py-4 text-teal-500'> Content tools I use</h4>
              <p className=' text-gray-800 py-1 dark:text-gray-600'>Youtube</p>
              <p className=' text-gray-800 py-1 dark:text-gray-600'>Instagram</p>
              <p className=' text-gray-800 py-1 dark:text-gray-600'>Canva</p>
            </div>
            <div className='flex flex-col flex-1 items-center text-center shadow-lg p-10 dark:shadow-gray-500 rounded-xl my-10 dark:bg-gray-100'>
              <Image  src={code} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Coding</h3>
              <p className='py-2 dark:text-gray-600'>
              Coding is the process of writing computer code to create webpages, software applications, databases, computer programs, and other digital content. It requires planning, problem solving, critical thinking, and implementation to build functioning and well-documented software products.
              </p>
              <h4 className='py-4 text-teal-500'> Coding tools I use</h4>
              <p className=' text-gray-800 py-1 dark:text-gray-600'>VS Code</p>
              <p className=' text-gray-800 py-1 dark:text-gray-600'>Postman</p>
              <p className=' text-gray-800 py-1 dark:text-gray-600'>MySQL Workbench</p>
            </div>
            <div className='flex flex-col flex-1 items-center text-center shadow-lg dark:shadow-gray-500 p-10 rounded-xl my-10 dark:bg-gray-100'>
              <Image  src={consulting} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Teaching</h3>
              <p className='py-2 dark:text-gray-600'>
              Teaching is the process of providing knowledge and guidance to someone so that they can learn and understand a particular subject or skill. It requires patience, active listening, conceptual understanding, and practice.
              </p>
              <h4 className='py-4 text-teal-500'> Teaching tools I use</h4>
              <p className=' text-gray-800 py-1 dark:text-gray-600'>Youtube</p>
              <p className=' text-gray-800 py-1 dark:text-gray-600'>Zoom</p>
              <p className=' text-gray-800 py-1 dark:text-gray-600'>Udemy</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-100'>Portfolio</h3>
            <p className='text-md py-2 lead text-gray-800 dark:text-gray-400'>
            Content creation and development are both important aspects of any digital strategy. As a  <span className='text-teal-500'>content creator</span>, I can come up with creative concepts for content pieces, develop compelling visuals to create a stronger impact, and even craft pieces that engage target audiences and followers. As a <span className='text-teal-500'>web developer</span>, I can build fully functioning websites from the ground up, offer integrations with third-party platforms, and provide a modern website experience to visitors.
            </p>
            <p className='text-md py-2 lead text-gray-800 dark:text-gray-400'>
            I offer from a wide range of services, including content creation, programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
           
          </div>
        </section>
      </main>
    </div>
  )
}
