import { UserLogin } from "@/db/users";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      let data = {
        access_token: account.access_token,
        display_name: user.name,
        email: user.email,
        id: user.id,
        image: user.image,
      };
      UserLogin(data);

      return true;
    },
    async session({ session, user }) {
      return session;
    },
  },
  secret:process.env.NEXTAUTH_SECRET
});
