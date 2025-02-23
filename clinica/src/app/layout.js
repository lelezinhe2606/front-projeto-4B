import "./globals.css";
import Header from "@/components/Header"


export const metadata = {
  title: "Clínica Amor e Saúde",
  description: "clinica",
  charset: 'UTF-8',
  author: 'Leticia',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main" >
          {children}
        </main>
        {}
      </body>

    </html>
  );
}
