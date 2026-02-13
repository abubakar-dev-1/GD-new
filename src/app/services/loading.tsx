import {
  Skeleton,
  SkeletonSectionHeader,
  SkeletonServiceCard,
  SkeletonTestimonialCard,
} from "@/components/ui/Skeleton";

export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <div className="w-full h-[80px]" />

      {/* Hero */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[16px] items-center text-center w-full max-w-[1440px]">
          <Skeleton className="h-[48px] lg:h-[72px] w-[200px] lg:w-[400px]" />
          <Skeleton className="h-[16px] w-[280px] lg:w-[500px]" />
        </div>
      </section>

      {/* Services Grid */}
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

      {/* Booking */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <Skeleton className="w-full max-w-[1440px] h-[300px] lg:h-[400px] rounded-[28px]" />
      </section>
    </div>
  );
}
