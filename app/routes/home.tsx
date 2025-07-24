import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Award,
  BookOpen,
  GraduationCap,
  Building,
  Star,
  Cpu,
  Briefcase,
  Mic,
  ArrowRight,
} from "lucide-react";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beranda - Universitas BSI" },
    {
      name: "description",
      content:
        "Universitas BSI - Membentuk Generasi Unggul dengan Pendidikan Berkualitas",
    },
  ];
}

// Carousel data
const carouselData = [
  {
    src: "https://static.republika.co.id/uploads/images/inpicture_slide/salah-satu-kampus-universitas-bina-sarana-informatika_201022101523-294.jpeg",
    title: "Pendidikan Inovatif & Relevan",
    description:
      "Menyediakan kurikulum yang adaptif dengan kebutuhan industri global.",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Lingkungan Kolaboratif",
    description:
      "Mendorong mahasiswa untuk berkolaborasi, berinovasi, dan berkembang bersama.",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Lulusan Siap Kerja",
    description:
      "Mencetak lulusan yang kompeten dan siap bersaing di pasar kerja nasional maupun internasional.",
  },
];


const faculties = [
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    name: "Teknik & Informatika",
    description:
      "Menghasilkan talenta digital yang siap menghadapi tantangan teknologi masa depan.",
    programs: [
      "Teknik Informatika",
      "Sistem Informasi",
      "Rekayasa Perangkat Lunak",
    ],
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    name: "Ekonomi & Bisnis",
    description:
      "Membentuk pemimpin bisnis yang inovatif dengan pemahaman ekonomi yang mendalam.",
    programs: ["Manajemen", "Akuntansi", "Bisnis Digital"],
  },
  {
    icon: <Mic className="w-10 h-10 text-primary" />,
    name: "Komunikasi & Bahasa",
    description:
      "Mencetak komunikator handal dan ahli bahasa yang mampu bersaing di era global.",
    programs: [
      "Ilmu Komunikasi",
      "Sastra Inggris",
      "Hubungan Masyarakat",
    ],
  },
];

const statistics = [
  { icon: <Users />, number: "25,000+", label: "Mahasiswa Aktif" },
  { icon: <GraduationCap />, number: "50+", label: "Program Studi" },
  { icon: <Award />, number: "95%", label: "Lulusan Terserap Kerja" },
  { icon: <Building />, number: "15", label: "Lokasi Kampus" },
];

// News data
const newsData = [
  {
    id: 1,
    title: "BSI University Raih Akreditasi A dari BAN-PT",
    excerpt:
      "Universitas BSI berhasil memperoleh akreditasi A untuk seluruh program studi yang menunjukkan komitmen terhadap kualitas pendidikan.",
    date: "2025-01-15",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Akreditasi",
  },
  {
    id: 2,
    title: "Kerjasama Industri dengan Perusahaan Teknologi Terkemuka",
    excerpt:
      "BSI University menjalin kemitraan strategis dengan berbagai perusahaan teknologi untuk meningkatkan kualitas lulusan.",
    date: "2025-01-10",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Kemitraan",
  },
  {
    id: 3,
    title: "Mahasiswa BSI Juara Kompetisi Inovasi Nasional",
    excerpt:
      "Tim mahasiswa BSI berhasil meraih juara 1 dalam kompetisi inovasi teknologi tingkat nasional dengan karya yang membanggakan.",
    date: "2025-01-05",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Prestasi",
  },
];

// Programs data
const programs = [
  {
    title: "Teknik Informatika",
    description:
      "Program studi unggulan yang mempersiapkan mahasiswa menjadi profesional IT terdepan.",
    icon: <BookOpen className="w-6 h-6" />,
    level: "S1 & S2",
  },
  {
    title: "Sistem Informasi",
    description:
      "Fokus pada pengembangan sistem informasi untuk mendukung kebutuhan bisnis modern.",
    icon: <BookOpen className="w-6 h-6" />,
    level: "S1 & S2",
  },
  {
    title: "Manajemen",
    description:
      "Membekali mahasiswa dengan keterampilan manajemen dan kepemimpinan yang dibutuhkan industri.",
    icon: <BookOpen className="w-6 h-6" />,
    level: "S1 & S2",
  },
  {
    title: "Akuntansi",
    description:
      "Program studi yang menghasilkan akuntan profesional dengan standar internasional.",
    icon: <BookOpen className="w-6 h-6" />,
    level: "S1 & S2",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Ahmad Fauzi",
    role: "Alumni Teknik Informatika 2020",
    company: "Software Engineer di Google",
    content:
      "BSI University memberikan fondasi yang kuat untuk karir saya di bidang teknologi. Dosen-dosen berpengalaman dan kurikulum yang up-to-date sangat membantu perkembangan saya.",
    rating: 5,
  },
  {
    name: "Sari Dewi",
    role: "Alumni Manajemen 2019",
    company: "Marketing Manager di Tokopedia",
    content:
      "Pengalaman belajar di BSI sangat berharga. Selain teori, kami juga dibekali dengan praktik langsung yang mempersiapkan kami untuk dunia kerja.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Alumni Sistem Informasi 2021",
    company: "IT Consultant di Accenture",
    content:
      "Fasilitas lab yang modern dan dosen yang kompeten membuat pengalaman belajar di BSI sangat menyenangkan dan bermakna.",
    rating: 5,
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};


// --- COMPONENT ---
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-play for hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 7000); // Increased interval for better readability
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-gray-950">
      {/* Hero Carousel Section */}
      <section className="relative -mt-2 md:mt-1/3 h-[90vh] text-white overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={carouselData[currentSlide].src}
              alt={carouselData[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative h-full flex flex-col justify-end pb-24 md:pb-32">
          <div className="container mx-auto px-4 text-left max-w-7xl">
            <motion.div
              key={currentSlide} // Re-trigger animation on slide change
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 max-w-4xl tracking-tight">
                {carouselData[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90">
                {carouselData[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="https://pmbubsi.id">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold cursor-pointer"
                  >
                  Daftar Sekarang
                </Button>
                  </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Statistics Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center flex flex-col items-center"
              >
                <div className="text-primary dark:text-primary-foreground mb-3 h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-base text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Faculties Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Fakultas Unggulan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Temukan passion Anda di salah satu dari tiga fakultas kami yang
              dirancang untuk menjawab tantangan masa depan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculties.map((faculty) => (
              <motion.div
                key={faculty.name}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col"
              >
                <div className="mb-5">{faculty.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {faculty.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {faculty.description}
                </p>
                <div className="mb-6 space-y-2">
                  {faculty.programs.map((prog) => (
                    <div
                      key={prog}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                    >
                      <BookOpen className="w-4 h-4 mr-3 text-primary/80" />{" "}
                      {prog}
                    </div>
                  ))}
                </div>
                <Link to="/fakultas">
                  <Button variant="outline" className="mt-auto w-full group cursor-pointer">
                    Lihat Selengkapnya{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* News Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Berita & Agenda
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Ikuti perkembangan dan acara terbaru dari civitas akademika
              Universitas BSI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <motion.article
                key={news.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {new Date(news.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 flex-grow text-gray-900 dark:text-white line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 text-primary mt-auto self-start"
                  >
                    Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-24"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Kisah Sukses Alumni
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Dengarkan cerita inspiratif dari para alumni yang telah berkarya.
            </p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-800"
              >
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="mt-8">
                    <div className="font-bold text-lg text-gray-900 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-primary font-medium">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg p-3 rounded-full transition-all border dark:border-gray-700"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg p-3 rounded-full transition-all border dark:border-gray-700"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mulai Perjalanan Anda di Universitas BSI
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Jadilah bagian dari generasi unggul. Daftar sekarang atau
              konsultasikan pilihan program studi Anda dengan tim kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="https://pmbubsi.id">
              <Button
                size="lg"
                variant="secondary"
                className="px-10 py-6 text-base font-semibold cursor-pointer"
              >
                Daftar Sekarang
              </Button>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
