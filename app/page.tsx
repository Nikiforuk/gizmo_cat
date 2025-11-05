import Banner from "./components/banners/Banner";
import SmallerBanners from "./components/banners/SmallerBanners";
import Category from "./components/categories/Category";
import Products from "./components/products/Products";

export default function Home() {
  return (
    <main className="root-container">
      <Banner />
      <SmallerBanners />
      <Category />
      <Products />
    </main>
  );
}
