import HomeSlider from "./COMPONENT/home-slider";
import CategoryTabs from "./COMPONENT/category-tabs";

export default function Home() {
  return (
    <main className="bg-white pb-12">
      <HomeSlider />
      <CategoryTabs />
    </main>
  );
}
