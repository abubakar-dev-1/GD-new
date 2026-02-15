import {
  Skeleton,
  SkeletonText,
  SkeletonHero,
  SkeletonSectionHeader,
  SkeletonFeatureCard,
  SkeletonArticleCard,
  SkeletonTestimonialCard,
  SkeletonOverviewCard,
} from "@/components/ui/Skeleton";

export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Navbar */}
      <div className="w-full h-[80px]" />

      {/* Hero */}
      <SkeletonHero />

      {/* Features */}
      <section className="w-full flex justify-center py-[40px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] w-full max-w-[1280px]">
          <SkeletonSectionHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {[...Array(4)].map((_, i) => (
              <SkeletonFeatureCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[48px] lg:gap-[80px] items-center w-full max-w-[1280px]">
          <SkeletonSectionHeader centered />
          <Skeleton className="w-full aspect-[2880/1488] rounded-[28px]" />
        </div>
      </section>

      {/* Highlights */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[24px] lg:gap-[80px] items-center w-full max-w-[1280px]">
          <SkeletonSectionHeader centered />
          <div className="flex flex-col lg:flex-row gap-[32px] w-full">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-[32px] bg-[#191919] rounded-[28px] p-[24px] w-full lg:flex-1"
              >
                <Skeleton className="w-full aspect-[2880/2048] rounded-[16px]" />
                <div className="flex flex-col gap-[16px]">
                  <Skeleton className="h-[24px] w-[70%]" />
                  <SkeletonText className="w-full" />
                  <SkeletonText className="w-[90%]" />
                  <SkeletonText className="w-[80%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] items-center w-full max-w-[1280px]">
          <SkeletonSectionHeader centered />
          <div className="flex gap-[16px] w-full overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <SkeletonOverviewCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <Skeleton className="w-full max-w-[1440px] h-[300px] lg:h-[400px] rounded-[28px]" />
      </section>

      {/* Testimonials */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] items-center w-full max-w-[1440px]">
          <SkeletonSectionHeader centered />
          <div className="flex gap-[32px] w-full overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <SkeletonTestimonialCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
          <SkeletonSectionHeader />
          <div className="flex flex-col gap-[16px] md:gap-[24px]">
            {[...Array(3)].map((_, i) => (
              <SkeletonArticleCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
