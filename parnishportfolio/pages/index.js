process.env.NODE_NO_WARNINGS = 'stream/web';
import { Inter } from 'next/font/google';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineEnvironment } from "react-icons/ai";
import Image from 'next/image';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""} >
      <main className='bg-slate-100 px-10 md:px-20 lg:px-40 dark:bg-gray-600'>
        <section className='bg-slate-100 min-h-screen  dark:bg-gray-600 '>
          <div className="navbar-line"></div>
          <nav className='py-2 mb-12 flex justify-between items-center'>
            <h1 className='animate-pulse'>
              <img src="/signature.png" className="w-32 h-5" />
            </h1>
            <ul className='flex items-center'>
              <li className='pl-5' >
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className={`cursor-pointer text-2xl ${darkMode ? 'text-white' : 'text-black'}`}
                />
              </li>
              <li>
                <a
                  href='https://drive.google.com/drive/folders/10-JAPTpRWQKmNHa9qrPY_o2751y_fjrs?usp=drive_link'
                  className='bg-gradient-to-r from-teal-300 to-teal-600 text-white px-4 py-1 rounded-md ml-8'
                  target='_blank'
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>





        <div className='flex flex-col lg:flex-row items-center'>
          <div className='w-full lg:w-1/2 text-center lg:text-right lg:pr-16'>
<h2 className='text-3xl py-3 text-teal-500 font-semibold animate-typing md:text-2xl mb-4 '>PARNISH SHARMA</h2>
            <h2 className='text-2xl py-4 font-thin  text-black '> FULL STACK DEVELOPER</h2>
            <h3 className='text-2xl py-5 font-serif text-center lg:text-right lg:ml-auto lg:mr-0 text-black'>
              Hi, I'm Parnish, a passionate and aspiring Frontend and Backend Developer. I am currently pursuing my B.Tech in Computer Science and Engineering (CSE) Core at SRM Institute of Science and Technology in Chennai. I am currently in my 3rd year, 5th semester.
            </h3>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <div className='max-w-md mx-auto'>
              <div className='group relative'>
                <Image
                  src='/myimage.jpg'
                  alt='My Image'
                  width={300}
                  height={100}
                  className='rounded-full shadow-lg filter brightness-75 grayscale group-hover:brightness-1 transition duration-200'
                />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-100'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center py-1 text-slate-900 text-5xl gap-8'>
         <a href="https://www.instagram.com/parnish_sharma/" target="_blank" rel="noopener noreferrer"className="hover:text-teal-500"> <AiFillInstagram /></a>
         <a href="https://www.linkedin.com/in/parnish-sharma-63911921b/" target="_blank" rel="noopener noreferrer"className="hover:text-teal-500">    <AiFillLinkedin /></a>
         <a href="https://github.com/ParnishSharma" target="_blank" rel="noopener noreferrer"className="hover:text-teal-500"><AiFillGithub /></a>
        </div>
      </section>

 



      <section className=' dark:bg-gray-700'>
        <div>
          <h3 className='text-center text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text py-14 px-8'>ABOUT MY PROJECTS</h3>
        </div>

        <div>
          <div className='text-center text-2xl font-serif'>
            <p className='animate-pulse-gradient  text-black'>
              In my web development journey, I have successfully built a range of projects including a news app, Django forms, and a quote generator.
              The news app provides up-to-date news articles, allowing users to stay informed.
              With Django forms, I created interactive and user-friendly forms for seamless data input and management.
              The quote generator, developed using React, offers inspiring and motivational quotes with a click of a button.
              These projects showcase my skills in utilizing different technologies to deliver functional and engaging web applications that cater to specific needs.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12'>
          <a href='https://newskyu.onrender.com/' target='_blank' rel='noopener noreferrer'>
            <div className=' text-teal-500  rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-center  dark:bg-gray-600'>
              <img src='/Screenshot (147).png' alt='News App' className='w-full h-full object-cover rounded-t-lg project-image' />
              <h4 className='text-xl font-semibold text-center py-4'>News App</h4>
            </div>
          </a>

          <a href='https://tryforms.onrender.com/' target='_blank' rel='noopener noreferrer'>
            <div className=' text-teal-500  rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-center  dark:bg-gray-600'>
              <img src='/Screenshot (149).png' alt='Django Forms' className='min-w-full min-h-fit object-cover rounded-t-lg project-image' />
              <h4 className='text-xl font-semibold text-center py-4'>Django Forms</h4>
            </div>
          </a>

          <a href='https://parnishsharma.github.io/QUOTEGENERATOR/' target='_blank' rel='noopener noreferrer'>
            <div className=' text-teal-500  rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-center  dark:bg-gray-600'>
              <img src='/Screenshot (148).png' alt='Quote Generator' className='w-full h-full object-cover rounded-t-lg project-image' />
              <h4 className='text-xl font-semibold text-center py-4'>Quote Generator</h4>
            </div>
          </a>

          <a href='https://parnishsharma.pythonanywhere.com/' target='_blank' rel='noopener noreferrer'>
            <div className=' text-teal-500  rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-center  dark:bg-gray-600'>
              <img src='/Screenshot (146).png' alt='Movie Rater' className='w-full h-full object-cover rounded-t-lg project-image' />
              <h4 className='text-xl font-semibold text-center py-4'>MOVIE-RATING</h4>
            </div>
          </a>

          <a href='https://parnishsharma.github.io/routinelist/' target='_blank' rel='noopener noreferrer'>
            <div className=' text-teal-500  rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-center  dark:bg-gray-600'>
              <img src='/Screenshot (151).png' alt='Movie Rater' className='w-full h-full object-cover rounded-t-lg project-image' />
              <h4 className='text-xl font-semibold text-center py-4'>Routine-Task</h4>
            </div>
          </a>

          <a href='https://nochapp.onrender.com/' target='_blank' rel='noopener noreferrer'>
            <div className=' text-teal-500  rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-center  dark:bg-gray-600'>
              <img src='/Screenshot (152).png' alt='Movie Rater' className='w-full h-full object-cover rounded-t-lg project-image' />
              <h4 className='text-xl font-semibold text-center py-4'>Node-Chat</h4>
            </div>
          </a>
        </div>
      </section>





      <section className=' dark:bg-gray-600'>
        <div>

          <h3 className='text-center text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text py-14 px-8 '>
            MORE ABOUT ME</h3>
        </div>
        <div>
          <div className="bg-gray-100 p-8  dark:bg-gray-600">
            <h1 className=" text-teal-500  text-3xl font-bold mb-6 pb-5">Skills:</h1>
            <ul className=" text-xl grid grid-cols-2 gap-4  text-black">
              <li>C</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Tailwind CSS</li>
              <li>React.js</li>
              <li>Python</li>
              <li>Flask</li>
              <li>Django</li>
              <li>MongoDB</li>
              <li>FastAPI</li>
            </ul>

            <h1 className=" text-teal-500  text-3xl font-bold mt-8 mb-6 pb-5">Education:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div>
                <h2 className="text-xl text-red-400 font-bold">Schooling:</h2><br />
                <div className='  text-black '>
                  <p className=" text-xl mb-1 font-serif">Maharishi Vidya Mandir Dangoh Khas, Himachal Pradesh{' '}<a href="https://www.google.com/maps/place/Maharishi+Vidya+Mandir+-+Daulatpur+Chowk/@31.7748009,74.8779867,8z/data=!4m10!1m2!2m1!1smahrishi+vidya!3m6!1s0x391b174c1d5c1903:0xb8f3e620dfcba569!8m2!3d31.7748009!4d75.9985922!15sCg9tYWhhcmlzaGkgdmlkeWEiA4gBAZIBBnNjaG9vbOABAA!16s%2Fg%2F11j26x7rp3?entry=ttu" target="_blank" rel="noopener noreferrer">
                    <AiOutlineEnvironment className='text-2xl' />
                  </a></p>
                  <p className="text-xl mb-4  text-black">Percentage: 80.6% (10th class)</p>
                </div>
                <div><br />
                  <p className="mb-1 text-xl font-serif  text-black">ST.D.R Public Sen. Sec School, Gagret, Himachal Pradesh{' '}
                    <a href="https://www.google.com/maps/place/St+D.+R.+Public+Senior+Secondary+School/@31.6652076,76.0537174,17z/data=!3m1!4b1!4m6!3m5!1s0x391b1f30adcf891f:0x236e1e073e3c4f5!8m2!3d31.6652076!4d76.056287!16s%2Fg%2F11bwn7x6pz?entry=ttu" target="_blank" rel="noopener noreferrer">
                      <AiOutlineEnvironment className='text-2xl' />
                    </a></p>
                  <p className=" text-xl mb-4  text-black">Percentage: 86.8% (12th class)</p>
                </div>
              </div>
              <div className='px-2 text-xl '>
                <h2 className="text-lg text-red-400 font-bold ">College:</h2><br />
                <div className=' text-black  '>
                  <p className="mb-1 font-serif">
                    SRM Institute of Science and Technology, Kattankulathur, Chennai{' '}
                    <a href="https://maps.google.com/maps?q=R2FV+6Q7, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203" target="_blank" rel="noopener noreferrer">
                      <AiOutlineEnvironment className='text-2xl' />
                    </a>
                  </p>      <p className="mb-1">B.Tech in CSE-CORE</p>
                  <p className="mb-1">Currently in : 3rd year, 5th semester</p>
                  <p><b>CGPA</b>: 9.41 </p>
                  <p><b>Student Club</b> : Next Tech Lab</p>

                </div>
              </div>
            </div>




            <div>
              <h1 className="  text-teal-500  text-3xl font-bold mb-6 py-5 ">HOBBIES AND INTRESTS:</h1>
              <ul className=" text-xl grid grid-cols-2 gap-4  text-black">
                <li>Cricket</li>
                <li>Kabbaddi</li>
                <li>Coding</li>
                <li>Music-Listening</li>
                <li>writing</li>
                <li>Badminton</li>
                <li>Gyming</li>
              </ul>


            </div>
            <div>
              <h1 className="text-teal-500 text-4xl font-bold mb-6 py-10 pb-4">Languages known:</h1>
              <ul className=" text-xl grid grid-cols-2 gap-4  text-black">
                <li>Pahadi</li>
                <li>Hindi</li>
                <li>Punjabi</li>
                <li>English</li>
                <li>Korean</li>
              </ul>
            </div>
          </div>


        </div>
      </section>

      <section>
        <div className=''>

          <h3 className='text-center text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text py-14 px-8 '>
            CERTIFICATIONS AND ACHIEVEMENTS</h3>
        </div>

        <div className="flex justify-center items-center  text-black">
          <h3 className='text-2xl py-5 font-serif text-center '>
            I have successfully completed certifications in various fields including Python, React frontend development, version control, and have actively participated in hackathons. These certifications have equipped me with the necessary skills and knowledge to excel in software development, allowing me to contribute effectively to projects and stay up-to-date with the latest industry trends.</h3>

        </div>
        <div className="bg-white  text-center rounded-2xl shadow-lg p-9  dark:bg-gray-600">

          <h2 className="text-2xl font-semibold mb-4  text-black">My Certifications</h2>
          <a href="https://drive.google.com/drive/folders/1PRkEv05NU9Cvp7TLeLw7wiGZocp274ZG" target="_blank" rel="noopener noreferrer" className="text-teal-500 underline text-xl">View Certificates</a>
        </div>


      </section>


      <section>
        <div>

          <h3 className='text-center text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text py-14 px-8 '>CONTACT ME</h3>
        </div>
        <div>
          <p className='text-xl text-center bg-slate-500'>Developer: PARNISH SHARMA<br />
            E-mail: parnishs7@gmail.com<br />
          </p>
        </div>
        <div className='flex justify-center py-1 text-slate-900 text-5xl gap-8'>
  <a href="https://www.instagram.com/parnish_sharma/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
    <AiFillInstagram />
  </a>
  <a href="https://www.linkedin.com/in/parnish-sharma-63911921b/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
    <AiFillLinkedin />
  </a>
  <a href="https://github.com/ParnishSharma" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
    <AiFillGithub />
  </a>
</div>

      </section>
    </main>
    </div>
  )
}