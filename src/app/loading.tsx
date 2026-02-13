import {
  Skeleton,
  SkeletonText,
  SkeletonCard,
  SkeletonSectionHeader,
  SkeletonArticleCard,
  SkeletonTestimonialCard,
  SkeletonServiceCard,
  SkeletonProductCard,
  SkeletonTeamCard,
} from "@/components/ui/Skeleton";

export default function HomeLoading() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      {/* Navbar placeholder */}
      <div className="w-full h-[80px]" />

      {/* Hero Section */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] items-start w-full max-w-[1440px]">
          <Skeleton className="h-[48px] lg:h-[72px] w-[300px] lg:w-[600px]" />
          <SkeletonText className="w-[250px] lg:w-[500px]" />
          <div className="flex gap-[16px]">
            <Skeleton className="h-[48px] w-[140px] rounded-[40px]" />
            <Skeleton className="h-[48px] w-[140px] rounded-[40px]" />
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="w-full flex justify-center py-[40px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex gap-[32px] lg:gap-[64px] items-center justify-center w-full max-w-[1440px]">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-[32px] w-[100px] lg:w-[140px] hidden first:block lg:block" />
          ))}
        </div>
      </section>

      {/* Our Projects */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
          <SkeletonSectionHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[24px]">
            {[...Array(4)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
          <SkeletonSectionHeader />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
            {[...Array(6)].map((_, i) => (
              <SkeletonServiceCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
          <SkeletonSectionHeader />
          <div className="flex flex-col gap-[24px] lg:gap-[32px]">
            {[...Array(2)].map((_, i) => (
              <SkeletonProductCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
          <SkeletonSectionHeader />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[32px]">
            {[...Array(3)].map((_, i) => (
              <SkeletonTeamCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
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

      {/* Booking Section */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <Skeleton className="w-full max-w-[1440px] h-[300px] lg:h-[400px] rounded-[28px]" />
      </section>
    </div>
  );
}
