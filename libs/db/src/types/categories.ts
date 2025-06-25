import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { categories } from '../schema';
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod';

// --------------------- type start ---------------------
//
//
/**
 * Type from category shcema for 'SELECT'
 */
type CategorySelectType = InferSelectModel<typeof categories>;
/**
 * Type from category shcema for 'INSERT'
 */
type CategoryInsertType = InferInsertModel<typeof categories>;
//
//
// --------------------- type end ---------------------

// --------------------- zod validation start ---------------------
//
//
/**
 * Zod validation from category shcema for 'SELECT'
 */
const CategorySelectZod = createSelectSchema(categories);
/**
 * Zod validation from category shcema for 'INSERT'
 */
const CategoryInsertZod = createInsertSchema(categories);
/**
 * Zod validation from category shcema for 'UPDATE'
 */
const CategoryUpdateZod = createUpdateSchema(categories);
//
//
// --------------------- zod validation end ---------------------

export {
  type CategorySelectType,
  type CategoryInsertType,
  CategorySelectZod,
  CategoryInsertZod,
  CategoryUpdateZod,
};
