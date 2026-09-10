import Link from "next/link";
import Header from "../../../componen/header";

export default function CeritaDetailPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-xl font-normal text-black">Halaman Detail Cerita kami</p>

        <div className="border border-black bg-[#f4f4f4]">
          <Header />

          <div className="grid min-h-[300px] grid-cols-[180px_1fr] border-t border-black">
            <aside className="border-r border-black bg-[#f1f1f1]">
              <Link
                href="/"
                className="block px-4 py-3 text-left text-black hover:bg-white"
              >
                Home
              </Link>
              <Link
                href="/cerita"
                className="block bg-emerald-300 px-4 py-3 text-left text-black font-medium"
              >
                Cerita kami
              </Link>
            </aside>

            <div className="p-4">
              <div className="flex min-h-[200px] items-center justify-center border border-black bg-[#f6f6f6] text-lg text-black">
                <img
                  src="/images/mbg.png"
                  alt="Gambar cerita"
                  className="max-h-[180px] w-auto object-contain"
                />
              </div>

              <div className="mt-5 rounded-none border border-black bg-[#f6f6f6] p-4">
                <p className="mb-2 text-xl font-medium text-black">Judul</p>
                <div className="max-h-[220px] overflow-y-auto pr-2 text-base leading-7 text-black">
                  <p>
                    Detail konten........
                  </p>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="mt-3">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                  </p>
                  <p className="mt-3">
                    Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-14 items-center justify-center border-t border-black text-base text-black">
            footer
          </div>
        </div>
      </div>
    </main>
  );
}
