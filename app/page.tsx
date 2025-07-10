import Image from "next/image";
import Link from "next/link";
import { logout } from "./logout/actions";
import DemoClientComponent from "./components/demo-client-component";
import PrivatePage from "./private/page";
import { Button } from "./components/ui/button";
import {
  ShoppingCart,
  User2,
  LogOutIcon,
  Heart,
  MessageCircle,
  ListCheck,
  HomeIcon,
  ShapesIcon,
  MessagesSquareIcon,
  CarFrontIcon,
  CodeXmlIcon,
  CodeSquareIcon,
  CodeIcon,
} from "lucide-react";

interface SearchParams {
  limit?: string | string[];
}

interface PageProps {
  searchParams?: Promise<SearchParams>;
}

export default async function Home({ searchParams }: PageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const pageParam = Array.isArray(resolvedParams.limit)
    ? resolvedParams.limit[0]
    : resolvedParams.limit;

  const currentPage = Number(pageParam) || 1;

  return (
    <>
      <main className="bg-[url('/images/sky1.jpg')] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-gray-900 dark:text-white transition-colors">
        <DemoClientComponent />

        <h1 className="text-4xl sm:text-5xl font-extralight mb-12 text-[#c83373] text-center">
          Welcome to Products Shop App
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
          <Link href="/products" passHref>
            <Button className="bg-[#c83373] cursor-pointer hover:bg-[#b01c5c] text-white text-lg sm:text-xl px-6 py-3 rounded-full flex items-center gap-2">
              <ShoppingCart size={20} />
              Products Shop
            </Button>
          </Link>

          <Link href="/profile" passHref>
            <Button className="bg-[#c83373] cursor-pointer hover:bg-[#b01c5c] text-white text-lg sm:text-xl px-6 py-3 rounded-full flex items-center gap-2">
              <User2 size={20} />
              My Profile
            </Button>
          </Link>

          <form action={logout}>
            <Button
              type="submit"
              className="bg-[#c83373] cursor-pointer hover:bg-[#b01c5c] text-white text-lg sm:text-xl px-6 py-3 rounded-full flex items-center gap-2"
            >
              <LogOutIcon size={20} />
              Logout
            </Button>
          </form>
        </div>

        {/* Wrapper för PrivatePage */}
        <section className="w-full max-w-md bg-white/30 dark:bg-black/40 rounded-xl p-6 shadow-md mb-10 backdrop-blur-md">
          <PrivatePage />
        </section>
      </main>

      <footer className="w-full bg-white/80 dark:bg-black/50 text-sm py-6 px-4 flex flex-wrap justify-center gap-4 text-center">
        {[{ href: "/favorite", icon: <Heart /> }, { href: "/contact", icon: <MessageCircle /> }, { href: "/cart", icon: <ListCheck /> }, { href: "/contact", icon: <HomeIcon /> }, { href: "/contact", icon: <ShapesIcon /> }, { href: "/contact", icon: <MessagesSquareIcon /> }, { href: "/contact", icon: <CarFrontIcon /> }, { href: "/contact", icon: <CodeXmlIcon /> }, { href: "/contact", icon: <CodeSquareIcon /> }, { href: "/contact", icon: <CodeIcon /> }]
          .map((item, index) => (
            <Link key={index} href={item.href} className="flex items-center gap-1 hover:text-[#c83373] transition-colors">
              <Image src="/icons/logo1.png" alt="icon" width={16} height={16} className="inline-block" />
              Go to → {item.icon}
            </Link>
          ))}
                  {/* Display current page number */}
        <h4 className="text-xl text-center">Current Page: {currentPage}</h4>
      </footer>
    </>
  );
}

