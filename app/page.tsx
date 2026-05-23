import { ProductChooser } from "@/components/product-chooser";

export const metadata = {
  title: "siliconcentric — IV&V, HIL & Datalogger Platforms",
  description:
    "siliconcentric builds silicon-native test platforms: IV&V for autonomous evidence-generating validation, HIL for modular hardware-in-the-loop testing, and Datalogger for multi-channel FPGA-accurate data acquisition.",
};

export default function Home() {
  return <ProductChooser />;
}

