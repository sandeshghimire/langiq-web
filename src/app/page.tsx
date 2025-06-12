import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center mb-16">
          <h1 className="font-inter-bold text-4xl text-gray-800 dark:text-white mb-4">
            Font Showcase
          </h1>
          <p className="font-open-sans text-lg text-gray-600 dark:text-gray-300">
            Demonstrating Inter, Poppins, Roboto, Helvetica Neue, and Open Sans fonts
          </p>
        </header>

        {/* Inter Font Examples */}
        <section className="space-y-4">
          <h2 className="font-inter-semibold text-2xl text-gray-800 dark:text-white border-b pb-2">
            Inter Font Family
          </h2>
          <div className="grid gap-4">
            <p className="font-inter-light text-lg">Inter Light: The quick brown fox jumps over the lazy dog</p>
            <p className="font-inter-normal text-lg">Inter Regular: The quick brown fox jumps over the lazy dog</p>
            <p className="font-inter-medium text-lg">Inter Medium: The quick brown fox jumps over the lazy dog</p>
            <p className="font-inter-semibold text-lg">Inter Semibold: The quick brown fox jumps over the lazy dog</p>
            <p className="font-inter-bold text-lg">Inter Bold: The quick brown fox jumps over the lazy dog</p>
          </div>
        </section>

        {/* Poppins Font Examples */}
        <section className="space-y-4">
          <h2 className="font-poppins-semibold text-2xl text-gray-800 dark:text-white border-b pb-2">
            Poppins Font Family
          </h2>
          <div className="grid gap-4">
            <p className="font-poppins-light text-lg">Poppins Light: The quick brown fox jumps over the lazy dog</p>
            <p className="font-poppins-normal text-lg">Poppins Regular: The quick brown fox jumps over the lazy dog</p>
            <p className="font-poppins-medium text-lg">Poppins Medium: The quick brown fox jumps over the lazy dog</p>
            <p className="font-poppins-semibold text-lg">Poppins Semibold: The quick brown fox jumps over the lazy dog</p>
            <p className="font-poppins-bold text-lg">Poppins Bold: The quick brown fox jumps over the lazy dog</p>
          </div>
        </section>

        {/* Roboto Font Examples */}
        <section className="space-y-4">
          <h2 className="font-roboto-bold text-2xl text-gray-800 dark:text-white border-b pb-2">
            Roboto Font Family
          </h2>
          <div className="grid gap-4">
            <p className="font-roboto-light text-lg">Roboto Light: The quick brown fox jumps over the lazy dog</p>
            <p className="font-roboto-normal text-lg">Roboto Regular: The quick brown fox jumps over the lazy dog</p>
            <p className="font-roboto-medium text-lg">Roboto Medium: The quick brown fox jumps over the lazy dog</p>
            <p className="font-roboto-bold text-lg">Roboto Bold: The quick brown fox jumps over the lazy dog</p>
          </div>
        </section>

        {/* Open Sans Font Examples */}
        <section className="space-y-4">
          <h2 className="font-open-sans-bold text-2xl text-gray-800 dark:text-white border-b pb-2">
            Open Sans Font Family
          </h2>
          <div className="grid gap-4">
            <p className="font-open-sans-light text-lg">Open Sans Light: The quick brown fox jumps over the lazy dog</p>
            <p className="font-open-sans-normal text-lg">Open Sans Regular: The quick brown fox jumps over the lazy dog</p>
            <p className="font-open-sans-medium text-lg">Open Sans Medium: The quick brown fox jumps over the lazy dog</p>
            <p className="font-open-sans-semibold text-lg">Open Sans Semibold: The quick brown fox jumps over the lazy dog</p>
            <p className="font-open-sans-bold text-lg">Open Sans Bold: The quick brown fox jumps over the lazy dog</p>
          </div>
        </section>

        {/* Helvetica Neue Examples */}
        <section className="space-y-4">
          <h2 className="font-helvetica text-2xl font-bold text-gray-800 dark:text-white border-b pb-2">
            Helvetica Neue Font Family (System Fallback)
          </h2>
          <div className="grid gap-4">
            <p className="font-helvetica text-lg font-light">Helvetica Neue Light: The quick brown fox jumps over the lazy dog</p>
            <p className="font-helvetica text-lg font-normal">Helvetica Neue Regular: The quick brown fox jumps over the lazy dog</p>
            <p className="font-helvetica text-lg font-medium">Helvetica Neue Medium: The quick brown fox jumps over the lazy dog</p>
            <p className="font-helvetica text-lg font-semibold">Helvetica Neue Semibold: The quick brown fox jumps over the lazy dog</p>
            <p className="font-helvetica text-lg font-bold">Helvetica Neue Bold: The quick brown fox jumps over the lazy dog</p>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-4">
          <h2 className="font-inter-bold text-2xl text-gray-800 dark:text-white border-b pb-2">
            Real-world Usage Examples
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-poppins-semibold text-xl text-gray-800 dark:text-white">
                Article Title with Poppins
              </h3>
              <p className="font-open-sans text-gray-600 dark:text-gray-300 leading-relaxed">
                This is a paragraph using Open Sans font. It's highly readable and works great for body text.
                The font has excellent legibility at various sizes and is perfect for longer content.
              </p>
              <div className="font-inter text-sm text-gray-500 dark:text-gray-400">
                Posted on June 12, 2025 using Inter font
              </div>
            </div>

            <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-roboto-bold text-xl text-gray-800 dark:text-white">
                Technical Content with Roboto
              </h3>
              <p className="font-roboto text-gray-600 dark:text-gray-300 leading-relaxed">
                Roboto is excellent for technical documentation and interfaces. It maintains great readability
                while providing a modern, clean appearance that works well in digital environments.
              </p>
              <div className="font-helvetica text-sm text-gray-500 dark:text-gray-400">
                System font fallback example
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
