import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
  currentPage?: 'home' | 'cerita';
};

const Header = ({ currentPage }: HeaderProps) => {
 return (
  <header className="site-header">
     <nav className="container mx-auto flex justify-between items-center rounded-full">
      <Link href="/" className="brand">
         <Image
           src="/Images/PP.png"
           alt="Foto profil"
           width={44}
           height={44}
           className="h-11 w-11 rounded-full object-cover ring-2 ring-white/70"
         />
         Ulangan Praktek
       </Link>
      <ul className="top-nav">
         <li>
           <Link href="/" aria-current={currentPage === 'home' ? 'page' : undefined}>
             Home
           </Link>
         </li>
         <li>
           <Link href="/cerita" aria-current={currentPage === 'cerita' ? 'page' : undefined}>
             Cerita
           </Link>
         </li>
       </ul>
     </nav>
   </header>
 );
};

export default Header;