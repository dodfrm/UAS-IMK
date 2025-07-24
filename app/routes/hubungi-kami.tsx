// File: app/routes/hubungi-kami.tsx

import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  ChevronsRight,
  ChevronRight,
  Home,
} from "lucide-react";
import { Link } from "react-router";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

const contactDetails = [
  {
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    title: "Telepon",
    value: "(021) 8009063",
    href: "tel:+62218009063",
  },
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: "Email",
    value: "bsi@bsi.ac.id",
    href: "mailto:bsi@bsi.ac.id",
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
    title: "Alamat Utama",
    value: "Jl. Kramat Raya No. 98, Senen, Jakarta Pusat",
    href: "https://maps.app.goo.gl/3fX3yJgG4z2xYxJz8",
  },
];

const socialLinks = [
    { icon: <Facebook />, name: 'Facebook', href: '#' },
    { icon: <Twitter />, name: 'Twitter', href: '#' },
    { icon: <Instagram />, name: 'Instagram', href: '#' },
]

export default function HubungiKamiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-blue-200 mb-6">
            <Link to="/" className="hover:text-white flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white font-medium">Hubungi Kami</span>
          </nav>
          <Mail className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Kami siap membantu. Silakan hubungi kami melalui detail kontak di
            bawah atau kirimkan pesan melalui formulir.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Kolom Kiri: Info Kontak */}
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">{detail.icon}</div>
                      <div>
                        <h3 className="font-semibold">{detail.title}</h3>
                        <a
                          href={detail.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                          {detail.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Media Sosial</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-around">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-blue-600 transition-colors"
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Kolom Kanan: Formulir Kontak */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Alamat Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="johndoe@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan Anda</Label>
                      <Textarea
                        id="message"
                        placeholder="Tuliskan pesan Anda di sini..."
                        rows={6}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Kirim Pesan
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Peta */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Lokasi Kami di Peta
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666427188168!2d106.8483833153592!3d-6.175392462231175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x5f2a54a20d0c6486!2sUniversitas%20Bina%20Sarana%20Informatika%20(UBSI)%20Kampus%20Kramat%2098!5e0!3m2!1sen!2sid!4v1678886915357!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}