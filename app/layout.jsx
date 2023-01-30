import NavBar from "@/coms/NavBar";
import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-black text-white max-w-screen">
        <Providers>
          <NavBar />
          {children}
        </Providers>

        <div className="fixed bottom-0 left-0 text-xs font-bold z-50 p-1">
          <div className="bg-zinc-900">Website under development</div>
        </div>
      </body>
    </html>
  );
}
