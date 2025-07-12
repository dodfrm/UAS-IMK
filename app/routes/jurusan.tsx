import { Link } from "react-router";
import {
  ArrowLeft,
  Clock,
  BookOpen,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import type { Route } from "./+types/jurusan";
import { fakultasData } from "./data/jurusan";

export async function loader({ params }: Route.LoaderArgs) {
  const fakultasSlug  = params.fakultasSlug;
  return { fakultasSlug };
}

export default function ProgramDetail( { loaderData }: Route.ComponentProps) {
  const fakultasSlug  = loaderData.fakultasSlug;

  const fakultas = fakultasData[fakultasSlug as keyof typeof fakultasData];

  if (!fakultas) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Fakultas Tidak Ditemukan
          </h1>
          <Link to="/fakultas">
            <Button>Kembali Ke Halaman Fakultas</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/fakultas">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali Ke Fakultas
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">{fakultas.title}</h1>
            <p className="text-xl leading-relaxed">{fakultas.description}</p>
          </div>
        </div>
      </section>

      {/* Program List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Program Studi</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(fakultas.programs).map(([slug, program]) => (
              <Card key={slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <Badge className="w-fit">{program.level}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{program.credits}</span>
                  </div>
                  <Link to={`/fakultas/${fakultasSlug}`}>
                    <Button variant="link" className="pl-0 mt-4">
                      Lihat Detail Program
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
