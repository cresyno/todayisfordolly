import "./globals.css";

export const metadata = {
  title: "Today Is For Dolly ❤️",
  description: "A birthday gift for Oyedeji Queen Omoloye.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
