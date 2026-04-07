// import { useRouter } from 'next/router';

import Footer from '@/components/footer';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import Hero from '@/components/pages/homepage/hero';
import Highlights from '@/components/pages/homepage/highlights';
import HomeAbout from '@/components/pages/homepage/home-about';
import HomeBlogSection from '@/components/pages/homepage/home-blog-section';
import HomeContact from '@/components/pages/homepage/home-contact';
import HomeCTA from '@/components/pages/homepage/home-cta';
import HomeIntro from '@/components/pages/homepage/home-intro';
import HomeServices from '@/components/pages/homepage/home-services';
import HomeWeServe from '@/components/pages/homepage/home-we-serve';
import Stats from '@/components/pages/homepage/stats';
import Testimonials from '@/components/pages/homepage/testimonials';
import { Main } from '@/components/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Medical Record Review Company USA | Legal Outsourcing Services"
          description="Medico Legal Request LLC has a dedicated team of experienced MDs, nurse consultants, medical professionals, and efficient Medico-legal staff who endeavor to provide highly cost-effective medical records review services with a rapid turnaround time. With our legal outsourcing services"
        />
      }
    >
      <Navbar />
      <Hero />
      <HomeIntro />
      <Highlights bgColor="bg-gray-50" />
      <HomeAbout />
      <HomeServices />
      <HomeContact />
      <HomeWeServe />
      <Testimonials />
      <Stats />
      <HomeCTA />
      <HomeBlogSection />
      <Footer />
    </Main>
  );
};

export default Index;
