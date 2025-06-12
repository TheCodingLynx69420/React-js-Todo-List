import "./globals.css";

export const metadata = {
  title: "Todo List",
  description: "Made by The Coding Lynx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-white">{children}</body>
    </html>
  );
}
