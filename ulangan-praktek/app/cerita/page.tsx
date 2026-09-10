import Link from "next/link";
import { pengalaman } from "../../data/pengalaman";
import Header from "../../componen/header";

export default function CeritaPage() {
  return (
    <div className="site-frame">
      <Header currentPage="cerita" />
      <main className="page-main cerita-page">
        <p className="page-kicker">Halaman cerita</p>
        <h1 className="page-title">cerita gwa</h1>
        <div className="content-layout">
          <p className="side-label">tipis tipis</p>
          <section className="story-grid" aria-label="Daftar pengalaman">
            {pengalaman.map((item, index) => (
              <article className="story-card" key={item.id}>
                <div className="story-art">Catatan {String(index + 1).padStart(2, "0")}</div>
                <div className="story-info">
                  <h2>{item.title}</h2>
                  <p className="story-date">{item.date} / {item.label}</p>
                  <p>{item.excerpt}</p>
                  <Link className="text-link" href={`/cerita/${item.id}`}>Baca cerita <span aria-hidden="true">-&gt;</span></Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      <footer className="site-footer"><span>Intinya Pengalaman</span><span>Catatan pribadi, 2026</span></footer>
    </div>
  );
}