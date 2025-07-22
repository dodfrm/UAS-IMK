// File: app/routes/psdku-detail.tsx

import { Link, useParams } from "react-router";
import { ArrowLeft, BookText, Target, Award, CheckCircle } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { psdkuData } from "./data/psdku";

export default function PSDKUDetailPage() {
  const { locationSlug, programSlug } = useParams();

  // Cari data lokasi dan program studi berdasarkan slug dari URL
  const location = psdkuData.find((loc) => loc.slug === locationSlug);
  const program = location?.programs.find((prog) => prog.slug === programSlug);

  // Tampilkan halaman "Tidak Ditemukan" jika data tidak ada
  if (!location || !program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Program Studi Tidak Ditemukan
          </h1>
          <Link to="/psdku">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali Ke Halaman PSDKU
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/psdku" className="inline-flex items-center text-white hover:text-blue-200 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke semua PSDKU
          </Link>
          <h1 className="text-5xl font-bold">{program.title}</h1>
          <p className="text-2xl mt-2 text-blue-200">{location.name}</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Deskripsi */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookText className="w-6 h-6 text-blue-600" />
                Deskripsi Program Studi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{program.description}</p>
            </CardContent>
          </Card>

          {/* Visi & Misi */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
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
                <Award className="w-6 h-6 text-blue-600" />
                Profil Lulusan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {program.profileLulusan.map((profile, index) => (
                  <li key={index}>{profile}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}