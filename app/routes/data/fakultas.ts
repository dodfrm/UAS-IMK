const programs = [
  // Teknik & Informatika Programs
  {
    id: 1,
    title: "Teknologi Informasi",
    level: "undergraduate",
    faculty: "Teknik & Informatika",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Program studi yang mempersiapkan mahasiswa untuk menguasai teknologi informasi terkini dan penerapannya dalam berbagai bidang industri.",
  },
  {
    id: 2,
    title: "Rekayasa Perangkat Lunak",
    level: "undergraduate",
    faculty: "Teknik & Informatika",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Fokus pada pengembangan perangkat lunak berkualitas tinggi dengan metodologi modern dan praktik terbaik industri.",
  },
  {
    id: 3,
    title: "Teknologi Komputer",
    level: "diploma",
    faculty: "Teknik & Informatika",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Program diploma yang memberikan keterampilan praktis dalam teknologi komputer dan sistem informasi.",
  },
  {
    id: 4,
    title: "Sistem Informasi",
    level: "undergraduate",
    faculty: "Teknik & Informatika",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Menggabungkan teknologi informasi dengan manajemen bisnis untuk mengoptimalkan sistem organisasi.",
  },
  {
    id: 5,
    title: "Sistem Informasi",
    level: "diploma",
    faculty: "Teknik & Informatika",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Program diploma sistem informasi dengan fokus pada implementasi praktis di dunia kerja.",
  },
  {
    id: 6,
    title: "Sistem Informasi Akuntansi",
    level: "diploma",
    faculty: "Teknik & Informatika",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Kombinasi sistem informasi dan akuntansi untuk mendukung proses bisnis perusahaan.",
  },
  {
    id: 7,
    title: "Teknik Elektro",
    level: "undergraduate",
    faculty: "Teknik & Informatika",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Program teknik elektro yang mencakup sistem tenaga, elektronika, dan teknologi otomasi.",
  },
  {
    id: 8,
    title: "Teknik Industri",
    level: "undergraduate",
    faculty: "Teknik & Informatika",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Optimasi sistem industri melalui pendekatan teknik dan manajemen yang terintegrasi.",
  },
  {
    id: 9,
    title: "Ilmu Komputer",
    level: "undergraduate",
    faculty: "Teknik & Informatika",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Program studi yang mempelajari aspek teoritis dan praktis dari komputasi dan sistem komputer.",
  },
  // Ekonomi & Bisnis Programs
  {
    id: 10,
    title: "Manajemen",
    level: "undergraduate",
    faculty: "Ekonomi & Bisnis",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Program manajemen yang mempersiapkan pemimpin bisnis masa depan dengan wawasan global.",
  },
  {
    id: 11,
    title: "Akuntansi",
    level: "undergraduate",
    faculty: "Ekonomi & Bisnis",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Program akuntansi yang menghasilkan akuntan profesional dengan standar internasional.",
  },
  {
    id: 12,
    title: "Akuntansi",
    level: "diploma",
    faculty: "Ekonomi & Bisnis",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Program diploma akuntansi dengan fokus pada keterampilan praktis dan aplikasi langsung.",
  },
  {
    id: 13,
    title: "Administrasi Bisnis",
    level: "diploma",
    faculty: "Ekonomi & Bisnis",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Program yang mempersiapkan tenaga administrasi bisnis yang kompeten dan profesional.",
  },
  {
    id: 14,
    title: "Administrasi Perkantoran",
    level: "diploma",
    faculty: "Ekonomi & Bisnis",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Fokus pada manajemen perkantoran modern dengan teknologi informasi terkini.",
  },
  {
    id: 15,
    title: "Manajemen Pajak",
    level: "diploma",
    faculty: "Ekonomi & Bisnis",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Spesialisasi dalam perpajakan Indonesia dengan pemahaman regulasi terkini.",
  },
  {
    id: 16,
    title: "Perhotelan",
    level: "diploma",
    faculty: "Ekonomi & Bisnis",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Program perhotelan yang mempersiapkan profesional industri hospitality.",
  },
  {
    id: 17,
    title: "Hukum Bisnis",
    level: "undergraduate",
    faculty: "Ekonomi & Bisnis",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Kombinasi hukum dan bisnis untuk menghasilkan praktisi hukum bisnis yang kompeten.",
  },
  {
    id: 18,
    title: "Pariwisata",
    level: "undergraduate",
    faculty: "Ekonomi & Bisnis",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Program pariwisata yang mengembangkan industri wisata berkelanjutan dan inovatif.",
  },
  // Komunikasi & Bahasa Programs
  {
    id: 19,
    title: "Ilmu Komunikasi",
    level: "undergraduate",
    faculty: "Komunikasi & Bahasa",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Program komunikasi yang menghasilkan komunikator profesional di era digital.",
  },
  {
    id: 20,
    title: "Sastra Inggris",
    level: "undergraduate",
    faculty: "Komunikasi & Bahasa",
    duration: "4 tahun",
    credits: "144 sks",
    description:
      "Studi mendalam tentang sastra dan budaya Inggris dengan pendekatan kontemporer.",
  },
  {
    id: 21,
    title: "Hubungan Masyarakat",
    level: "diploma",
    faculty: "Komunikasi & Bahasa",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Program praktis untuk menghasilkan praktisi public relations yang handal.",
  },
  {
    id: 22,
    title: "Penyiaran",
    level: "diploma",
    faculty: "Komunikasi & Bahasa",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Program penyiaran dengan fasilitas studio modern untuk radio dan televisi.",
  },
  {
    id: 23,
    title: "Periklanan",
    level: "diploma",
    faculty: "Komunikasi & Bahasa",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Program periklanan yang menggabungkan kreativitas dengan strategi pemasaran.",
  },
  {
    id: 24,
    title: "Bahasa Inggris",
    level: "diploma",
    faculty: "Komunikasi & Bahasa",
    duration: "3 tahun",
    credits: "108 sks",
    description:
      "Program bahasa Inggris praktis untuk komunikasi bisnis dan profesional.",
  },
];

const faculties = [
  "Teknik & Informatika",
  "Ekonomi & Bisnis",
  "Komunikasi & Bahasa",
];

export { programs, faculties };