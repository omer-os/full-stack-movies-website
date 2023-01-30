"use client";

import { data } from "autoprefixer";
import { useSession } from "next-auth/react";
import { useState } from "react";
import SignInButton from "../other/SignInButton";

export default function AccountDropDown() {
  const { data: session } = useSession();
  const [Box, setBox] = useState(false);

  return (
    <div>
      {session && (
        <div
          onClick={() => setBox(!Box)}
          className="w-10 hover:bg-zinc-800 h-10 rounded-full p-2"
        >
          <img
            className="w-full h-full object-cover rounded-full"
            src={session.user.image}
            alt=""
          />
        </div>
      )}

      {Box && (
        <div className="fixed z-30 sm:top-20 top-16 right-2 bg-black p-4 rounded-lg border border-zinc-800 shadow-xl flex flex-col gap-1 max-w-[20em]">
          <div className="p-2 rounded bg-zinc-900">
            {session && session.user.name}
          </div>
          <div>{session && session.user.email}</div>
          <div>
            <SignInButton />
          </div>
        </div>
      )}
    </div>
  );
}
