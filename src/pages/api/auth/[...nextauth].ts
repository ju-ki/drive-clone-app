import type{ GithubAuth, GoogleAuth } from "@/Interface";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

import GithubProvider from "next-auth/providers/github"



export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GithubProvider(({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      } as GithubAuth)),
      // ...add more providers here
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      } as GoogleAuth)
    ],
  }
  export default NextAuth(authOptions)
