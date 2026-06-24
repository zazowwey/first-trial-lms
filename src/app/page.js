"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Apakah program ini cocok untuk pemula?",
      answer: "Ya. Semua learning path dirancang dari dasar dan disusun langkah demi langkah sehingga pemula dapat mengikuti tanpa pengalaman sebelumnya.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu path?",
      answer: "Rata-rata 4-8 minggu tergantung jalur yang dipilih dan waktu belajar yang kamu alokasikan setiap minggu.",
    },
    {
      question: "Apakah saya akan mendapatkan sertifikat?",
      answer: "Ya. Setelah menyelesaikan seluruh materi dan final project, kamu akan mendapatkan sertifikat penyelesaian.",
    },
    {
      question: "Apakah ada mentor yang bisa membantu saat saya mengalami kesulitan?",
      answer: "Tentu. Selain AI Companion, kamu juga bisa berdiskusi dengan mentor dan komunitas untuk mendapatkan arahan saat mengalami kendala.",
    },
    {
      question: "Apakah saya bisa belajar sesuai jadwal sendiri?",
      answer: "Bisa. Sebagian besar materi bersifat fleksibel sehingga kamu dapat belajar kapan saja sesuai waktu luangmu.",
    },
    {
      question: "Apa bedanya dengan course online biasa?",
      answer: "Fokus utama kami bukan hanya belajar teori, tetapi membangun project nyata dan portfolio yang dapat digunakan untuk karier maupun freelance.",
    },
  ];

  const problems = [
    "Tidak tahu harus mulai dari mana — jalur belajar membingungkan",
    "Informasi tersebar di mana-mana — YouTube, blog, thread, tak ada ujungnya",
    "Tutorial selesai, tapi tidak bisa membuat sesuatu sendiri",
    "Tidak ada mentor saat mentok tengah malam",
    "Sudah berjam-jam belajar, tapi tidak punya portofolio yang bisa ditunjukkan",
  ];

  const solutions = [
    "Roadmap personal dibangun dari quiz minat kamu",
    "Materi dikurasi — tidak ada filler, hanya yang penting",
    "Setiap bab menghasilkan proyek nyata, bukan sekadar kuis",
    "AI Companion menjawab pertanyaan kamu, langsung di konteks belajar",
    "Selesai belajar dengan portofolio yang benar-benar dilirik rekruter",
  ];

  const steps = [
    {
      number: "01",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      ),
      title: "Ikuti Interest Quiz",
      description: "Isi kuesioner singkat untuk dapat rekomendasi course yang pas buat minatmu.",
    },
    {
      number: "02",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
          <path d="M6 3v3M12 3v3M18 3v3" />
        </svg>
      ),
      title: "Dapatkan Roadmap-mu",
      description: "Peta belajar visual berbasis proyek untuk panduan langkah demi langkah",
    },
    {
      number: "03",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" />
        </svg>
      ),
      title: "Belajar Lewat Materi",
      description: "Pelajari materi interaktif di tiap chapter sambil kumpulin XP & Gems.",
    },
    {
      number: "04",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Bangun Proyek Nyata",
      description: "Selesaikan praktis (task) di akhir chapter sebagai bentuk aksi nyatamu.",
    },
    {
      number: "05",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          <line x1="12" y1="12" x2="12" y2="16" />
          <line x1="10" y1="14" x2="14" y2="14" />
        </svg>
      ),
      title: "Dapat Feedback AI",
      description: "Evaluasi instan dari AI Reviewer untuk bantu perbaiki tugasmu secara cepat",
    },
    {
      number: "06",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7c0-1.1.9-2 2-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      ),
      title: "Lengkapi Portofoliomu",
      description: "Tuntaskan Final Project dan bawa hasil portofoliomu!",
    },
  ];

  const leftFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      ),
      title: "Jalur Belajar yang Terarah",
      description: "Mulai perjalanan dengan peta visual yang terstruktur. Fokus pada apa yang penting bagi tujuan belajarmu tanpa tersesat",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "AI Reviewer",
      description: "Tidak perlu menunggu lama. Dapatkan umpan balik otomatis di setiap akhir bab untuk tahu bagian mana yang perlu diperbaiki.",
    },
  ];

  const rightFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "AI Companion",
      description: "Punya pertanyaan teknis di tengah malam? Asisten cerdas kami selalu siap membantu kapan pun kamu menemui jalan buntu.",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: "Hasil Karya Siap Pakai",
      description: "Setiap teori langsung diterapkan menjadi sebuah proyek. Kamu akan memiliki bukti kompetensi yang nyata.",
    },
  ];

  const courses = [
    {
      title: "Membuat Landing Page ",
      level: "Beginner",
      duration: "6 Minggu",
      chapters: 7,
      xp: "4,200 XP",
      project: "Membuat landing page sederhana di webflow.",
      accent: "#B8D61D",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <circle cx="10" cy="10" r="1" />
          <circle cx="15" cy="9" r="1" />
          <circle cx="14" cy="14" r="1" />
        </svg>
      ),
    },
    {
      title: "Template Canva Sederhana",
      level: "Intermediate",
      duration: "5 Minggu",
      chapters: 6,
      xp: "3,600 XP",
      project: "Membuat template canva sederhana sesuai dengan standar profesional",
      accent: "#FACC15",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 11L20 5V19L3 13V11Z" />
          <path d="M8 13L10 18" />
        </svg>
      ),
    },
    {
      title: "5 Ilustrasi Simple",
      level: "Intermediate",
      duration: "6 Minggu",
      chapters: 7,
      xp: "3,900 XP",
      project: "Buat 5 ilustrasi sederhana di procreate. Pelajari struktur karakter dll.",
      accent: "#7DD3FC",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M9 8H15" />
          <path d="M9 12H15" />
        </svg>
      ),
    },
  ];

  const bootcamps = [
    {
      tag: "Workshop",
      date: "24 Aug",
      title: "From Figma to Live Site in a Weekend",
      location: "Lesanpuro",
      seats: "32 Kursi Kosong",
      bg: "bg-[var(--color-lime)]",
    },
    {
      tag: "Bootcamp",
      date: "02 Sep",
      title: "Intensive Frontend Developer Career Sprint",
      location: "Online",
      seats: "12 Kursi Kosong",
      bg: "bg-[var(--color-ivory)]",
    },
    {
      tag: "Meetup",
      date: "30 Aug",
      title: "Builders' Night — Project Showcase",
      location: "Sukun",
      seats: "Free Entry",
      bg: "bg-[var(--color-blue)]",
    },
  ];

  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Frontend Developer",
      avatar: "A",
      color: "bg-[#1EA7F2]",
      quote: "Dulu cuma nonton tutorial. Sekarang sudah punya 4 project nyata dan berhasil dapat klien pertama.",
    },
    {
      name: "Sarah Wijaya",
      role: "UI/UX Designer",
      avatar: "S",
      color: "bg-[#B9FF45]",
      quote: "Roadmap-nya jelas banget. Aku akhirnya bisa bikin case study yang layak masuk portfolio.",
    },
    {
      name: "Rizky Fadilah",
      role: "Digital Marketer",
      avatar: "R",
      color: "bg-[#FFD84D]",
      quote: "Yang paling membantu adalah AI Companion. Kalau stuck tinggal tanya dan langsung dapat arahan.",
    },
    {
      name: "Nadia Putri",
      role: "Freelancer",
      avatar: "N",
      color: "bg-[#FF9AD5]",
      quote: "Dalam 2 bulan aku berhasil publish website pertama dan mulai dapat project freelance.",
    },
    {
      name: "Kevin Hartono",
      role: "Product Designer",
      avatar: "K",
      color: "bg-[#8CE4FF]",
      quote: "Belajarnya terasa seperti main game. Ada challenge, progress, dan project yang nyata.",
    },
    {
      name: "Bunga Maharani",
      role: "Career Switcher",
      avatar: "B",
      color: "bg-[#CDB4FF]",
      quote: "Ini pertama kalinya aku mengikuti course sampai selesai karena semuanya terstruktur.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-20">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[120px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.1em]" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              <span className="text-gray-900">Bangun Skill dan Portofolio dalam </span>
              <span className="text-[#1EA7F2]">Satu Perjalanan</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Belajar langkah demi langkah dengan AI Companion dan ubah pengetahuan menjadi karya yang bisa dibanggakan.
            </p>

            <div className="flex flex-wrap gap-4">
              <PrimaryButton>
                Mulai Belajar
              </PrimaryButton>
              <SecondaryButton>
                Akses Gratis
              </SecondaryButton>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 ring-2 ring-white flex items-center justify-center text-xs font-semibold text-white">A</div>
                  <div className="w-8 h-8 rounded-full bg-pink-500 ring-2 ring-white flex items-center justify-center text-xs font-semibold text-white">B</div>
                  <div className="w-8 h-8 rounded-full bg-blue-400 ring-2 ring-white flex items-center justify-center text-xs font-semibold text-white">C</div>
                </div>
                <p className="text-sm text-gray-600">Trusted by <span className="font-semibold text-gray-900">5,000+ learners</span></p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              <Image
                src="/Hero/heroimage.png"
                alt="Hero Illustration"
                width={800}
                height={600}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="bg-white py-10">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="py-6 flex flex-col items-center text-center">
              <p className="text-4xl font-bold text-gray-900">100+</p>
              <p className="text-sm text-gray-600 mt-1">Project</p>
            </div>
            <div className="py-6 flex flex-col items-center text-center">
              <p className="text-4xl font-bold text-gray-900">24/7</p>
              <p className="text-sm text-gray-600 mt-1">Bantuan AI</p>
            </div>
            <div className="py-6 flex flex-col items-center text-center">
              <p className="text-4xl font-bold text-gray-900">1.2K+</p>
              <p className="text-sm text-gray-600 mt-1">Pengguna</p>
            </div>
            <div className="py-6 flex flex-col items-center text-center">
              <p className="text-4xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-600 mt-1">Bootcamps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              <span className="text-[var(--color-charcoal)]">Belajar bukan masalahnya.</span>
              <br />
              <span className="text-[var(--color-charcoal)]">Cara kita belajar yang perlu diubah.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-2.5 mb-8">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Tanpa TmintLMS
                </span>
              </div>
              <ul className="space-y-4">
                {problems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-gray-400" viewBox="0 0 10 10" fill="none">
                        <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-blue)] from-slate-900 to-slate-950 rounded-2xl p-8">
              <div className="flex items-center gap-2.5 mb-8">
                <span className="w-3 h-3 rounded-full bg-[var(--color-yellow)] inline-block" />
                <span className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Dengan TmintLms
                </span>
              </div>
              <ul className="space-y-4">
                {solutions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[var(--color-blue)]" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-[#FFFF] py-20" id="path">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 max-w-xlg" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Wujudkan passionmu menjadi karya nyata dalam 6 langkah.
              </h2>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-xs lg:text-right" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Satu perjalanan terstruktur — tidak ada kebingungan memilih saat belajar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <div key={i} className="group relative rounded-2xl p-6 flex flex-col gap-6 bg-white border border-gray-200 hover:border-[var(--color-lime)] transition-all duration-300 cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-600 group-hover:bg-[var(--color-lime)] group-hover:text-white transition-colors duration-200">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-bold text-gray-200 group-hover:text-[var(--color-lime)] transition-colors duration-200" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full bg-white py-24" id="features">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-sm bg-[var(--color-lime)] inline-block" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Kenapa Pilih Kami?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.15em] text-gray-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Semua yang kamu perlukan
              <br />
              untuk menguasai skill baru
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.7fr_0.4fr] items-center">
            <div className="flex flex-col gap-12">
              {leftFeatures.map((f, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-blue)] flex items-center justify-center text-white">
                    {f.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square overflow-hidden">
                <Image src="/Feature/featureimage.png" alt="Projeck Mascot" fill className="object-contain w-[100%] h-[100%] scale-[1.1]" />
              </div>
            </div>

            <div className="flex flex-col gap-12">
              {rightFeatures.map((f, i) => (
                <div key={i} className="flex flex-col items-end gap-3 text-right">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-blue)] flex items-center justify-center text-white">
                    {f.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      <section className="py-28 bg-white" id="courses">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-[1.1] text-[#23252A]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Pilih Project Case.
                <br />
                Bangun Portofolio <span className="text-[#2EA0F5]">Nyata</span>.
              </h2>
              <p className="mt-5 text-lg text-gray-600 max-w-2xl" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Belajar langkah demi langkah melalui project nyata yang bisa langsung kamu masukkan ke dalam portofolio.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-[20px] p-6 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                style={{ borderColor: `${course.accent}40` }}
              >
                <div className="flex items-center justify-between mb-[18px]">
                  <div className="w-11 h-11 rounded-[14px] flex items-center justify-center" style={{ backgroundColor: course.accent }}>
                    <div className="text-[#1A1D23]">
                      {course.icon}
                    </div>
                  </div>
                  <span className="text-[13px] font-medium flex items-center gap-1 text-[#1A1D23]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FACC15" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                    </svg>
                    {course.xp}
                  </span>
                </div>

                <h3
                  className="text-xl font-medium text-[#1A1D23] mb-3"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {course.title}
                </h3>

                <div className="flex items-center gap-3.5 flex-wrap mb-[18px]">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full bg-black/10 text-charcoal"
                  >
                    {course.level}
                  </span>
                  <span className="text-[13px] text-gray-500 flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8v4l2 2" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                    {course.duration}
                  </span>
                  <span className="text-[13px] text-gray-500 flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19h16M4 5h16M4 12h16" />
                    </svg>
                    {course.chapters} Chapter
                  </span>
                </div>

                <div className="rounded-[14px] p-4 bg-[#F7F8FA] mb-5">
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-1.5">
                    Final Project
                  </p>
                  <p
                    className="text-sm text-gray-700 leading-relaxed"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {course.project}
                  </p>
                </div>

                <div className="flex gap-2">
                  {/* <SecondaryButton className="w-[50%]">
              Detail
            </SecondaryButton> */}
                  <PrimaryButton className="w-[100%]">
                    Mulai
                  </PrimaryButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bootcamp Section */}
      <section className="py-28 bg-white" id="bootcamp">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
            <div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-[1.05] text-[var(--color-charcoal)]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Belajar Lebih Cepat Saat
                <br />
                Bertemu Langsung.
              </h2>
            </div>
            <p className="text-lg text-right text-gray-600 max-w-m" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Bootcamp dan Workshop yang membantu kamu <br></br> berkembang lebih cepat bersama para builder lainnya.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {bootcamps.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-[32px] border border-gray-300 bg-white hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className={`${item.bg} p-6 h-[220px] flex flex-col`}>
                  <div className="inline-flex w-fit items-center rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
                    {item.tag}
                  </div>
                  <div className="flex-1 flex items-end">
                    <h3 className="text-5xl md:text-6xl font-bold text-black" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {item.date}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 leading-snug" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-4 mt-5 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="7" r="3" />
                        <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
                        <path d="M16 4.5c1.7.3 3 1.8 3 3.5s-1.3 3.2-3 3.5" />
                        <path d="M22 20c0-2.6-2-4.8-4.7-5.6" />
                      </svg>
                      {item.seats}
                    </span>
                  </div>
                  <PrimaryButton className="w-full mt-8">Daftar Sekarang</PrimaryButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-28 bg-white" id="testimonials">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600">
              Testimonials
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-[#23252A]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Bukan Sekadar Belajar.
              <br />
              Mereka Sudah Membuktikannya.
            </h2>
            <p className="mt-5 text-lg text-gray-600" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Ribuan pengguna telah membangun skill, portfolio, dan karier baru melalui perjalanan belajar yang terstruktur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-[28px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="flex gap-1 text-lg mb-5">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-black ${item.color}`}>
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600">
              FAQ
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Pertanyaan yang
              <br />
              Sering Ditanyakan
            </h2>
            <p className="mt-5 text-lg text-gray-600" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
             Berikut beberapa pertanyaan yang paling sering diajukan oleh learner kami.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border border-gray-100 rounded-[24px] overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between text-left p-6">
                    <span className="font-semibold text-lg text-gray-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#F8FCFF] text-[#1EA7F2] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
