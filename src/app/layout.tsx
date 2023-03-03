import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/Login";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-gray-900 max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>

              {/* ClientProvider */}

              <div className="flex-1 bg-slate-800">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
