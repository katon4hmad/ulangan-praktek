import Link from "next/link";
import Header from "../../componen/header";

export default function CeritaPage() {
  const stories = [
    { id: 1, title: "Judul cerita" },
    { id: 2, title: "Judul cerita" },
    { id: 3, title: "Judul cerita" },
    { id: 4, title: "Judul cerita" },
  ];

  return (
    <main className="min-h-screen">
      <div className="min-h-screen">
        <div className="flex min-h-screen flex-col bg-[#f4f4f4]">
          <Header />

          <div className="flex-1 border-t border-black">
            <div className="p-4">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stories.map((story) => (
                  <article
                    key={story.id}
                    className="flex min-h-full flex-col border border-black bg-[#f6f6f6]"
                  >
                    <div className="flex h-28 items-center justify-center border-b border-black bg-[#f3f3f3] text-center text-lg text-black">
                      image
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-3 text-center text-black">
                      <p className="text-base font-medium">{story.title}</p>
                      <div className="mt-4">
                        <Link
                          href="/cerita/detail"
                          className="inline-block bg-transparent px-2 py-1 text-sm underline hover:no-underline"
                        >
                          baca
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <footer className="flex flex-col gap-3 border-t border-black bg-pink-100 px-6 py-5 text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Website Pribadi</p>
              <p className="text-sm">Berbagi cerita dan pengalaman.</p>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/cerita" className="hover:underline">
                Cerita kami
              </Link>
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
            className="block rounded-full border bg-white px-4 py-3 text-left text-black hover:bg-emerald-200"
          >
            Home
          </Link>
          <Link
            href="/cerita"
            className="block rounded-full border bg-emerald-300 px-4 py-3 text-left font-medium text-black"
          >
            Cerita kami
          </Link>
        </aside>
      </div>
    </main>
  );
}
