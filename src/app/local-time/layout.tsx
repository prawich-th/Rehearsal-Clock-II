export const metadata = {
  title: "Clocks | Rehearsal Clock",
  description: "Clock for Drama Rehearsal by Prawich Thawansakdivudhi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en" className="text-rose-700 text-lg flex items-center h-full">
      <main>{children}</main>
    </div>
  );
}
