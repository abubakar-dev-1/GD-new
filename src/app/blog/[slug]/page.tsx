import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import PopularArticles from "@/components/sections/PopularArticles";

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />
      <BlogPostHeader />
      <BlogPostContent />
      <PopularArticles title="Related Articles" />
      <Footer />
    </div>
  );
}
