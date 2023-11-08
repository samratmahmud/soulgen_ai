import Navbar from "@/components/global/Navbar";
import Header from "./home/Header";
import Cards from "./home/Cards";
import PictureShowcase from "./home/PictureShowcase";
import GeneratStep from "./home/GeneratStep";
import Faqs from "./home/Faqs";
import Footer from "./home/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Cards />
      <PictureShowcase />
      <GeneratStep />
      <Faqs />
      <Footer />
    </div>
  );
}
