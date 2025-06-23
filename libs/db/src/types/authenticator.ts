import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { authenticators } from '../schema';
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod';

// --------------------- type start ---------------------
//
//
/**
 * Type from authenticator shcema for 'SELECT'
 */
type AuthenticatorSelectType = InferSelectModel<typeof authenticators>;
/**
 * Type from authenticator shcema for 'INSERT'
 */
type AuthenticatorInsertType = InferInsertModel<typeof authenticators>;
//
//
// --------------------- type end ---------------------

// --------------------- zod validation start ---------------------
//
//
/**
 * Zod validation from authenticator shcema for 'SELECT'
 */
const AuthenticatorSelectZod = createSelectSchema(authenticators);
/**
 * Zod validation from authenticator shcema for 'INSERT'
 */
const AuthenticatorInsertZod = createInsertSchema(authenticators);
/**
 * Zod validation from authenticator shcema for 'UPDATE'
 */
const AuthenticatorUpdateZod = createUpdateSchema(authenticators);
//
//
// --------------------- zod validation end ---------------------

export {
  type AuthenticatorSelectType,
  type AuthenticatorInsertType,
  AuthenticatorSelectZod,
  AuthenticatorInsertZod,
  AuthenticatorUpdateZod,
};
