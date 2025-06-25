// libs/google.ts
import { OAuth2Client } from 'google-auth-library';

const ANDROID_CLIENT_ID = process.env.ANDROID_GOOGLE_CLIENT_ID!;
const IOS_CLIENT_ID = process.env.IOS_GOOGLE_CLIENT_ID!;

const oauth2Client = new OAuth2Client();

export async function verifyGoogleToken(idToken: string) {
  const ticket = await oauth2Client.verifyIdToken({
    idToken,
    audience: [ANDROID_CLIENT_ID, IOS_CLIENT_ID],
  });

  const payload = ticket.getPayload();

  if (!payload || !payload.email_verified || !payload.email) {
    throw new Error('Invalid Google token');
  }

  return payload;
}
