// File: app/routes/data/jurusan.ts

export interface ProgramStudi {
  title: string;
  level: "D3" | "S1";
  slug: string;
  description: string;
  visi: string;
  misi: string[];
  profileLulusan: string[];
}

export interface Fakultas {
  id: number;
  name: string;
  slug: string;
  description: string;
  programs: ProgramStudi[];
}

export const fakultasData: Fakultas[] = [
  {
    id: 1,
    name: "Teknik & Informatika",
    slug: "teknik-informatika",
    description:
      "Fakultas yang berfokus pada teknologi, rekayasa, dan sistem informasi",
    programs: [
      {
        title: "Teknologi Informasi",
        level: "S1",
        slug: "teknologi-informasi-s1",
        description:
          "Program studi yang mempelajari pemanfaatan teknologi informasi untuk memecahkan masalah bisnis dan sosial.",
        visi: "Menjadi program studi unggulan dalam bidang teknologi informasi yang diakui secara nasional.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi di bidang teknologi informasi",
          "Melakukan penelitian terapan yang inovatif",
          "Menjalin kerjasama dengan industri teknologi",
        ],
        profileLulusan: [
          "IT Consultant",
          "System Analyst",
          "Network Engineer",
          "IT Project Manager",
        ],
      },
      {
        title: "Rekayasa Perangkat Lunak",
        level: "S1",
        slug: "rekayasa-perangkat-lunak-s1",
        description:
          "Program studi yang berfokus pada pengembangan perangkat lunak berkualitas tinggi.",
        visi: "Menjadi pusat keunggulan dalam pendidikan rekayasa perangkat lunak.",
        misi: [
          "Mengembangkan kurikulum berbasis standar industri",
          "Mendorong budaya pengembangan perangkat lunak yang profesional",
          "Meningkatkan kompetensi mahasiswa melalui sertifikasi internasional",
        ],
        profileLulusan: [
          "Software Developer",
          "Quality Assurance Engineer",
          "DevOps Engineer",
          "Mobile App Developer",
        ],
      },
      {
        title: "Teknologi Komputer",
        level: "D3",
        slug: "teknologi-komputer-d3",
        description:
          "Program vokasi yang mempersiapkan tenaga ahli di bidang teknologi komputer.",
        visi: "Menghasilkan lulusan yang kompeten di bidang teknologi komputer.",
        misi: [
          "Menyelenggarakan pendidikan vokasi berbasis praktik",
          "Membekali mahasiswa dengan sertifikasi kompetensi",
          "Menjalin kerjasama dengan dunia industri",
        ],
        profileLulusan: [
          "Computer Technician",
          "Network Administrator",
          "IT Support Specialist",
          "System Administrator",
        ],
      },
      {
        title: "Sistem Informasi",
        level: "S1",
        slug: "sistem-informasi-s1",
        description:
          "Program studi yang menggabungkan teknologi informasi dengan kebutuhan bisnis.",
        visi: "Menjadi program studi sistem informasi terdepan di tingkat nasional.",
        misi: [
          "Mengintegrasikan pengetahuan bisnis dan teknologi informasi",
          "Mengembangkan penelitian di bidang sistem informasi",
          "Menyelenggarakan pengabdian kepada masyarakat",
        ],
        profileLulusan: [
          "Business Analyst",
          "System Analyst",
          "IT Consultant",
          "Database Administrator",
        ],
      },
      {
        title: "Sistem Informasi",
        level: "D3",
        slug: "sistem-informasi-d3",
        description:
          "Program vokasi yang mempersiapkan ahli madya di bidang sistem informasi.",
        visi: "Menghasilkan lulusan yang siap kerja di bidang sistem informasi.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi",
          "Meningkatkan keterampilan praktis mahasiswa",
          "Menjalin kemitraan dengan industri",
        ],
        profileLulusan: [
          "Junior Programmer",
          "IT Support",
          "Database Operator",
          "Web Developer",
        ],
      },
      {
        title: "Sistem Informasi Akuntansi",
        level: "D3",
        slug: "sistem-informasi-akuntansi-d3",
        description:
          "Program studi yang mengintegrasikan akuntansi dengan teknologi informasi.",
        visi: "Menjadi program studi unggulan di bidang sistem informasi akuntansi.",
        misi: [
          "Menyelenggarakan pendidikan vokasi yang berkualitas",
          "Melakukan penelitian terapan",
          "Mengembangkan kerjasama dengan industri",
        ],
        profileLulusan: [
          "Accounting Staff",
          "Financial System Operator",
          "Audit Assistant",
          "Tax Staff",
        ],
      },
      {
        title: "Teknik Elektro",
        level: "S1",
        slug: "teknik-elektro-s1",
        description:
          "Program studi yang mempelajari aplikasi kelistrikan dan elektronika.",
        visi: "Menjadi program studi teknik elektro yang unggul dan inovatif.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi",
          "Melakukan penelitian di bidang teknik elektro",
          "Mengembangkan kerjasama dengan industri",
        ],
        profileLulusan: [
          "Electrical Engineer",
          "Control System Engineer",
          "Power System Engineer",
          "Electronics Engineer",
        ],
      },
      {
        title: "Teknik Industri",
        level: "S1",
        slug: "teknik-industri-s1",
        description:
          "Program studi yang mempelajari optimasi sistem terintegrasi.",
        visi: "Menjadi program studi teknik industri yang diakui secara nasional.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi",
          "Melakukan penelitian di bidang teknik industri",
          "Mengembangkan kerjasama dengan industri",
        ],
        profileLulusan: [
          "Industrial Engineer",
          "Production Planner",
          "Quality Control Engineer",
          "Supply Chain Analyst",
        ],
      },
      {
        title: "Ilmu Komputer",
        level: "S1",
        slug: "ilmu-komputer-s1",
        description:
          "Program studi yang mendalami dasar-dasar ilmiah komputasi.",
        visi: "Menjadi pusat unggulan dalam pendidikan dan riset ilmu komputer.",
        misi: [
          "Menyelenggarakan pendidikan sarjana yang kuat dalam teori dan praktik",
          "Melakukan penelitian inovatif",
          "Menghasilkan lulusan yang mampu beradaptasi dengan perkembangan teknologi",
        ],
        profileLulusan: [
          "Software Engineer",
          "Data Scientist",
          "AI Specialist",
          "Cybersecurity Analyst",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Ekonomi & Bisnis",
    slug: "ekonomi-bisnis",
    description:
      "Fakultas yang mempelajari manajemen, akuntansi, dan administrasi bisnis",
    programs: [
      {
        title: "Manajemen",
        level: "S1",
        slug: "manajemen-s1",
        description:
          "Program studi yang mempelajari pengelolaan organisasi secara efektif dan efisien.",
        visi: "Menjadi program studi manajemen unggulan yang diakui secara nasional.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi",
          "Melakukan penelitian di bidang manajemen",
          "Mengembangkan kerjasama dengan industri",
        ],
        profileLulusan: [
          "Management Trainee",
          "Marketing Manager",
          "HR Manager",
          "Business Development",
        ],
      },
      {
        title: "Akuntansi",
        level: "S1",
        slug: "akuntansi-s1",
        description:
          "Program studi yang mempelajari pencatatan, pengklasifikasian, dan pelaporan transaksi keuangan.",
        visi: "Menjadi program studi akuntansi terkemuka di tingkat nasional.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi",
          "Melakukan penelitian di bidang akuntansi",
          "Mengembangkan kerjasama dengan industri",
        ],
        profileLulusan: [
          "Accountant",
          "Auditor",
          "Tax Consultant",
          "Financial Analyst",
        ],
      },
      {
        title: "Akuntansi",
        level: "D3",
        slug: "akuntansi-d3",
        description:
          "Program vokasi yang mempersiapkan tenaga ahli di bidang akuntansi.",
        visi: "Menghasilkan lulusan yang kompeten di bidang akuntansi.",
        misi: [
          "Menyelenggarakan pendidikan vokasi berbasis praktik",
          "Membekali mahasiswa dengan sertifikasi kompetensi",
          "Menjalin kerjasama dengan dunia industri",
        ],
        profileLulusan: [
          "Accounting Staff",
          "Bookkeeper",
          "Tax Staff",
          "Audit Assistant",
        ],
      },
      {
        title: "Administrasi Bisnis",
        level: "D3",
        slug: "administrasi-bisnis-d3",
        description:
          "Program vokasi yang mempersiapkan tenaga ahli di bidang administrasi bisnis.",
        visi: "Menghasilkan lulusan yang siap kerja di bidang administrasi bisnis.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi",
          "Meningkatkan keterampilan praktis mahasiswa",
          "Menjalin kemitraan dengan industri",
        ],
        profileLulusan: [
          "Administration Staff",
          "Office Manager",
          "Secretary",
          "Customer Service",
        ],
      },
      {
        title: "Administrasi Perkantoran",
        level: "D3",
        slug: "administrasi-perkantoran-d3",
        description:
          "Program vokasi yang mempersiapkan tenaga ahli di bidang administrasi perkantoran.",
        visi: "Menghasilkan lulusan yang kompeten di bidang administrasi perkantoran.",
        misi: [
          "Menyelenggarakan pendidikan vokasi berbasis praktik",
          "Membekali mahasiswa dengan sertifikasi kompetensi",
          "Menjalin kerjasama dengan dunia industri",
        ],
        profileLulusan: [
          "Office Administrator",
          "Executive Secretary",
          "Administrative Assistant",
          "Receptionist",
        ],
      },
      {
        title: "Manajemen Pajak",
        level: "D3",
        slug: "manajemen-pajak-d3",
        description:
          "Program vokasi yang mempersiapkan tenaga ahli di bidang perpajakan.",
        visi: "Menghasilkan lulusan yang kompeten di bidang perpajakan.",
        misi: [
          "Menyelenggarakan pendidikan vokasi berbasis praktik",
          "Membekali mahasiswa dengan sertifikasi kompetensi",
          "Menjalin kerjasama dengan dunia industri",
        ],
        profileLulusan: [
          "Tax Staff",
          "Tax Consultant Assistant",
          "Tax Auditor",
          "Tax Compliance Officer",
        ],
      },
      {
        title: "Perhotelan",
        level: "D3",
        slug: "perhotelan-d3",
        description:
          "Program vokasi yang mempersiapkan tenaga ahli di bidang perhotelan.",
        visi: "Menghasilkan lulusan yang kompeten di bidang perhotelan.",
        misi: [
          "Menyelenggarakan pendidikan vokasi berbasis praktik",
          "Membekali mahasiswa dengan sertifikasi kompetensi",
          "Menjalin kerjasama dengan dunia industri",
        ],
        profileLulusan: [
          "Front Office Staff",
          "Housekeeping Supervisor",
          "Food and Beverage Service",
          "Event Planner",
        ],
      },
      {
        title: "Hukum Bisnis",
        level: "S1",
        slug: "hukum-bisnis-s1",
        description:
          "Program studi yang mempelajari aspek hukum dalam dunia bisnis.",
        visi: "Menjadi program studi hukum bisnis yang unggul dan inovatif.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi",
          "Melakukan penelitian di bidang hukum bisnis",
          "Mengembangkan kerjasama dengan industri",
        ],
        profileLulusan: [
          "Corporate Lawyer",
          "Legal Consultant",
          "Compliance Officer",
          "Contract Specialist",
        ],
      },
      {
        title: "Pariwisata",
        level: "S1",
        slug: "pariwisata-s1",
        description:
          "Program studi yang mempelajari pengelolaan industri pariwisata.",
        visi: "Menjadi program studi pariwisata yang diakui secara nasional.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi",
          "Melakukan penelitian di bidang pariwisata",
          "Mengembangkan kerjasama dengan industri",
        ],
        profileLulusan: [
          "Tourism Manager",
          "Travel Consultant",
          "Event Organizer",
          "Destination Manager",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Komunikasi & Bahasa",
    slug: "komunikasi-bahasa",
    description:
      "Fakultas yang berfokus pada ilmu komunikasi, bahasa, dan media",
    programs: [
      {
        title: "Ilmu Komunikasi",
        level: "S1",
        slug: "ilmu-komunikasi-s1",
        description:
          "Program studi yang mempelajari proses komunikasi dalam berbagai konteks.",
        visi: "Menjadi program studi ilmu komunikasi unggulan di tingkat nasional.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi",
          "Melakukan penelitian di bidang komunikasi",
          "Mengembangkan kerjasama dengan industri media",
        ],
        profileLulusan: [
          "Public Relations Officer",
          "Journalist",
          "Media Planner",
          "Corporate Communication",
        ],
      },
      {
        title: "Sastra Inggris",
        level: "S1",
        slug: "sastra-inggris-s1",
        description:
          "Program studi yang mendalami bahasa, sastra, dan budaya Inggris.",
        visi: "Menjadi pusat studi bahasa dan sastra Inggris yang diakui secara nasional.",
        misi: [
          "Menyelenggarakan pendidikan berbasis kompetensi",
          "Melakukan penelitian di bidang sastra dan linguistik",
          "Mengembangkan kerjasama dengan institusi terkait",
        ],
        profileLulusan: [
          "English Teacher",
          "Translator",
          "Content Writer",
          "Linguist",
        ],
      },
      {
        title: "Hubungan Masyarakat",
        level: "D3",
        slug: "hubungan-masyarakat-d3",
        description:
          "Program vokasi yang mempersiapkan tenaga ahli di bidang hubungan masyarakat.",
        visi: "Menghasilkan lulusan yang kompeten di bidang hubungan masyarakat.",
        misi: [
          "Menyelenggarakan pendidikan vokasi berbasis praktik",
          "Membekali mahasiswa dengan sertifikasi kompetensi",
          "Menjalin kerjasama dengan dunia industri",
        ],
        profileLulusan: [
          "PR Officer",
          "Media Relations",
          "Event Coordinator",
          "Community Relations",
        ],
      },
      {
        title: "Penyiaran",
        level: "D3",
        slug: "penyiaran-d3",
        description:
          "Program vokasi yang mempersiapkan tenaga ahli di bidang penyiaran.",
        visi: "Menghasilkan lulusan yang kompeten di bidang penyiaran.",
        misi: [
          "Menyelenggarakan pendidikan vokasi berbasis praktik",
          "Membekali mahasiswa dengan sertifikasi kompetensi",
          "Menjalin kerjasama dengan dunia industri",
        ],
        profileLulusan: [
          "Broadcast Technician",
          "Radio Announcer",
          "TV Producer Assistant",
          "Video Editor",
        ],
      },
      {
        title: "Periklanan",
        level: "D3",
        slug: "periklanan-d3",
        description:
          "Program vokasi yang mempersiapkan tenaga ahli di bidang periklanan.",
        visi: "Menghasilkan lulusan yang kompeten di bidang periklanan.",
        misi: [
          "Menyelenggarakan pendidikan vokasi berbasis praktik",
          "Membekali mahasiswa dengan sertifikasi kompetensi",
          "Menjalin kerjasama dengan dunia industri",
        ],
        profileLulusan: [
          "Advertising Staff",
          "Creative Designer",
          "Media Planner",
          "Account Executive",
        ],
      },
      {
        title: "Bahasa Inggris",
        level: "D3",
        slug: "bahasa-inggris-d3",
        description:
          "Program vokasi yang mempersiapkan tenaga ahli di bidang bahasa Inggris.",
        visi: "Menghasilkan lulusan yang kompeten di bidang bahasa Inggris.",
        misi: [
          "Menyelenggarakan pendidikan vokasi berbasis praktik",
          "Membekali mahasiswa dengan sertifikasi kompetensi",
          "Menjalin kerjasama dengan dunia industri",
        ],
        profileLulusan: [
          "English Interpreter",
          "Tour Guide",
          "Language Instructor",
          "Bilingual Secretary",
        ],
      },
    ],
  },
];

