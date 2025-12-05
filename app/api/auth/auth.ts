import NextAuth, { type NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import type { JWT } from 'next-auth/jwt';
import type { Session } from 'next-auth';

const authOptions: NextAuthConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'openid email profile https://www.googleapis.com/auth/drive.file',
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Store the access token in the JWT token
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Add access token to session
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/upload',
  },
};

export const { auth, signIn, signOut } = NextAuth(authOptions);

