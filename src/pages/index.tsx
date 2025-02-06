import AboutSection from '@/components/partials/AboutSection';
import SkillsSection from '@/components/partials/SkillsSection';
import BlogSection from '@/components/partials/BlogSection';
import ContactSection from '@/components/partials/ContactSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import ServiceSection from '@/components/partials/ServiceSection';
import TestimonialSection from '@/components/partials/TestimonialSection';
import AppLayout from '@/layouts/AppLayout';
import { api } from '@/lib/api';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// type Props = {
//   experiences: ;
// }

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., #about)
    if (router.asPath.includes('#')) {
      // Extract the hash from the URL
      const hash = router.asPath.split('#')[1];
      
      // Find the element with the ID matching the hash and scroll to it
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',  // Scroll smoothly
          block: 'start',      // Align at the start of the section
        });
      }
    }
  }, [router.asPath]);
  
  return (
    <AppLayout title="">
      <HeroSection />
      <section id="about" className="container pt-20 pb-3">
        <AboutSection />
      </section>
      <section id="skills" className="container pt-20 pb-3">
        <SkillsSection />
      </section>
      <section id="education" className="container pt-20 pb-14">
        <ExperienceSection />
      </section>
      {/* <section className="container py-16">
        <ServiceSection />
      </section> */}
      <section id="projects" className="container pt-20 pb-14">
        <RecentWorkSection />
      </section>
      {/* <section className="container py-16">
        <TestimonialSection />
      </section>
      <section className="container py-16">
        <BlogSection />
      </section> */}
      <section id="contact" className="container pt-20 pb-14">
        <ContactSection />
      </section>
    </AppLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({}) => {
//   const getExperiences = api.get('/experiences').then((res) => res.data.data);
//   const getEducations = api.get('/educations').then((res) => res.data.data);
//   const profile = api.get('/profile').then((res) => res.data.data);
//   const result = await Promise.all([getExperiences, getEducations, profile]);
//   return {
//     props: {
//       experiences: result[0],
//       educations: result[1],
//       profile: result[2],
//     },
//   };
// };

export default Home;
