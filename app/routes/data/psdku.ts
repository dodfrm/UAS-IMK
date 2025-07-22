// File: app/routes/data/psdku.ts

export interface ProgramStudi {
  title: string;
  level: "D3" | "S1";
  slug: string;
  description: string;
  visi: string;
  misi: string[];
  profileLulusan: string[];
}

export interface PsdkuLocation {
  id: number;
  name: string;
  slug: string;
  programs: ProgramStudi[];
}

export const psdkuData: PsdkuLocation[] = [
  {
    id: 1,
    name: "PSDKU Kabupaten Karawang",
    slug: "kabupaten-karawang",
    programs: [
      {
        title: "Sistem Informasi Akuntansi",
        level: "D3",
        slug: "sistem-informasi-akuntansi-d3",
        description: "Program studi yang mengintegrasikan keilmuan akuntansi dengan teknologi sistem informasi untuk menghasilkan tenaga ahli yang mampu merancang dan mengelola sistem akuntansi modern.",
        visi: "Menjadi program studi unggulan dalam bidang sistem informasi akuntansi yang diakui secara nasional pada tahun 2030.",
        misi: [
          "Menyelenggarakan pendidikan vokasi yang berkualitas dan relevan dengan kebutuhan industri.",
          "Melaksanakan penelitian terapan di bidang sistem informasi akuntansi.",
          "Menjalin kerjasama strategis dengan industri dan instansi terkait.",
        ],
        profileLulusan: [
          "Analis Sistem Akuntansi",
          "Staf Akuntansi & Keuangan",
          "Auditor Junior Sistem Informasi",
          "Pengembang Sistem Informasi Akuntansi",
        ],
      },
      {
        title: "Sistem Informasi",
        level: "D3",
        slug: "sistem-informasi-d3",
        description: "Program studi yang berfokus pada pengembangan dan manajemen sistem informasi untuk mendukung operasional dan pengambilan keputusan dalam organisasi.",
        visi: "Menjadi pusat pendidikan vokasi Sistem Informasi yang inovatif dan berdaya saing di tingkat regional.",
        misi: [
          "Menghasilkan lulusan yang kompeten dalam analisis, perancangan, dan implementasi sistem informasi.",
          "Mengembangkan kurikulum yang adaptif terhadap perkembangan teknologi informasi.",
          "Mendorong budaya riset dan inovasi di kalangan mahasiswa dan dosen.",
        ],
        profileLulusan: [
          "Analis Sistem Junior",
          "Programmer Aplikasi",
          "Administrator Basis Data",
          "Staf IT Support",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "PSDKU Kota Bogor",
    slug: "kota-bogor",
    programs: [
      {
        title: "Sistem Informasi Akuntansi",
        level: "D3",
        slug: "sistem-informasi-akuntansi-d3",
        description: "Mempersiapkan mahasiswa untuk menjadi ahli dalam perancangan dan penerapan sistem akuntansi berbasis teknologi di berbagai sektor industri di Kota Bogor dan sekitarnya.",
        visi: "Menjadi program studi D3 Sistem Informasi Akuntansi terdepan yang menghasilkan lulusan profesional dan beretika.",
        misi: [
          "Melaksanakan pendidikan yang mengutamakan praktik dan studi kasus terkini.",
          "Meningkatkan kemampuan analisis mahasiswa terhadap sistem keuangan.",
          "Membekali mahasiswa dengan sertifikasi kompetensi yang relevan.",
        ],
        profileLulusan: [
          "Staf Akuntansi",
          "Operator Sistem Akuntansi",
          "Asisten Auditor",
        ],
      },
      {
        title: "Sistem Informasi",
        level: "D3",
        slug: "sistem-informasi-d3",
        description: "Program studi D3 Sistem Informasi di Kota Bogor dirancang untuk mencetak tenaga ahli madya yang siap kerja di bidang pengembangan dan pemeliharaan sistem informasi.",
        visi: "Terwujudnya program studi yang menghasilkan tenaga profesional di bidang sistem informasi yang mampu bersaing di era digital.",
        misi: [
          "Menyelenggarakan proses belajar mengajar yang efektif dengan dukungan teknologi.",
          "Melakukan pengabdian kepada masyarakat melalui penerapan sistem informasi.",
          "Membangun jejaring dengan dunia usaha dan industri.",
        ],
        profileLulusan: [
          "Junior Web Developer",
          "Database Operator",
          "Technical Support",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "PSDKU Kota Sukabumi",
    slug: "kota-sukabumi",
    programs: [
        {
            title: "Sistem Informasi Akuntansi",
            level: "D3",
            slug: "sistem-informasi-akuntansi-d3",
            description: "Program studi D3 yang memadukan akuntansi dan teknologi untuk memenuhi kebutuhan industri di Sukabumi.",
            visi: "Menjadi program studi vokasi yang unggul dan inovatif dalam bidang sistem informasi akuntansi.",
            misi: [
                "Menyelenggarakan pendidikan berkualitas yang berorientasi pada praktik.",
                "Mengembangkan penelitian terapan untuk memecahkan masalah di industri.",
            ],
            profileLulusan: ["Staf Akuntansi", "Analis Keuangan Junior", "IT Auditor Assistant"],
        },
        {
            title: "Sistem Informasi",
            level: "D3",
            slug: "sistem-informasi-d3",
            description: "Mencetak ahli madya di bidang sistem informasi yang siap terjun ke dunia kerja.",
            visi: "Menjadi program studi yang menghasilkan lulusan kompeten di bidang pengembangan sistem informasi.",
            misi: [
                "Memberikan pendidikan praktis dalam analisis dan desain sistem.",
                "Membekali mahasiswa dengan keahlian pemrograman terkini.",
            ],
            profileLulusan: ["Programmer", "Analis Sistem Junior", "IT Support"],
        },
        {
            title: "Ilmu Komputer",
            level: "S1",
            slug: "ilmu-komputer-s1",
            description: "Program sarjana yang mendalami pondasi ilmiah dan teoretis dari komputasi dan informasi.",
            visi: "Menjadi pusat unggulan dalam pendidikan dan riset Ilmu Komputer yang diakui secara nasional.",
            misi: [
                "Menyelenggarakan pendidikan sarjana yang kuat dalam teori dan praktik ilmu komputer.",
                "Melakukan penelitian inovatif dalam kecerdasan buatan, rekayasa perangkat lunak, dan keamanan siber.",
                "Menghasilkan lulusan yang mampu beradaptasi dan berinovasi dalam perkembangan teknologi.",
            ],
            profileLulusan: ["Software Engineer", "Data Scientist", "Cybersecurity Analyst", "AI Specialist"],
        },
        {
            title: "Sistem Informasi",
            level: "S1",
            slug: "sistem-informasi-s1",
            description: "Program sarjana yang menjembatani antara ilmu komputer dengan manajemen dan bisnis untuk menciptakan solusi teknologi yang efektif.",
            visi: "Menjadi program studi sarjana Sistem Informasi terkemuka yang menghasilkan pemimpin digital masa depan.",
            misi: [
                "Memberikan pemahaman mendalam tentang bagaimana teknologi dapat digunakan untuk mencapai tujuan bisnis.",
                "Mengembangkan kemampuan mahasiswa dalam manajemen proyek IT dan analisis bisnis.",
                "Mendorong penciptaan startup dan inovasi berbasis teknologi informasi.",
            ],
            profileLulusan: ["IT Project Manager", "Business Analyst", "System Analyst", "IT Consultant", "CIO"],
        },
    ]
  },
];