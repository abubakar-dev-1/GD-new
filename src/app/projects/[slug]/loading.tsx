import {
  Skeleton,
  SkeletonText,
  SkeletonSectionHeader,
  SkeletonArticleCard,
  SkeletonCard,
} from "@/components/ui/Skeleton";

export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <div className="w-full h-[80px]" />

      {/* Hero */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[24px] w-full max-w-[1440px]">
          <div className="flex gap-[8px]">
            <Skeleton className="h-[28px] w-[64px] rounded-[20px]" />
            <Skeleton className="h-[28px] w-[80px] rounded-[20px]" />
          </div>
          <Skeleton className="h-[48px] lg:h-[64px] w-[70%]" />
          <SkeletonText className="w-[90%]" />
          <SkeletonText className="w-[75%]" />
          <Skeleton className="w-full h-[300px] lg:h-[580px] rounded-[28px] mt-[16px]" />
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col lg:flex-row gap-[32px] w-full max-w-[1280px]">
          <div className="flex flex-col gap-[16px] flex-1">
            <Skeleton className="h-[40px] w-[200px]" />
            <SkeletonText className="w-full" />
            <SkeletonText className="w-full" />
            <SkeletonText className="w-[85%]" />
          </div>
          <Skeleton className="w-full lg:w-[400px] h-[280px] rounded-[28px] shrink-0" />
        </div>
      </section>

      {/* Overview Image */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <Skeleton className="w-full max-w-[1280px] h-[250px] lg:h-[450px] rounded-[28px]" />
      </section>

      {/* Related Projects */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
          <SkeletonSectionHeader />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
            {[...Array(3)].map((_, i) => (
              <SkeletonCard key={i} />
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
