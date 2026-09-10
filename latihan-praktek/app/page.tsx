import Link from "next/link";
import Header from "../componen/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="min-h-screen">
        <div className="flex min-h-screen flex-col bg-[#f4f4f4]">
          <Header />

          <div className="relative flex-1 overflow-hidden border-t border-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/livebg/livewp.mp4" type="video/mp4" />
            </video>
            <div className="text-fade flex min-h-65 items-center justify-center p-5 text-center text-2xl font-bold text-white">
              welcome to my project
            </div>
          </div>

          <footer className="flex flex-col gap-3 border-t border-black bg-pink-100 px-6 py-5 text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Website Pribadi</p>
              <p className="text-sm">Berbagi cerita dan pengalaman.</p>
            </div>
            <div className="flex gap-4 text-sm">
              <div>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </div>
              <div>
                <Link href="/cerita" className="hover:underline">
                  Cerita kami
                </Link>
              </div>
            </div>
            <p className="text-sm">© 2026 El_Katon</p>
          </footer>
        </div>
      </div>

      <div className="group fixed left-0 top-0 z-10 h-40 w-48">
        <span className="absolute left-0 top-0 h-3 w-3 bg-pink-200" />
        <aside className="absolute left-0 top-0 flex w-48 -translate-x-full flex-col gap-3 p-2 transition-transform duration-200 group-hover:translate-x-0">
          <Link
            href="/"
            className="block rounded-full border bg-emerald-300 px-4 py-3 text-left font-medium text-black"
          >
            Home
          </Link>
          <Link
            href="/cerita"
            className="block rounded-full border bg-white px-4 py-3 text-left text-black hover:bg-emerald-200"
          >
            Cerita kami
          </Link>
        </aside>
      </div>
    </main>
  );
}
