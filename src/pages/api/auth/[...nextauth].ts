import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],

  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
