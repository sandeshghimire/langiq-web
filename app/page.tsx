import { ProductChooser } from "@/components/product-chooser";

export const metadata = {
  title: "SoCcentric — IV&V, HIL & Datalogger for embedded validation",
  description:
    "Validate every part of your board — and walk into the audit with the records to prove it. Independent V&V, hardware-in-the-loop with bit-level fault injection, and field capture that replays as a HIL stimulus. One platform across six embedded silicon families. No source-code access required.",
};

export default function Home() {
  return <ProductChooser />;
}

