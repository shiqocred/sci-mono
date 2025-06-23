import { db } from '@tainext/db';
import { verify } from 'argon2';

export async function authorizeWithCredentials(
  email: string,
  password: string
) {
  const user = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.email, email),
  });

  if (!user || !user.password) return null;

  const isValid = await verify(user.password, password);

  if (!isValid) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}
