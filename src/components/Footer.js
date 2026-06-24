export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">

        {/* Main Footer */}
        <div className="py-20 flex flex-row items-start justify-between w-full">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div
              className="text-2xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              TmintLMS
            </div>

            <p
              className="mt-5 text-gray-600 max-w-md leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Belajar langkah demi langkah, bangun project nyata,
              dan kumpulkan portofolio yang siap membuka peluang baru.
            </p>

            <div className="flex gap-3 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)] flex items-center justify-center transition-all ease-in-out duration-300"
              >
                𝕏
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)] flex items-center justify-center transition-all ease-in-out duration-300"
              >
                in
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)] flex items-center justify-center transition-all ease-in-out duration-300"
              >
                ⌾
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)] flex items-center justify-center transition-all ease-in-out duration-300"
              >
                ▶
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-16 items-start justify-start">

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-5">
                Navigation
              </h4>

              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="#" className="hover:text-[#1EA7F2] transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#path" className="hover:text-[#1EA7F2] transition">
                    Learning Paths
                  </a>
                </li>

                <li>
                  <a href="#bootcamp" className="hover:text-[#1EA7F2] transition">
                    Bootcamp
                  </a>
                </li>

                <li>
                  <a href="#testimonials" className="hover:text-[#1EA7F2] transition">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>


            {/* Contact */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-5">
                Contact
              </h4>

              <ul className="space-y-3 text-gray-600">
                <li>hello@skilljourney.com</li>
                <li>Jakarta, Indonesia</li>
                <li>Mon - Fri</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 TmintLMS. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}