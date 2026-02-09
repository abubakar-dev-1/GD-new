import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import PopularArticles from "@/components/sections/PopularArticles";
import DiscoverBlogs from "@/components/blog/DiscoverBlogs";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />
      <BlogHeroSection />
      <PopularArticles />
      <DiscoverBlogs />
      <Footer />
    </div>
  );
}
