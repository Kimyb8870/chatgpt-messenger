"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import NewChat from "./NewChat";
import SignOut from "./SignOut";

const Sidebar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* ModelSelection */}</div>

          {/* Map through the chatRows */}
        </div>
      </div>

      {session && <SignOut />}
    </div>
  );
};

export default Sidebar;
