import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function CTA() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="relative overflow-hidden rounded-[40px] bg-[var(--color-ivory)] border border-gray-200 p-10 md:p-16 text-center">


          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 text-sm text-[var(--color-charcoal)]">
              Start Your Journey
            </span>

            <h2
              className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Siap Mengubah Belajar
              <br />
              Menjadi <span className="text-[var(--color-blue)]">Karya Nyata?</span>
            </h2>

            <p
              className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Belajar dengan roadmap yang jelas, bangun project nyata,
              dan kumpulkan portofolio yang siap membuka peluang baru.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <PrimaryButton>
                Mulai Perjalanan Belajarmu
              </PrimaryButton>

              <SecondaryButton>
                Lihat Learning Path
              </SecondaryButton>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Bergabung dengan 5.000+ learner yang sedang membangun skill dan portofolionya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}