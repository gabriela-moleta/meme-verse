import Header from './components/header';
import HeroSection from './components/heroSection';
import Footer from './components/footer';
import CategoriesSection from './components/categoriesSection';
import MemeCard from './components/memeCard';
import SideBar from './components/sidebar';
import InteractionBar from './components/interactionBar';


export default function Home() {
  return (
    <div>
      <Header />

    <HeroSection />

    <CategoriesSection />

    <MemeCard />

    <SideBar />

    <InteractionBar />

    <Footer />
    

    </div>
  );
}