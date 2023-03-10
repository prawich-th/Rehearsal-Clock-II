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
    <html lang="en" className="bg-black p-10 text-rose-700 text-lg h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
