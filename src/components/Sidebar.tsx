"use client";
import { useSession } from "next-auth/react";
import NewChat from "@/components/NewChat";
import SignOut from "@/components/SignOut";
import ChatRow from "@/components/ChatRow";
import ModelSelection from "@/components/ModelSelection";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const Sidebar = () => {
  const { data: session, status } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animation-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}

            {/* Map through the chatRows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session && <SignOut />}
    </div>
  );
};

export default Sidebar;
