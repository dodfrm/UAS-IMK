import {
  GraduationCap,
  Target,
  Eye,
  History,
  Quote,
  ChevronsRight,
  ChevronRight,
  Home,
} from "lucide-react";
import { Link } from "react-router";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
export default function Profile() {
  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 text-white overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gedung kampus"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 mix-blend-multiply" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center text-sm text-blue-200 mb-6 lg:mb-0">
              <Link to="/" className="hover:text-white flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Beranda
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white font-medium">Profil</span>
            </nav>

            <div className="text-center">
              <GraduationCap className="h-16 w-16 mx-auto mb-6 text-blue-200" />
              <h1 className="text-5xl font-bold mb-6">
                Profil Universitas BSI
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed capitalize">
                Mengenal lebih dekat BSI University, institusi pendidikan tinggi
                yang telah berkontribusi dalam menghasilkan lulusan berkualitas
                selama lebih dari 31 tahun.
              </p>
            </div>
          </div>
        </section>

        {/* Sambutan Rektor */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/rektor.jpg"
                  alt="Rektor BSI University"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-1 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <Quote className="h-8 w-8" />
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    Sambutan Rektor
                  </h2>
                  <p className="text-blue-600 font-medium text-lg">
                    Prof. Dr. Ir. Mochamad Wahyudi, M.Kom, MM, M.Pd, IPU, ASEAN
                    Eng
                  </p>
                  <p className="text-gray-600">Rektor BSI University</p>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Assalamu'alaikum Warahmatullahi Wabarakatuh dan Salam
                    Sejahtera untuk Kita Semua,
                  </p>
                  <p>
                    Tak terasa sudah lebih dari 31 tahun Universitas Bina Sarana
                    Informatika telah berkiprah dalam membangun negeri ini.
                    Reputasi Universitas Bina Sarana Informatika tidak dibangun
                    sesaat karena reputasi Universitas Bina Sarana Informatika
                    bisa seperti sekarang ini perlu waktu lebih dari tiga
                    dekade. Tidak juga semudah membalikkan tangan karena selalu
                    ada tantangan di setiap zaman. Selalu ada hambatan namun
                    pasti terselip peluang yang dapat dimanfaatkan. Kadang jatuh
                    namun berusaha segera bangkit. Ada pengalaman pahit namun
                    berupaya tetap berfikir positif. Intinya, selalu berkreasi
                    dan berinovasi di tengah dinamika organisasi dan perubahan
                    lingkungan eksternal. Saya melihat Universitas Bina Sarana
                    Informatika sebagai contoh organizational learning yang
                    terus tumbuh ke arah yang lebih baik dari waktu ke waktu.
                    Kalau merujuk ke istilah di bidang manajemen mutu,
                    perkembangan Universitas Bina Sarana Informatika merupakan
                    buah dari continuous quality improvement. Terima kasih,
                    salam damai dan sejahtera buat bangsa Indonesia.
                  </p>
                  <p className="font-medium">
                    Wassalamu'alaikum Warahmatullahi Wabarakatuh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visi Misi */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Visi & Misi <span className="text-blue-600">UBSI</span>
              </h2>
              <p className="text-xl text-gray-600 capitalize">
                Landasan filosofis yang mengarahkan setiap langkah BSI
                University
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              {/* Visi */}
              <Card className="h-full">
                <CardHeader className="text-center">
                  <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-3xl text-blue-900">Visi</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-gray-700 leading-relaxed italic capitalize">
                    "Menjadi universitas unggul di bidang ekonomi kreatif pada
                    tahun 2033."
                  </p>
                </CardContent>
              </Card>

              {/* Misi */}
              <Card className="h-full">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-3xl text-blue-900">Misi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 capi">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Menyelenggarakan program pendidikan akademik dan vokasi
                        yang mendukung ekonomi kreatif.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Menyelenggarakan penelitian berkualitas.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Menyelenggarakan pengabdian masyarakat dalam rangka
                        meningkatkan kualitas sumber daya manusia.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Mengelola universitas secara mandiri dengan tata kelola
                        yang baik melalui pengembangan kelembagaan yang
                        berorientasi pada mutu.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Memperluas jejaring kerjasama dengan pemerintah, dunia
                        industry dan usaha baik di dalam negeri dan luar negeri.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sejarah Kampus */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <History className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Sejarah singkat <span className="text-blue-600">UBSI</span>
              </h2>
              <p className="text-xl text-gray-600 capitalize">
                Perjalanan panjang BSI University dalam mengembangkan pendidikan
                tinggi berkualitas
              </p>
            </div>
            <Card className="h-full w-full md:w-3/4 mx-auto p-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Perubahan Akademi Bina Sarana Informatika (BSI) menjadi
                  Universitas Bina Sarana Informatika (UBSI) telah diresmikan.
                  Penyerahan Surat Keputusan Perubahan Akademi BSI menjadi
                  Universitas Bina Sarana Informatika (UBSI) ini berlangsung di
                  BSI Convention Center, Jalan Raya Kaliabang nomor 8, Perwira,
                  Bekasi Utara, Bekasi, Jawa Barat. Surat Keputusan tersebut
                  diserahkan langsung oleh Sekretaris Jenderal Kementrian Riset,
                  Teknologi dan Pendidikan Tinggi, Prof Ainun Na’im PhD, MBA,
                  kepada Pengurus Yayasan Bina Sarana Informatika, Efriadi Salim
                  yang didampingi Direktur BSI Naba Aji Notoseputro. Kegiatan
                  ini dilakukan bersamaan dengan rangkaian kegiatan seminar
                  motivasi BSI dan disaksikan langsung oleh 9 ribu mahasiswa
                  baru BSI tahun ajaran 2018/2019.
                </p>
                <p>
                  Penyerahan Surat Keputusan tersebut dihadiri pula oleh
                  Direktur Jenderal Pembelajaran dan Kemahasiswaan, Prof Intan
                  Ahmad PhD; Kepala Lembaga Layanan Pendidikan Tinggi Wilayah
                  III DKI Jakarta, Dr Ir Ilah Sailah MS; Sekretaris Lembaga
                  Layanan Pendidikan Tinggi Wilayah III DKI Jakarta, Dr M
                  Samsuri SPd, MT; serta wakil direktur BSI, ketua Program Studi
                  di BSI, beserta jajaran pimpinan BSI lainnya. Direktur BSI,
                  Naba Aji Notoseputro mengatakan, perubahaan dari Akademi BSI
                  menjadi UBSI tersebut prosesnya sudah cukup lama dilaksanakan.
                  “Perubahan dilakukan sebagai salah satu kesiapan BSI untuk
                  menghadapi era disruptif,” kata Naba Aji dalam rilis yang
                  diterima. Ia menambahkan, sudah 30 tahun lamanya BSI eksis di
                  dunia pendidikan tinggi. Tentunya perkembangan tersebut
                  membuat BSI menjadi salah satu perguruan tinggi terbesar.
                </p>
                <p>
                  BSI memiliki enam akademi, 25 lima kampus se-Indonesia dan
                  kurang lebih 20 ribu mahasiswa aktif. “Pihak Yayasan Bina
                  Sarana Informatika berinisiatif untuk menyatukan 21 kampus
                  yang dimiliki oleh BSI menjadi satu universitas besar,”
                  Perubahan menjadi universitas tersebut juga sebagai salah satu
                  langkah BSI menjadi perguruan tinggi terbesar dengan
                  akreditasi baik. Selain itu juga sebagai upaya BSI dalam
                  meningkatkan kualitas sistem pendidikan serta kompetensi
                  lulusannya. Mahasiswa yang berada di daerah maupun di ibukota
                  akan merasakan hak yang sama, baik dari sistem pembelajaran,
                  pengembangan kompetensi, hingga kesempatan berkarir yang akan
                  dimiliki oleh lulusan UBSI.
                </p>
                <p>
                  “Perubahan menjadi universitas ini, akan memberikan manfaat
                  kepada seluruh civitas BSI, baik mahasiswa, dosen maupun
                  lulusannya. Seperti, mahasiswa diploma tiga akan lebih mudah
                  untuk melanjutkan pendidikannya pada tingkat Strata Satu.
                  Karena ke depannya Universitas BSI akan memiliki 4 fakultas,
                  yakni Fakultas Tenik, Fakultas Teknologi Informasi, Fakultas
                  Komunikasi dan Bahasa serta Fakultas Ekonomi dan Bisnis,” Dari
                  empat fakultas tersebut, Universitas Bina Sarana Informatika
                  (UBSI) memiliki 19 (sembilan belas) program studi, yakni
                  Teknik Elektro, Teknik Industri, Sastra Inggris, Komputerisasi
                  Akuntansi, Manajemen Informatika, Sekretari, Manajemen
                  Administrasi, Bahasa Inggris, dan Periklanan. Selain itu,
                  Prodi Hubungan Masyarakat, Penyiaran, Manajemen Perpajakan,
                  Akuntansi, Sistem Informasi, Teknik Informatika, Manajemen,
                  Ilmu atau Sains Komunikasi, Teknologi Informasi, dan Rekayasa
                  Perangkat Lunak.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
