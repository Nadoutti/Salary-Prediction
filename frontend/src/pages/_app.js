import { useEffect } from "react";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import "../styles/typewriter_style.css"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showSidebar = !router.pathname.startsWith("/auth");



  return (
    <div className="flex">
      <main className= "p-6 bg-gray-100 min-h-screen w-full">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
