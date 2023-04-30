import React from 'react';
import Navbar from '@/Components/Navbar';
import aboutimg from '../public/vertechx-about.png';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import FeaturedEvents from '@/Components/FeaturedEvents';
import MainLayout from '@/Components/MainLayout';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const Home = () => {
  return (
    <>
      <Head>
        <title>VertechX - Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='TECH IN MOMENTUM' />
        <meta name='keywords' content='TECH IN MOMENTUM' />
        <meta
          property='og:image'
          content='https://vertechx.vercel.app/public/logo.svg'
        />
      </Head>
      <MainLayout>
        <main className='flex flex-col items-center w-full h-screen px-4 md:px-32 '>
          <header className='flex flex-col w-full h-screen justify-center items-center shrink-0 relative'>
            <div className='w-full h-1/2 blur-lg bg-black absolute opacity-10 top-50 z-[-1] rounded-full'></div>
            <h1 className='bg-clip-text drop-shadow-sm text-transparent text-center self-center font-space text-6xl md:text-8xl lg:text-9xl font-extrabold  bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 cursor-pointer '>
              TECH IN MOMENTUM
            </h1>
            <p className='text-white text-center self-center drop-shadow-md  font-space text-xl md:text-2xl lg:text-2xl font-regular  bg-gradient-to-r cursor-pointer '>
              Experience the future at VertechX: The ultimate annual tech fest
              where students flaunt their skills in robotics, AI, ML, and
              cybersecurity and more!
            </p>
          </header>

          <section className='h-screen shrink-0'>
            <div className='flex flex-col md:flex-row md:gap-10 items-center justify-center  w-full '>
              <span className='text-slate-300 text-2xl md:text-7xl font-semibold font-space'>
                PRESENTING
              </span>
              <span className='bg-clip-text text-transparent text-6xl md:text-7xl font-bold font-space bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'>
                VERTECHX
              </span>
            </div>
            <article className='flex items-center justify-center mt-6 overflow-x-auto'>
              <div className='flex flex-col lg:flex-row items-center justify-center max-w-screen w-full gap-10 bg-white bg-opacity-10 backdrop-blur-md border h-full border-gray-700 rounded-lg p-4 md:p-6 '>
                <div className='basis-3/5'>
                  <ReactPlayer
                    playing={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                    className='w-full h-full'
                    url='https://ik.imagekit.io/vertechx/gokart.mp4'
                  />
                </div>
                <div className='flex items-center justify-center text-left basis-2/5 text-wrap md:text-xl'>
                  <span className='text-white'>
                    VertechX is an annual technical fest conducted by MVJ
                    College of Engineering in Bangalore, India. It is a platform
                    for students and tech enthusiasts from different colleges
                    and universities to showcase their technical skills and
                    knowledge. The fest includes a series of competitions,
                    workshops, and seminars in various fields of technology such
                    as robotics, artificial intelligence, machine learning, and
                    cybersecurity.
                  </span>
                </div>
              </div>
            </article>
          </section>
          <section className='max-h-screen  mb-96 shrink-0'>
            <div className='flex flex-col md:flex-row md:gap-10 items-center justify-center w-full '>
              <span className='text-white text-2xl md:text-7xl font-semibold font-space'>
                MARK YOUR CALENDARS
              </span>
              <span className='bg-clip-text w-full items-center md:items-end text-transparent flex flex-col text-6xl md:text-9xl font-bold font-space bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'>
                <span>MAY</span>
                <span>18 & 19</span>
              </span>
            </div>
          </section>
          <FeaturedEvents />
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
