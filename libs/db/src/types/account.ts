import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { accounts } from '../schema';
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod';

// --------------------- type start ---------------------
//
//
/**
 * Type from account shcema for 'SELECT'
 */
type AccountSelectType = InferSelectModel<typeof accounts>;
/**
 * Type from account shcema for 'INSERT'
 */
type AccountInsertType = InferInsertModel<typeof accounts>;
//
//
// --------------------- type end ---------------------

// --------------------- zod validation start ---------------------
//
//
/**
 * Zod validation from account shcema for 'SELECT'
 */
const AccountSelectZod = createSelectSchema(accounts);
/**
 * Zod validation from account shcema for 'INSERT'
 */
const AccountInsertZod = createInsertSchema(accounts);
/**
 * Zod validation from account shcema for 'UPDATE'
 */
const AccountUpdateZod = createUpdateSchema(accounts);
//
//
// --------------------- zod validation end ---------------------

export {
  type AccountSelectType,
  type AccountInsertType,
  AccountSelectZod,
  AccountInsertZod,
  AccountUpdateZod,
};
