import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 shadow-md">
    <h1 className="text-2xl font-bold">Valvora</h1>
    <div className="space-x-4">
      <Link to="/">Ana Sayfa</Link>
      <Link to="/hakkimizda">Hakkımızda</Link>
      <Link to="/urunler">Ürünler</Link>
      <Link to="/hizmetler">Hizmetler</Link>
      <Link to="/iletisim">İletişim</Link>
    </div>
  </nav>
);

const AnaSayfa = () => (
  <div className="p-6 text-center">
    <h2 className="text-3xl font-semibold mb-4">Lüks Giyimin Yeni Adı: Valvora</h2>
    <p>Modern tasarım ve zarafeti bir araya getiren özel koleksiyonlarımızı keşfedin.</p>
  </div>
);

const Hakkimizda = () => (
  <div className="p-6">
    <h2 className="text-2xl font-semibold mb-2">Hakkımızda</h2>
    <p>Valvora, kaliteli ve şık giyimin simgesidir. Modern şehirli kadının ve erkeğin tarzını yansıtan koleksiyonlarımızla moda dünyasında yerimizi aldık.</p>
  </div>
);

const Urunler = () => (
  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[1,2,3,4,5,6].map((id) => (
      <div key={id} className="p-4 border rounded shadow">
        <h3 className="font-medium">Ürün {id}</h3>
        <p>Ürün açıklaması ve fiyat bilgisi buraya gelecek.</p>
      </div>
    ))}
  </div>
);

const Hizmetler = () => (
  <div className="p-6">
    <h2 className="text-2xl font-semibold mb-2">Hizmetlerimiz</h2>
    <ul className="list-disc list-inside">
      <li>Kişiye özel tasarım danışmanlığı</li>
      <li>Online stil önerisi</li>
      <li>Hızlı ve güvenli kargo</li>
    </ul>
  </div>
);

const Iletisim = () => (
  <div className="p-6">
    <h2 className="text-2xl font-semibold mb-2">İletişim</h2>
    <p>Bize ulaşmak için info@valvora.com adresine e-posta gönderebilir veya aşağıdaki formu kullanabilirsiniz.</p>
    <form className="mt-4 space-y-4">
      <input className="border p-2 w-full" type="text" placeholder="Adınız" />
      <input className="border p-2 w-full" type="email" placeholder="E-posta" />
      <textarea className="border p-2 w-full" placeholder="Mesajınız" rows="4"></textarea>
      <button className="bg-black text-white px-4 py-2 rounded" type="submit">Gönder</button>
    </form>
  </div>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/urunler" element={<Urunler />} />
        <Route path="/hizmetler" element={<Hizmetler />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
    </Router>
  );
}
