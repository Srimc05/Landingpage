import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row bg-blue-50'>
        <div className='p-6 m-6 lg:p-10 lg:m-12 flex-1 mt-5'>
          <p className='text-lg text-[#553cdf] flex items-center'>
            <Lightbulb className="mr-2" /> Gateway to Lifelong Learning
          </p>
          <h1 className='text-3xl md:text-5xl lg:text-6xl text-[#221859] font-medium mt-4'>
            Unlocking Your Potential <span className='font-normal'>with Online Learning</span>
          </h1>
          <p className='text-gray-700 text-base md:text-lg mt-9'>
            Discover a world of knowledge and opportunities with our online education platform to pursue a new career.
          </p>
          
          <div className='flex flex-col md:flex-row justify-start items-center mt-10 gap-8 md:gap-16'>
            <button className='bg-[#553CDF] text-base md:text-lg py-3 px-4 text-white flex items-center justify-center lg:inline-flex rounded-md border border-[#553CDF] hover:bg-white hover:text-[#553CDF]'>
              View all courses <ArrowRight className='ml-2' />
            </button>
            <div className='flex items-center mt-4 md:mt-0'>
              <div className='flex -space-x-4'>
                <img src="https://ik.imagekit.io/sri05/07.png?updatedAt=1722135496966" alt="Student" className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white' />
                <img src="https://ik.imagekit.io/sri05/07.png?updatedAt=1722135496966" alt="Student" className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white' />
                <img src="https://ik.imagekit.io/sri05/07.png?updatedAt=1722135496966" alt="Student" className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white' />
              </div>
              <div className='ml-4'>
                <p className='text-xl md:text-2xl text-[#221859]'>2k students</p>
                <p className='text-base md:text-lg text-gray-700'>Join our online class</p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex items-center justify-center lg:justify-start'>
          <img src="https://ik.imagekit.io/sri05/banner-shape02.svg?updatedAt=1722135497078" alt="Shape 1" className='hidden lg:block w-10 mb-52' />
          <img src="https://ik.imagekit.io/sri05/01.png?updatedAt=1722135234589" alt="Background" className='w-full h-full object-cover' />
          <img src="https://ik.imagekit.io/sri05/banner-shape02.svg?updatedAt=1722135497078" alt="Shape 2" className='hidden lg:block w-10 mb-52' />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
