import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"], weight: ['400']});

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});


export const metadata = {
  title: "Mood Tracker - NestJS Project",
  description: "Tutorial from https://www.youtube.com/watch?v=lkjrUW8fI40",
};

export default function RootLayout({ children }) {
  
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>
        Mood Tracker
      </h1>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center"> 
      <p className={'text-indigo-500 ' + fugaz.className}> Developed by <a href="https://github.com/aysobay212">@aysobay212</a> via <a href="https://www.youtube.com/watch?v=lkjrUW8fI40&t=1844s">this video</a></p>
    </footer>
  )
  
  
  
  return (
    //text-slate-# adjusts opacity of text(?)
    <html lang="en">
      <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + open_sans.className}>
        
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
