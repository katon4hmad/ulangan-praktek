import Link from "next/link";
import { notFound } from "next/navigation";
import { pengalaman } from "../../../data/pengalaman";
import Header from "../../../componen/header";

export function generateStaticParams() {
  return pengalaman.map((item) => ({ id: item.id }));
}

export default async function DetailCeritaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = pengalaman.find((story) => story.id === id);

  if (!item) notFound();

  return (
    <div className="site-frame">
      <Header currentPage="cerita" />
      <main className="page-main">
        <p className="page-kicker">Halaman detail cerita kami</p>
        <div className="content-layout">
          <p className="side-label">{item.label}</p>
          <article className="detail-card">
            <div className="detail-art"><span>Pengalaman / {item.date}</span></div>
            <div className="detail-copy">
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <Link className="back-link" href="/cerita">&lt;- Kembali ke semua cerita</Link>
            </div>
          </article>
        </div>
      </main>
      <footer className="site-footer"><span>Ruang Pengalaman</span><span>Catatan pribadi, 2026</span></footer>
    </div>
  );
}