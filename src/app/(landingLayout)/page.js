import Banner from "@/components/LandingPages/Home/Banner";
import Categories from "@/components/LandingPages/Home/Categories";
import NewsletterBanner from "@/components/LandingPages/Home/NewsletterBanner";
import NewArrivalProducts from "@/components/LandingPages/Home/Products/NewArrivalProducts";

export const metadata = {
  title: "Home | Viscart",
  description: "This is the homepage of Viscart website.",
};

const page = async () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <NewArrivalProducts />
      <Categories />
      <NewsletterBanner />
    </div>
  );
};

export default page;
