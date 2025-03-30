import NextAuth from 'next-auth';
import { RegisterUser } from './lib/API';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user }) {
      try {
        RegisterUser({
          name: user.name!,
          email: user.email!,
          image: user.image!,
        });
        return true;
      } catch (error) {
        console.error('Error registering user:', error);
        return false;
      }
    },
  },
});
