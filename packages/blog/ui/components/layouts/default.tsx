import HomeImage from "@/public/assets/images/home.jpg";
import { BgImageLayout } from "@/ui/parts/layouts/bg-image-layout";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <BgImageLayout src={HomeImage.src}>{children}</BgImageLayout>;
};
