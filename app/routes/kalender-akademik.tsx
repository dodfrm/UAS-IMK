import { useState } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Filter,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { academicEvents, categories } from "./data/event";

export default function AcademicCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedCategory, setSelectedCategory] = useState("all");

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find((c) => c.value === category);
    return cat ? cat.color : "bg-gray-100 text-gray-800";
  };

  const getCategoryLabel = (category: string) => {
    const cat = categories.find((c) => c.value === category);
    return cat ? cat.label : category;
  };

  const filteredEvents = academicEvents.filter(
    (event) => selectedCategory === "all" || event.category === selectedCategory
  );

  const getEventsForMonth = (month: number, year: number) => {
    return filteredEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === month && eventDate.getFullYear() === year;
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatDateRange = (startDate: string, endDate?: string) => {
    if (!endDate) return formatDate(startDate);

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (
      start.getMonth() === end.getMonth() &&
      start.getFullYear() === end.getFullYear()
    ) {
      return `${start.getDate()} - ${end.getDate()} ${start.toLocaleDateString(
        "id-ID",
        { month: "long", year: "numeric" }
      )}`;
    }

    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const currentMonthEvents = getEventsForMonth(selectedMonth, selectedYear);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-5xl font-bold mb-6">Kalender Akademik</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Jadwal lengkap kegiatan akademik BSI University tahun 2024/2025.
              Tetap update dengan semua kegiatan penting kampus.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <span className="font-medium text-gray-700">
                  Filter Kategori:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.value
                        ? category.color
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Navigation */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              onClick={prevMonth}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
              Bulan Sebelumnya
            </Button>

            <h2 className="text-3xl font-bold text-gray-900">
              {months[selectedMonth]} {selectedYear}
            </h2>

            <Button
              variant="outline"
              onClick={nextMonth}
              className="flex items-center gap-2 bg-transparent"
            >
              Bulan Selanjutnya
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Events for Selected Month */}
          <div className="space-y-6">
            {currentMonthEvents.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tidak ada kegiatan di bulan ini
                  </h3>
                  <p className="text-gray-600">
                    Pilih bulan lain atau ubah filter kategori untuk melihat
                    kegiatan lainnya.
                  </p>
                </CardContent>
              </Card>
            ) : (
              currentMonthEvents.map((event) => (
                <Card
                  key={event.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={getCategoryColor(event.category)}>
                            {getCategoryLabel(event.category)}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {event.type === "multi-day"
                              ? "Multi-hari"
                              : "Satu hari"}
                          </span>
                        </div>
                        <CardTitle className="text-xl text-gray-900">
                          {event.title}
                        </CardTitle>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                          <Clock className="h-4 w-4" />
                          {formatDateRange(event.date, event.endDate)}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Academic Year Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tahun Akademik 2024/2025
            </h2>
            <p className="text-xl text-gray-600">
              Ringkasan periode akademik dan kegiatan utama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Semester Ganjil */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-indigo-900">
                  Semester Ganjil
                </CardTitle>
                <p className="text-center text-gray-600">
                  Agustus 2024 - Januari 2025
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold">Perkuliahan</h4>
                    <p className="text-sm text-gray-600">
                      26 Agustus - 15 Desember 2024
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">Ujian Tengah Semester</h4>
                    <p className="text-sm text-gray-600">
                      21 Oktober - 1 November 2024
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">Ujian Akhir Semester</h4>
                    <p className="text-sm text-gray-600">
                      16 - 27 Desember 2024
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold">Libur Semester</h4>
                    <p className="text-sm text-gray-600">
                      6 Januari - 9 Februari 2025
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Semester Genap */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-indigo-900">
                  Semester Genap
                </CardTitle>
                <p className="text-center text-gray-600">
                  Februari - Juli 2025
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold">Perkuliahan</h4>
                    <p className="text-sm text-gray-600">
                      10 Februari - 8 Juni 2025
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">Ujian Tengah Semester</h4>
                    <p className="text-sm text-gray-600">7 - 18 April 2025</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">Ujian Akhir Semester</h4>
                    <p className="text-sm text-gray-600">9 - 20 Juni 2025</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold">Wisuda</h4>
                    <p className="text-sm text-gray-600">12 Juli 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-l-4 border-indigo-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-indigo-600" />
                Catatan Penting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Jadwal dapat berubah sewaktu-waktu sesuai dengan kebijakan
                    universitas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Mahasiswa wajib mengikuti semua kegiatan akademik yang telah
                    dijadwalkan
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Informasi terbaru akan diumumkan melalui website resmi dan
                    sistem informasi akademik
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Untuk informasi lebih lanjut, hubungi Bagian Akademik di
                    setiap fakultas
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
