import HomeCatalog from "./COMPONENT/home_catalog";
import HomeSlider from "./COMPONENT/home-slider";

export default function Home() {
  return (
    <main className="bg-white pb-12">
      <HomeSlider />
      <HomeCatalog />
    </main>
  );
}