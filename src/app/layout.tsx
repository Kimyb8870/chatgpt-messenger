import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
          {/* Sidebar */}

          {/* ClientProvider */}
          <div className="flex-1 bg-slate-800">{children}</div>
        </div>
      </body>
    </html>
  );
}
