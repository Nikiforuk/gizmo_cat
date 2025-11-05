import Banner from "./components/banners/Banner";
import Banner2 from "./components/banners/Banner2";
import FeaturedBanners from "./components/banners/FeaturedBanners";
import SmallerBanners from "./components/banners/SmallerBanners";
import Category from "./components/categories/Category";
import DiscountProducts from "./components/products/DiscountProducts";
import Products from "./components/products/Products";

export default function Home() {
  return (
    <main className="root-container">
      <Banner />
      <SmallerBanners />
      <Category />
      <Products />
      <FeaturedBanners />
      <DiscountProducts />
      <Banner2 />
    </main>
  );
}
