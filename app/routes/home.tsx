import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  Award,
  BookOpen,
  GraduationCap,
  Building,
  Star,
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
const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    title: "Kampus Modern BSI",
    description: "Fasilitas pembelajaran terdepan untuk masa depan yang cerah",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Lingkungan Pembelajaran",
    description: "Suasana belajar yang kondusif dan inspiratif",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Laboratorium Canggih",
    description: "Peralatan modern untuk praktik dan penelitian",
  },
  {
    src: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Kegiatan Mahasiswa",
    description: "Beragam aktivitas untuk pengembangan diri",
  },
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

// Statistics data
const statistics = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "25,000+",
    label: "Mahasiswa Aktif",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    number: "45+",
    label: "Program Studi",
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "95%",
    label: "Tingkat Kelulusan",
  },
  { icon: <Building className="w-8 h-8" />, number: "15", label: "Kampus" },
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Hero Carousel Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {carouselImages[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {carouselImages[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Daftar Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Studi Unggulan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih program studi yang sesuai dengan minat dan bakat Anda untuk
              meraih masa depan yang cemerlang
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{program.icon}</div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {program.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Berita Terbaru</h2>
            <p className="text-lg text-muted-foreground">
              Ikuti perkembangan terkini dari Universitas BSI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <article
                key={news.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {news.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(news.date).toLocaleDateString("id-ID")}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Button variant="outline" size="sm">
                    Baca Selengkapnya
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kata Alumni</h2>
            <p className="text-lg text-muted-foreground">
              Dengarkan cerita sukses dari para alumni BSI University
            </p>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>
              </div>
              <blockquote className="text-lg text-center mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-sm text-primary">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg p-2 rounded-full transition-shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg p-2 rounded-full transition-shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Bergabung dengan BSI University?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Mulai perjalanan pendidikan Anda bersama kami dan raih masa depan
            yang cemerlang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Daftar Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Jadwal Konsultasi
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
