import "./globals.css";

export const metadata = {
  title: "Rehearsal Clock II",
  description: "Clock for Drama Rehearsal by Prawich Thawansakdivudhi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-rose-700 text-lg h-full">
      <body className="h-full p-10">{children}</body>
    </html>
  );
}
