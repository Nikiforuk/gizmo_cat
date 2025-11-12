import Category from './components/ui/Category';
import DiscountProducts from './components/ui/DiscountProducts';
import FirstBanner from './components/ui/FirstBanner';
import Popular from './components/ui/Popular';
import Products from './components/ui/Products';
import SecondBanner from './components/ui/SecondBanner';
import SmallerBanners from './components/ui/SmallerBanners';

export default function Home() {
  return (
    <main className="root-container">
      <FirstBanner />
      <SmallerBanners />
      <Category />
      <Products />
      <Popular />
      <DiscountProducts />
      <SecondBanner />
    </main>
  );
}
