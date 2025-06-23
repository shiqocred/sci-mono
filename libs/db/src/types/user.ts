import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { users } from '../schema';
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod';

// --------------------- type start ---------------------
//
//
/**
 * Type from user shcema for 'SELECT'
 */
type UserSelectType = InferSelectModel<typeof users>;
/**
 * Type from user shcema for 'INSERT'
 */
type UserInsertType = InferInsertModel<typeof users>;
//
//
// --------------------- type end ---------------------

// --------------------- zod validation start ---------------------
//
//
/**
 * Zod validation from user shcema for 'SELECT'
 */
const UserSelectZod = createSelectSchema(users);
/**
 * Zod validation from user shcema for 'INSERT'
 */
const UserInsertZod = createInsertSchema(users);
/**
 * Zod validation from user shcema for 'UPDATE'
 */
const UserUpdateZod = createUpdateSchema(users);
//
//
// --------------------- zod validation end ---------------------

export {
  type UserSelectType,
  type UserInsertType,
  UserSelectZod,
  UserInsertZod,
  UserUpdateZod,
};
