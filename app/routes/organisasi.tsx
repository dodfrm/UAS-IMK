import { Link } from "react-router";
import {
  ChevronRight,
  Home,
  Users,
  Layers,
  UserCog,
  Network,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function Organisasi() {
  // Sample data - replace with your actual data
  const strukturData = {
    title: "Struktur Organisasi",
    description:
      "Struktur organisasi Universitas BSI.",
    imageUrl: "/struktur-organisasi.jpg",
    bagian: [
      {
        name: "Pimpinan Fakultas",
        description:
          "Bertanggung jawab atas pengelolaan dan pengembangan fakultas",
        members: ["Dekan", "Wakil Dekan Akademik", "Wakil Dekan Non-Akademik"],
      },
      {
        name: "Departemen Akademik",
        description: "Menangani segala hal terkait kurikulum dan pembelajaran",
        members: [
          "Ketua Departemen",
          "Sekretaris Departemen",
          "Koordinator Program Studi",
        ],
      },
      {
        name: "Unit Penelitian",
        description:
          "Mengkoordinasikan kegiatan penelitian dosen dan mahasiswa",
        members: ["Kepala Unit", "Anggota Peneliti", "Staf Pendukung"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Unit Bagian"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 mix-blend-multiply" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-blue-200 mb-6 lg:mb-0">
            <Link to="/" className="hover:text-white flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white font-medium">Unit Bagian</span>
          </nav>

          <Network className="h-16 w-16 mx-auto mb-6 text-purple-200" />
          <h1 className="text-5xl font-bold mb-6">Unit Bagian</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            {strukturData.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Struktur Organisasi Image */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-6 h-6 text-purple-600" />
                Diagram Struktur Organisasi
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <img
                src={strukturData.imageUrl}
                alt="Struktur Organisasi"
                className="rounded-lg border shadow-sm max-w-full h-auto"
              />
            </CardContent>
          </Card>

          {/* Bagian-bagian Organisasi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strukturData.bagian.map((bagian, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-purple-600" />
                    {bagian.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{bagian.description}</p>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <UserCog className="w-5 h-5 text-purple-500" />
                      Anggota
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                      {bagian.members.map((member, i) => (
                        <li key={i}>{member}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
