import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { sessions } from '../schema';
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod';

// --------------------- type start ---------------------
//
//
/**
 * Type from session shcema for 'SELECT'
 */
type SessionSelectType = InferSelectModel<typeof sessions>;
/**
 * Type from session shcema for 'INSERT'
 */
type SessionInsertType = InferInsertModel<typeof sessions>;
//
//
// --------------------- type end ---------------------

// --------------------- zod validation start ---------------------
//
//
/**
 * Zod validation from session shcema for 'SELECT'
 */
const SessionSelectZod = createSelectSchema(sessions);
/**
 * Zod validation from session shcema for 'INSERT'
 */
const SessionInsertZod = createInsertSchema(sessions);
/**
 * Zod validation from session shcema for 'UPDATE'
 */
const SessionUpdateZod = createUpdateSchema(sessions);
//
//
// --------------------- zod validation end ---------------------

export {
  type SessionSelectType,
  type SessionInsertType,
  SessionSelectZod,
  SessionInsertZod,
  SessionUpdateZod,
};
