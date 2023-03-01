import Sidebar from "@/components/Sidebar";
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
          <div className="bg-gray-900 max-w-xs h-screen overflow-auto md:min-w-[20rem]">
            <Sidebar />
          </div>
          {/* ClientProvider */}
          <div className="flex-1 bg-slate-800">{children}</div>
        </div>
      </body>
    </html>
  );
}
