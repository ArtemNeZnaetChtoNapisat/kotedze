import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})

//9cd4caab9c0e3c2a4ceb
//6da82ceb69e2c4b3e8b3987249802d488ca1bba9