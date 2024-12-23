/* eslint-disable @typescript-eslint/no-explicit-any */


import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: any) {
      session.user.id = token.sub; // Adiciona o ID do usuário no objeto `session`
      return session;
    },
  },
};
