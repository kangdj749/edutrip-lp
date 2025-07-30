import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { FloatingWhatsApp } from '../components/ui/floating-whatsapp';
import { QRISModal } from '../components/ui/qris-modal';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    type: 'personal',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (type: 'personal' | 'partnership') => {
    setFormData({ ...formData, type });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://sheetdb.io/api/v1/YOUR_SHEETDB_API_KEY', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [formData] })
      });
      setSubmitted(true);
    } catch (error) {
      alert('Gagal mengirim. Coba lagi.');
    }
  };

  return (
    <div className="font-sans text-gray-800">
      <header className="bg-gradient-to-br from-red-600 via-white to-red-200 text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-red-800 to-transparent opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold drop-shadow mb-6">HARMONI MERDEKA</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-medium">Cinta Al-Qur'an, Cinta Negeri — EduTrip & Konser Amal 2025</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#form" className="bg-white text-red-600 font-bold px-6 py-3 rounded-full shadow hover:bg-red-100 transition">Donasi Sekarang</a>
            <a
              href={formData.type === 'partnership' ? "/proposal-partnership.pdf" : "/proposal-personal.pdf"}
              download
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition"
            >
              Unduh Proposal
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Tentang Kegiatan</h2>
        <p className="text-lg mb-10 leading-relaxed text-gray-700">EduTrip & Konser Amal dalam rangka HUT RI ke-80 bersama LAZ Graha Dhuafa Indonesia menghadirkan pengalaman edukatif dan seni Islami untuk anak-anak yatim, dhuafa, dan tahfidz.</p>
        <div className="flex flex-wrap justify-center gap-6">
          {["Tour Museum Sri Baduga", "Konser Amal & Penampilan Seni", "Penyaluran donasi dan santunan langsung"].map((item, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl px-6 py-4 w-full sm:w-72 text-gray-800 border border-gray-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Sponsor & Partnership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {['Platinum', 'Gold', 'Silver'].map((level) => (
              <div key={level} className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{level} Sponsor</h3>
                <p className="text-sm text-gray-600">
                  {level === 'Platinum' && 'Logo utama, booth, presentasi, publikasi media, promosi langsung, sertifikat.'}
                  {level === 'Gold' && 'Logo di media publikasi, booth, sebutan acara, promosi langsung, sertifikat.'}
                  {level === 'Silver' && 'Logo media sosial, sertifikat, sebutan saat acara.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Testimoni</h2>
          <div className="space-y-10">
            <blockquote className="text-lg italic text-gray-600 bg-gray-50 p-6 rounded shadow">
              “Acara EduTrip ini luar biasa, menginspirasi anak-anak dan kami sebagai relawan.”<br /><span className="font-semibold">— Relawan 2024</span>
            </blockquote>
            <blockquote className="text-lg italic text-gray-600 bg-gray-50 p-6 rounded shadow">
              “Saya sangat tersentuh melihat senyuman anak-anak tahfidz saat menerima santunan.”<br /><span className="font-semibold">— Donatur</span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Galeri Kegiatan Sebelumnya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <img key={n} src={`/galeri${n}.jpg`} alt={`Kegiatan ${n}`} className="rounded-xl shadow-md hover:scale-105 transition" />
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Form Donatur</h2>
          <Tabs defaultValue="personal" onValueChange={handleTypeChange as any}>
            <TabsList className="mb-6 w-full flex flex-col sm:flex-row justify-center gap-4">
              <TabsTrigger value="personal">Donatur Personal</TabsTrigger>
              <TabsTrigger value="partnership">Partnership / Corporate</TabsTrigger>
            </TabsList>
            <TabsContent value={formData.type}>
              {!submitted ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <Input name="name" placeholder="Nama Lengkap" onChange={handleChange} required />
                  <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                  <Input name="phone" placeholder="Nomor HP / WA" onChange={handleChange} required />
                  <Textarea name="message" placeholder="Pesan atau Dukungan" onChange={handleChange} />
                  <Button type="submit" className="w-full">Kirim Dukungan</Button>
                </form>
              ) : (
                <Card>
                  <CardContent className="text-center py-10">
                    <h3 className="text-xl font-bold mb-2">Terima kasih!</h3>
                    <p className="mb-4">Data Anda sudah kami terima. Silakan unduh proposal dan bagikan semangat ini ke teman-teman Anda.</p>
                    <a
                      href={formData.type === 'partnership' ? "/proposal-partnership.pdf" : "/proposal-personal.pdf"}
                      download
                      className="bg-red-600 text-white px-6 py-2 rounded-full"
                    >
                      Unduh Proposal
                    </a>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
          <FloatingWhatsApp />
          <QRISModal />
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600 bg-gray-100">
        © 2025 LAZ Graha Dhuafa Indonesia · <a href="https://grahadhuafa.org" className="underline">grahadhuafa.org</a>
      </footer>
    </div>
  );
}
