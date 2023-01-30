"use client";

import { useSession, signIn, signOut } from "next-auth/react";
export default function SignInButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        <button
          className="bg-zinc-800 p-2 rounded active:scale-95 transition-all"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="bg-zinc-800 p-2 rounded active:scale-95 transition-all"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
