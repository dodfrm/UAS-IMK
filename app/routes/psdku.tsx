// File: app/routes/psdku.tsx

import { useState } from "react";
import { Link } from "react-router";
import { Building, BookOpen, ChevronsRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { psdkuData } from "./data/psdku";

export default function PSDKUPage() {
  const [selectedLocation, setSelectedLocation] = useState(psdkuData[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-5xl font-bold mb-6">
            Program Studi di Luar Kampus Utama (PSDKU)
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Temukan program studi unggulan kami yang tersebar di berbagai kota,
            mendekatkan pendidikan berkualitas ke lokasi Anda.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Sidebar: Location List */}
            <aside className="md:col-span-1">
              <div className="p-4 bg-white rounded-lg shadow-md sticky top-24">
                <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                  Lokasi Kampus PSDKU
                </h2>
                <ul className="space-y-2">
                  {psdkuData.map((location) => (
                    <li key={location.id}>
                      <Button
                        variant={
                          selectedLocation.id === location.id
                            ? "default"
                            : "ghost"
                        }
                        className="w-full justify-start text-left h-auto"
                        onClick={() => setSelectedLocation(location)}
                      >
                        {location.name}
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
                  {selectedLocation.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  Berikut adalah daftar program studi yang tersedia di lokasi ini.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {selectedLocation.programs.map((program) => (
                    <Card
                      key={program.slug}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <BookOpen className="h-8 w-8 text-blue-600" />
                          <Badge variant="secondary">{program.level}</Badge>
                        </div>
                        <CardTitle className="text-xl">{program.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Link
                          to={`/psdku/${selectedLocation.slug}/${program.slug}`}
                        >
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
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