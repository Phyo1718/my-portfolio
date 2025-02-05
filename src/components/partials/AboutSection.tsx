import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-1 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Hi, I am Phyo Wai Lin. I am a Computer Science graduate with Distinction, specializing in Cyber Security and Software Development. With expertise in secure system design, web application security, and backend development, I have worked on projects ranging from penetration testing and cryptographic systems to full-stack applications. Skilled in Python, Django, C++, and cybersecurity tools, I excel in both building secure software and identifying vulnerabilities. Passionate about technology and problem-solving, I continuously refine my skills to contribute to both security and software engineering roles.
          </p>
          <a 
            href="/resume/PhyoWaiLin_Resume.pdf" 
            download="PhyoWaiLin_Resume.pdf"
            className="mt-5 inline-block bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
