// File: app/routes/fakultas-detail.tsx

import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  BookText,
  Target,
  Award,
  CheckCircle,
  GraduationCap,
  ChevronRight,
  Home,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { fakultasData } from "./data/jurusan";

export default function FakultasDetailPage() {
  const { fakultasSlug, programSlug } = useParams();

  // Find faculty and program data based on URL slugs
  const fakultas = fakultasData.find((fak) => fak.slug === fakultasSlug);
  const program = fakultas?.programs.find((prog) => prog.slug === programSlug);

  // Show "Not Found" page if data doesn't exist
  if (!fakultas || !program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Program Studi Tidak Ditemukan
          </h1>
          <Link to="/fakultas">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali Ke Halaman Fakultas
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Program Studi"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 mix-blend-multiply" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-blue-200 mb-6">
            <Link to="/" className="hover:text-white flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/fakultas" className="hover:text-white">
              Fakultas
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/fakultas" className="hover:text-white">
              {fakultas.name}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white font-medium">{program.title}</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="h-10 w-10 text-purple-200" />
            <h1 className="text-5xl font-bold">{program.title}</h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="px-3 py-1 bg-purple-700 rounded-full text-sm w-fit">
              {program.level}
            </span>
            <p className="text-xl text-purple-200">{fakultas.name}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Deskripsi */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookText className="w-6 h-6 text-purple-600" />
                Deskripsi Program Studi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {program.description}
              </p>
            </CardContent>
          </Card>

          {/* Visi & Misi */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-600" />
                Visi & Misi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">Visi</h3>
                <p className="text-gray-700 italic">"{program.visi}"</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Misi</h3>
                <ul className="space-y-2">
                  {program.misi.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Profil Lulusan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-600" />
                Profil Lulusan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.profileLulusan.map((profile, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{profile}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
