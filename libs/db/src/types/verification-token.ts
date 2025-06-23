import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { verificationTokens } from '../schema';
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod';

// --------------------- type start ---------------------
//
//
/**
 * Type from verification token shcema for 'SELECT'
 */
type VerificationTokenSelectType = InferSelectModel<typeof verificationTokens>;
/**
 * Type from verification token shcema for 'INSERT'
 */
type VerificationTokenInsertType = InferInsertModel<typeof verificationTokens>;
//
//
// --------------------- type end ---------------------

// --------------------- zod validation start ---------------------
//
//
/**
 * Zod validation from verification token shcema for 'SELECT'
 */
const VerificationTokenSelectZod = createSelectSchema(verificationTokens);
/**
 * Zod validation from verification token shcema for 'INSERT'
 */
const VerificationTokenInsertZod = createInsertSchema(verificationTokens);
/**
 * Zod validation from verification token shcema for 'UPDATE'
 */
const VerificationTokenUpdateZod = createUpdateSchema(verificationTokens);
//
//
// --------------------- zod validation end ---------------------

export {
  type VerificationTokenSelectType,
  type VerificationTokenInsertType,
  VerificationTokenSelectZod,
  VerificationTokenInsertZod,
  VerificationTokenUpdateZod,
};
