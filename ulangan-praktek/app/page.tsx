import Link from "next/link";
import Header from "../componen/header";

export default function Home() {
  return (
    <div className="site-frame gap-0">
      <Header currentPage="home" />
      <main className="page-main dashboard-page">
        <section className="dashboard-hero">
          <video
            className="dashboard-video"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/Livebg/vidssave.com%20Mythical%20Glory%20to%20Mythical%20Immortal%20Rank%20Animation%20(New%20Update%20S31)%20-%20Mobile%20Legends%20Bang%20Bang%201080P.mp4" type="video/mp4" />
          </video>
          <div className="dashboard-overlay" />
          <div className="dashboard-hero-content">
            <p className="page-kicker hero-reveal hero-reveal-one">Halaman dashboard</p>
            <h1 className="page-title hero-reveal hero-reveal-two">Dashboard buat yang udah imo</h1>
            <p className="page-intro hero-reveal hero-reveal-three">lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nunc nisl eget nunc.</p>
          </div>
        </section>
        <section className="dashboard-layout">
          <p className="side-label">Selamat datang</p>
          <div className="welcome-panel">
            <h2>Cerita disini aja.</h2>
            <p>enjoy ur life.</p>
            <Link className="text-link" href="/cerita">Lihat semua cerita <span aria-hidden="true">-&gt;</span></Link>
          </div>
        </section>
      </main>
      <footer className="site-footer"><span>Intinya Pengalaman</span><span>Catatan pribadi, 2026</span></footer>
    </div>
  );
}
