import {
  Skeleton,
  SkeletonText,
  SkeletonSectionHeader,
  SkeletonArticleCard,
} from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <div className="w-full h-[80px]" />

      {/* Hero */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[16px] items-center text-center w-full max-w-[1440px]">
          <Skeleton className="h-[48px] lg:h-[72px] w-[160px] lg:w-[300px]" />
          <Skeleton className="h-[16px] w-[280px] lg:w-[500px]" />
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

      {/* Discover Blogs Grid */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
          <SkeletonSectionHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-[16px] bg-[#191919] rounded-[28px] p-[16px]"
              >
                <Skeleton className="w-full aspect-[4/2.5] rounded-[16px]" />
                <div className="flex flex-col gap-[8px] px-[4px]">
                  <Skeleton className="h-[14px] w-[100px]" />
                  <Skeleton className="h-[22px] w-[85%]" />
                  <SkeletonText className="w-full" />
                  <SkeletonText className="w-[70%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
