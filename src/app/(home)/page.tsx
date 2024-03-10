import { Metadata } from "next";
import AboutOne from "@/components/HomeOne/AboutOne";
import BlogOne from "@/components/HomeOne/BlogOne";
import CategoryOne from "@/components/HomeOne/CategoryOne";
import Clients from "@/components/HomeOne/Clients";
import Faq from "@/components/HomeOne/Faq";
import FeaturedPackages from "@/components/HomeOne/FeaturedPackages";
import HeroThree from '@/components/HomeParallax/HeroThree';
import HeroBulletin from "@/components/HomeOne/HeroBulletin";
import PackageOne from "@/components/HomeOne/PackageOne";
import TestimonialOne from "@/components/HomeOne/TestimonialOne";
import VideoBanner from "@/components/HomeOne/VideoBannerOne";
import InstagramFeed from "@/components/layout/InstagramFeed";
import siteConfig from '@/constant/Metadata/siteConfig'


export const metadata: Metadata = {
    title: {
      default: siteConfig.name,
      template: `%s - Full-stack Developer`,
    },
    description: siteConfig.description,
  
    // added new keywords for seo
    keywords: [
      "Best travel agency of Nepal",
      "Adventure tours in Nepal",
      "Vacation packages in Nepal",
      "trekking adventures in Nepal",
      "Luxury travel in Nepal",
      "Mountain expenditions in Nepal",
      "Best food in Nepal",
      "Best local guide in Nepal",
      "top guide of Nepal",
      "family-friendly vacations in Nepal",
    ],
    authors: [
      {
        name: "Ongchen Sherpa",
        url: "fullstacksherpa.tech",
      },
    ],
    creator: "Hakkudai",
  
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
  };
  


const HomeOne = () => {
    return (
        <>
            <HeroThree />
            <HeroBulletin />
            <CategoryOne />
            <PackageOne />
            <VideoBanner />
            <div className="bg-gradient-to-t to-[#FFF1EC] from-white ">
                <Clients />
                <AboutOne />
            </div>
            <FeaturedPackages />
            <TestimonialOne />
            <Faq />
            <BlogOne />
            <InstagramFeed />
        </>
    );
}

export default HomeOne;