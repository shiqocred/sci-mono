export const nodeEnv = process.env.NODE_ENV;
export const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET!;

// admin
export const urlWebAdmin = process.env.NEXT_PUBLIC_ADMIN_URL_WEB!;
export const baseUrlAdmin = `${urlWebAdmin}/api`;

// toko
export const urlWebToko = process.env.NEXT_PUBLIC_TOKO_URL_WEB!;
export const baseUrlToko = `${urlWebToko}/api`;
