import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db, accounts, sessions, users, verificationTokens } from '@tainext/db';
import { authorizeWithCredentials } from '../login';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        user = await authorizeWithCredentials(
          credentials.email as string,
          credentials.password as string
        );

        if (!user) {
          throw new Error('Invalid credentials.');
        }

        return user;
      },
    }),
  ],
});
