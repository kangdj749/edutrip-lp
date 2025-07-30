'use client';

import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Alert } from '../components/ui/alert';
import { Modal } from '../components/ui/modal';
import { FloatingWhatsApp } from '../components/ui/floating-whatsapp';
import { QRISModal } from '../components/ui/qris-modal';

export default function ComponentsPreview() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">🔧 UI Components Preview</h1>

      {/* Button */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Button</h2>
        <Button onClick={() => alert('Tombol diklik!')}>Klik Saya</Button>
      </section>

      {/* Input & Textarea */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Form</h2>
        <Input placeholder="Nama lengkap" />
        <Textarea placeholder="Tulis pesan atau catatan..." />
      </section>

      {/* Badge */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Badge</h2>
        <Badge>Baru</Badge>
      </section>

      {/* Alert */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Alert</h2>
        <Alert title="Kesalahan" message="Data tidak lengkap atau salah." />
      </section>

      {/* Card */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Card</h2>
        <Card>
          <CardContent>
            <h3 className="font-bold text-lg mb-1">Judul Program</h3>
            <p className="text-gray-600">Deskripsi singkat program atau informasi yang ingin disampaikan dalam card.</p>
          </CardContent>
        </Card>
      </section>

      {/* Modal */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>Buka Modal</Button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h3 className="text-lg font-bold mb-2">Ini adalah Modal</h3>
          <p className="text-gray-700">Konten dalam modal bisa berupa informasi penting atau formulir popup.</p>
        </Modal>
      </section>

      {/* Floating Components */}
      <FloatingWhatsApp />
      <QRISModal />
    </div>
  );
}
