import { sign, SignOptions, verify } from 'jsonwebtoken';

export const signJWT = (
  payload: string | Buffer | object,
  options?: SignOptions
) => {
  return sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET!, options);
};

export function getUserFromToken(token: string): { sub: string } | null {
  try {
    return verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!) as {
      sub: string;
    };
  } catch {
    return null;
  }
}
