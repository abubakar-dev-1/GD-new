/** Reusable skeleton building blocks for loading states */

interface SkeletonProps {
  className?: string;
}

/** Base animated skeleton block */
export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-[8px] bg-[#1a1a1a] ${className}`}
    />
  );
}

/** Single line of text */
export function SkeletonText({ className = "" }: SkeletonProps) {
  return <Skeleton className={`h-[16px] ${className}`} />;
}

/** Heading text (larger) */
export function SkeletonHeading({ className = "" }: SkeletonProps) {
  return <Skeleton className={`h-[40px] lg:h-[58px] ${className}`} />;
}

/** Image / media placeholder */
export function SkeletonImage({ className = "" }: SkeletonProps) {
  return <Skeleton className={`rounded-[20px] ${className}`} />;
}

/** Generic card skeleton with image + text lines */
export function SkeletonCard({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`flex flex-col gap-[16px] bg-[#191919] rounded-[28px] p-[16px] lg:p-[24px] ${className}`}
    >
      <Skeleton className="w-full aspect-[146/83] rounded-[16px]" />
      <div className="flex flex-col gap-[8px] px-[4px]">
        <Skeleton className="h-[24px] w-[70%]" />
        <SkeletonText className="w-full" />
        <SkeletonText className="w-[85%]" />
        <div className="flex gap-[8px] mt-[8px]">
          <Skeleton className="h-[28px] w-[64px] rounded-[20px]" />
          <Skeleton className="h-[28px] w-[56px] rounded-[20px]" />
        </div>
      </div>
    </div>
  );
}

/** Section header skeleton (title + description) */
export function SkeletonSectionHeader({
  className = "",
  centered = false,
}: SkeletonProps & { centered?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-[16px] ${centered ? "items-center" : "items-start"} ${className}`}
    >
      <Skeleton className="h-[40px] lg:h-[58px] w-[280px] lg:w-[400px]" />
      <SkeletonText className="w-[240px] lg:w-[450px]" />
      {!centered && <SkeletonText className="w-[200px] lg:w-[350px]" />}
    </div>
  );
}

/** Hero banner skeleton */
export function SkeletonHero({ className = "" }: SkeletonProps) {
  return (
    <section
      className={`w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] ${className}`}
      style={{ backgroundColor: "#000" }}
    >
      <div className="w-full max-w-[1440px]">
        <Skeleton className="w-full h-[500px] lg:h-[465px] rounded-[28px]" />
      </div>
    </section>
  );
}

/** Product feature card skeleton */
export function SkeletonFeatureCard({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`flex flex-col justify-center gap-[64px] lg:flex-row lg:items-center lg:gap-[38px] bg-[#191919] rounded-[28px] p-[24px] h-[272px] lg:h-auto ${className}`}
    >
      <Skeleton className="shrink-0 w-[48px] h-[48px] rounded-[12px]" />
      <div className="flex flex-col gap-[8px] flex-1">
        <Skeleton className="h-[24px] w-[60%]" />
        <SkeletonText className="w-full" />
        <SkeletonText className="w-[80%]" />
      </div>
    </div>
  );
}

/** Article card skeleton (horizontal layout) */
export function SkeletonArticleCard({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`flex flex-col md:flex-row bg-[#191919] rounded-[28px] p-[24px] gap-[16px] md:gap-[48px] ${className}`}
    >
      <Skeleton className="w-full md:w-[370px] aspect-[133/94] rounded-[20px] shrink-0" />
      <div className="flex flex-col gap-[12px] flex-1 justify-center">
        <div className="flex gap-[8px]">
          <Skeleton className="h-[28px] w-[64px] rounded-[20px]" />
          <Skeleton className="h-[28px] w-[80px] rounded-[20px]" />
        </div>
        <Skeleton className="h-[28px] w-[80%]" />
        <SkeletonText className="w-full" />
        <SkeletonText className="w-[90%]" />
      </div>
    </div>
  );
}

/** Testimonial card skeleton */
export function SkeletonTestimonialCard({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`flex flex-col gap-[24px] bg-[#191919] rounded-[28px] p-[32px] w-full lg:w-[450px] shrink-0 ${className}`}
    >
      <Skeleton className="h-[40px] w-[100px]" />
      <div className="flex gap-[4px]">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-[20px] h-[20px] rounded-[4px]" />
        ))}
      </div>
      <div className="flex flex-col gap-[8px]">
        <SkeletonText className="w-full" />
        <SkeletonText className="w-full" />
        <SkeletonText className="w-[70%]" />
      </div>
      <div className="flex items-center gap-[12px]">
        <Skeleton className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col gap-[6px]">
          <Skeleton className="h-[16px] w-[120px]" />
          <Skeleton className="h-[14px] w-[80px]" />
        </div>
      </div>
    </div>
  );
}

/** Service card skeleton matching the OurServices grid pattern */
export function SkeletonServiceCard({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`relative bg-[#191919] rounded-[28px] p-[20px] lg:p-[32px] overflow-hidden h-[280px] lg:h-full ${className}`}
    >
      <div className="flex flex-col justify-end h-full gap-[12px]">
        <Skeleton className="w-[40px] h-[40px] rounded-[8px]" />
        <Skeleton className="h-[24px] w-[70%]" />
        <SkeletonText className="w-full" />
        <SkeletonText className="w-[85%]" />
      </div>
    </div>
  );
}

/** Full-width product card skeleton */
export function SkeletonProductCard({ className = "" }: SkeletonProps) {
  return (
    <div className={className}>
      {/* Mobile */}
      <div className="lg:hidden">
        <Skeleton className="w-full h-[420px] rounded-[28px]" />
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <Skeleton className="w-full h-[465px] rounded-[28px]" />
      </div>
    </div>
  );
}

/** Team member card skeleton */
export function SkeletonTeamCard({ className = "" }: SkeletonProps) {
  return (
    <div className={`flex flex-col gap-[16px] ${className}`}>
      <Skeleton className="w-full aspect-square rounded-[20px]" />
      <div className="flex flex-col gap-[6px]">
        <Skeleton className="h-[24px] w-[70%]" />
        <Skeleton className="h-[16px] w-[50%]" />
      </div>
    </div>
  );
}

/** Overview text card skeleton */
export function SkeletonOverviewCard({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`shrink-0 w-[360px] bg-[#191919] rounded-[28px] p-[32px] flex flex-col gap-[32px] ${className}`}
    >
      <Skeleton className="w-[32px] h-[32px] rounded-[8px]" />
      <div className="flex flex-col gap-[8px]">
        <SkeletonText className="w-full" />
        <SkeletonText className="w-full" />
        <SkeletonText className="w-[70%]" />
      </div>
    </div>
  );
}

/* ===== Section-level skeletons (used as Suspense fallbacks) ===== */

/** Projects grid section skeleton */
export function SkeletonProjectsSection() {
  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
      <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
        <SkeletonSectionHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[24px]">
          {[...Array(4)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Services grid section skeleton */
export function SkeletonServicesSection() {
  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
      <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
        <SkeletonSectionHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
          {[...Array(6)].map((_, i) => (
            <SkeletonServiceCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Featured products section skeleton */
export function SkeletonProductsSection() {
  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
      <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
        <SkeletonSectionHeader />
        <div className="flex flex-col gap-[24px] lg:gap-[32px]">
          {[...Array(2)].map((_, i) => (
            <SkeletonProductCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Articles section skeleton */
export function SkeletonArticlesSection() {
  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
      <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
        <SkeletonSectionHeader />
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          {[...Array(3)].map((_, i) => (
            <SkeletonArticleCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Blog discover grid section skeleton */
export function SkeletonBlogGridSection() {
  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
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
  );
}

/** Projects listing section skeleton (2-col grid) */
export function SkeletonProjectsListingSection() {
  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
      <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
        <SkeletonSectionHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[24px]">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Product detail body skeleton (hero + features + showcase + highlights + overview) */
export function SkeletonProductDetailBody() {
  return (
    <>
      <SkeletonHero />
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
          <SkeletonSectionHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
            {[...Array(4)].map((_, i) => (
              <SkeletonFeatureCard key={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
        <Skeleton className="w-full max-w-[1440px] h-[300px] lg:h-[500px] rounded-[28px]" />
      </section>
    </>
  );
}

/** Service detail body skeleton (hero + process + related) */
export function SkeletonServiceDetailBody() {
  return (
    <>
      <SkeletonHero />
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
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
    </>
  );
}

/** Related projects grid skeleton (3-col) */
export function SkeletonRelatedProjectsSection() {
  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
      <div className="flex flex-col gap-[32px] w-full max-w-[1440px]">
        <SkeletonSectionHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
          {[...Array(3)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Project detail body skeleton */
export function SkeletonProjectDetailBody() {
  return (
    <>
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
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
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
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
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
        <Skeleton className="w-full max-w-[1280px] h-[250px] lg:h-[450px] rounded-[28px]" />
      </section>
    </>
  );
}

/** Blog post body skeleton (header + content + related) */
export function SkeletonBlogPostBody() {
  return (
    <>
      <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
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
      <section className="w-full flex justify-center pb-[40px] lg:pb-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
        <div className="flex flex-col gap-[24px] w-full max-w-[720px]">
          <SkeletonText className="w-full" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-[90%]" />
          <Skeleton className="h-[32px] w-[50%] mt-[16px]" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-[85%]" />
        </div>
      </section>
    </>
  );
}

/** Booking section skeleton */
export function SkeletonBookingSection() {
  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px] bg-[#000]">
      <Skeleton className="w-full max-w-[1440px] h-[300px] lg:h-[400px] rounded-[28px]" />
    </section>
  );
}
