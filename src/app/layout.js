import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata = {
  title: "Kopi Nusantara - Kedai Kopi Rumahan",
  description:
    "Kopi Nusantara menghadirkan biji kopi pilihan dari pelosok Indonesia, diseduh langsung setiap hari.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}