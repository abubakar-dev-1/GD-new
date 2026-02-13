import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { newsletterPopupQuery } from "../../../sanity/lib/queries";
import NewsletterPopup from "./NewsletterPopup";

interface SanityNewsletterPopup {
  enabled?: boolean;
  title?: string;
  description?: string;
  successTitle?: string;
  successMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  desktopImage?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mobileImage?: any;
  delaySeconds?: number;
}

export default async function NewsletterPopupWrapper() {
  const data: SanityNewsletterPopup | null =
    await client.fetch(newsletterPopupQuery);

  // No Sanity doc yet — render with defaults
  if (!data) {
    return <NewsletterPopup />;
  }

  return (
    <NewsletterPopup
      enabled={data.enabled ?? true}
      title={data.title}
      description={data.description}
      successTitle={data.successTitle}
      successMessage={data.successMessage}
      desktopImage={
        data.desktopImage
          ? urlFor(data.desktopImage).width(400).height(400).url()
          : undefined
      }
      mobileImage={
        data.mobileImage
          ? urlFor(data.mobileImage).width(400).height(400).url()
          : undefined
      }
      delayMs={
        data.delaySeconds != null
          ? Math.round(data.delaySeconds * 1000)
          : undefined
      }
    />
  );
}
