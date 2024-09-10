import { Footer } from '@/components/molecules/Footer/Footer';
import CustomerReviews from '@/components/organisms/CustomerReviews';
import Hero from '@/components/organisms/Home/Hero';
import HomeFeatures from '@/components/organisms/Home/HomeFeatures';
import Integrations from '@/components/organisms/Integrations';
import Partners from '@/components/organisms/Partners/Partners';
import UseCase from '@/components/organisms/UseCase';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <HomeFeatures />
      <Integrations />
      <UseCase />
      <CustomerReviews />
      <Footer />
    </>
  );
}
