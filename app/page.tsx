import Banner from "./components/banners/Banner";
import SmallerBanners from "./components/banners/SmallerBanners";

export default function Home() {
  return (
    <main className="root-container">
      <Banner />
      <SmallerBanners />
    </main>
  );
}
