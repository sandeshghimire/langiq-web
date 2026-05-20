import { ProductChooser } from "@/components/product-chooser";

export const metadata = {
  title: "SoCcentric — IV&V & HIL Platforms",
  description:
    "SoCcentric builds silicon-native test platforms: IV&V for autonomous evidence-generating validation, and HIL for modular hardware-in-the-loop testing.",
};

export default function Home() {
  return <ProductChooser />;
}

