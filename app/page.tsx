import { ProductChooser } from "@/components/product-chooser";

export const metadata = {
  title: "Siliconcentric — IV&V, HIL & Datalogger Platforms",
  description:
    "Siliconcentric builds silicon-native test platforms: IV&V for autonomous evidence-generating validation, HIL for modular hardware-in-the-loop testing, and Datalogger for multi-channel FPGA-accurate data acquisition.",
};

export default function Home() {
  return <ProductChooser />;
}

