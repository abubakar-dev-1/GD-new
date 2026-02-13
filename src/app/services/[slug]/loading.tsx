import {
  Skeleton,
  SkeletonText,
  SkeletonHero,
  SkeletonSectionHeader,
  SkeletonCard,
} from "@/components/ui/Skeleton";

export default function ServiceDetailLoading() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <div className="w-full h-[80px]" />

      {/* Hero */}
      <SkeletonHero />

      {/* Process Steps */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[48px] w-full max-w-[1280px]">
          <SkeletonSectionHeader />
          <div className="flex flex-col gap-[32px]">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row gap-[24px] bg-[#191919] rounded-[28px] p-[32px]"
              >
                <Skeleton className="w-[48px] h-[48px] rounded-full shrink-0" />
                <div className="flex flex-col gap-[12px] flex-1">
                  <Skeleton className="h-[24px] w-[50%]" />
                  <SkeletonText className="w-full" />
                  <SkeletonText className="w-[90%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
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

      {/* CTA */}
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px] bg-[#000]">
        <Skeleton className="w-full max-w-[1440px] h-[250px] lg:h-[300px] rounded-[28px]" />
      </section>
    </div>
  );
}
