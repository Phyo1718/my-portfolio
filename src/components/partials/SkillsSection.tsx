import ProgressBar from '@/components/shared/ProgressBar';
import SectionTitle from '@/components/shared/SectionTitle';
import DotBg from '@/components/partials/DotBg';
import { FiUsers, FiTarget, FiTrendingUp, FiMessageCircle, FiLayers, FiZap } from 'react-icons/fi';
import { HiLightBulb } from 'react-icons/hi';

const Skills = () => {
  return (
    <>
      <SectionTitle>Skills</SectionTitle>
      <div className='py-10 space-y-10'>
        {/* Security Skills */}
        <div className='rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700'>
          <div className='relative mb-7'>
            <DotBg className='absolute bottom-2 h-6 w-6 fill-current' />
            <h4 className='pl-3 text-[22px] font-semibold dark:text-white'>
                Cybersecurity & Ethical Hacking
            </h4>
          </div>
          {/* <div className='grid grid-cols-2 gap-x-6 gap-y-4'> */}
          <div className='grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6'>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>Penetration Testing</h6>
              </div>
              <ProgressBar color='blue' progress={90} />
            </div>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>Web Security</h6>
              </div>
              <ProgressBar color='amber' progress={85} />
            </div>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>Network Security</h6>
              </div>
              <ProgressBar color='rose' progress={75} />
            </div>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>Incident Response</h6>
              </div>
              <ProgressBar color='amber' progress={75} />
            </div>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>Cryptography</h6>
              </div>
              <ProgressBar color='rose' progress={90} />
            </div>
          </div>
        </div>

        {/* Programming Skills */}
        <div className='rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700'>
          <div className='relative mb-7'>
            <DotBg className='absolute bottom-2 h-6 w-6 fill-current' />
            <h4 className='pl-3 text-[22px] font-semibold dark:text-white'>
                Software Development
            </h4>
          </div>
          {/* <div className='grid grid-cols-2 gap-x-6 gap-y-4'> */}
          <div className='grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6'>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>Python, Django</h6>
              </div>
              <ProgressBar color='blue' progress={90} />
            </div>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>C++</h6>
              </div>
              <ProgressBar color='amber' progress={80} />
            </div>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>Java</h6>
              </div>
              <ProgressBar color='rose' progress={80} />
            </div>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>HTML, CSS, Javascript</h6>
              </div>
              <ProgressBar color='amber' progress={80} />
            </div>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>MySQL, PostgreSQL</h6>
              </div>
              <ProgressBar color='rose' progress={80} />
            </div>
            <div>
              <div className='mb-3 flex justify-between'>
                <h6 className='font-semibold'>Version Control (Git)</h6>
              </div>
              <ProgressBar color='blue' progress={80} />
            </div>
          </div>
        </div>

        {/* Professional Attributes */}
        <div className='rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700'>
          <div className='relative mb-7'>
            <DotBg className='absolute bottom-2 h-6 w-6 fill-current' />
            <h4 className='pl-3 text-[22px] font-semibold dark:text-white'>
                Soft Skills & Collaboration
            </h4>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6'>
            <div className='flex items-center space-x-3'>
                <FiUsers size={25} className='text-primary-500' />
                <span className='text-lg font-semibold'>Teamwork</span>
            </div>
            <div className='flex items-center space-x-3'>
                <FiTarget size={25} className='text-primary-500' />
                <span className='text-lg font-semibold'>Problem-Solving</span>
            </div>
            <div className='flex items-center space-x-3'>
                <FiTrendingUp size={25} className='text-primary-500' />
                <span className='text-lg font-semibold'>Adaptability</span>
            </div>
            <div className='flex items-center space-x-3'>
                <FiMessageCircle size={25} className='text-primary-500' />
                <span className='text-lg font-semibold'>Communication</span>
            </div>
            <div className='flex items-center space-x-3'>
                <FiLayers size={25} className='text-primary-500' />
                <span className='text-lg font-semibold'>Collaboration</span>
            </div>
            <div className='flex items-center space-x-3'>
                <HiLightBulb size={25} className='text-primary-500' />
                <span className='text-lg font-semibold'>Creativity</span>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Skills;