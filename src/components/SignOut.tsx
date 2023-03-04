"use clinet";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const SignOut = () => {
  const { data: session, status } = useSession();

  return (
    <Image
      onClick={() => signOut()}
      src={session?.user?.image!}
      alt="profile pic"
      width={50}
      height={50}
      className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
    />
  );
};

export default SignOut;
