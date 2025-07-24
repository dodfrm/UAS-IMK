// File: app/routes/fakultas.tsx

import { useState } from "react";
import { Link } from "react-router";
import { GraduationCap, BookOpen, ChevronsRight, ChevronRight, Home } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { fakultasData } from "./data/jurusan";
export default function FakultasPage() {
  const [selectedFakultas, setSelectedFakultas] = useState(fakultasData[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Fakultas dan Program Studi"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Overlay Gradient */}
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
            <span className="text-white font-medium">Fakultas</span>
          </nav>

          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-purple-200" />
          <h1 className="text-5xl font-bold mb-6">
            Fakultas dan Program Studi
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Temukan fakultas dan program studi unggulan kami yang dirancang
            untuk mempersiapkan Anda menghadapi tantangan masa depan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Sidebar: Fakultas List */}
            <aside className="md:col-span-1">
              <div className="p-4 bg-white rounded-lg shadow-md sticky top-24">
                <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                  Daftar Fakultas
                </h2>
                <ul className="space-y-2">
                  {fakultasData.map((fakultas) => (
                    <li key={fakultas.id}>
                      <Button
                        variant={
                          selectedFakultas.id === fakultas.id
                            ? "default"
                            : "ghost"
                        }
                        className="w-full justify-start text-left h-auto"
                        onClick={() => setSelectedFakultas(fakultas)}
                      >
                        {fakultas.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Content: Program List */}
            <main className="md:col-span-3">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedFakultas.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedFakultas.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {selectedFakultas.programs.map((program) => (
                    <Card
                      key={program.slug}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <BookOpen className="h-8 w-8 text-purple-600" />
                          <Badge variant="secondary">{program.level}</Badge>
                        </div>
                        <CardTitle className="text-xl">
                          {program.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Link
                          to={`/fakultas/${selectedFakultas.slug}/${program.slug}`}
                        >
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">
                            Lihat Detail
                            <ChevronsRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
