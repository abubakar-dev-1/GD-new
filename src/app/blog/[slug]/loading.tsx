import {
  Skeleton,
  SkeletonText,
  SkeletonSectionHeader,
  SkeletonArticleCard,
} from "@/components/ui/Skeleton";

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <div className="w-full h-[80px]" />

      {/* Blog Post Header */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[24px] items-center w-full max-w-[880px]">
          <div className="flex gap-[8px]">
            <Skeleton className="h-[28px] w-[72px] rounded-[20px]" />
            <Skeleton className="h-[28px] w-[90px] rounded-[20px]" />
          </div>
          <Skeleton className="h-[40px] lg:h-[56px] w-[90%]" />
          <Skeleton className="h-[40px] lg:h-[56px] w-[70%]" />
          <Skeleton className="w-full aspect-[16/9] rounded-[28px] mt-[16px]" />
          <div className="flex items-center gap-[16px] w-full mt-[8px]">
            <Skeleton className="w-[40px] h-[40px] rounded-full" />
            <div className="flex flex-col gap-[4px]">
              <Skeleton className="h-[16px] w-[120px]" />
              <Skeleton className="h-[14px] w-[160px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full flex justify-center pb-[40px] lg:pb-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[24px] w-full max-w-[720px]">
          <SkeletonText className="w-full" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-[90%]" />
          <Skeleton className="h-[32px] w-[50%] mt-[16px]" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-[85%]" />
          <Skeleton className="w-full aspect-[16/9] rounded-[16px] my-[16px]" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-[75%]" />
          <Skeleton className="h-[32px] w-[40%] mt-[16px]" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-[95%]" />
          <SkeletonText className="w-[80%]" />
        </div>
      </section>

      {/* Related Articles */}
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
