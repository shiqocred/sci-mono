import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { suppliers } from '../schema';
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod';

// --------------------- type start ---------------------
//
//
/**
 * Type from suppliers shcema for 'SELECT'
 */
type SupplierSelectType = InferSelectModel<typeof suppliers>;
/**
 * Type from suppliers shcema for 'INSERT'
 */
type SupplierInsertType = InferInsertModel<typeof suppliers>;
//
//
// --------------------- type end ---------------------

// --------------------- zod validation start ---------------------
//
//
/**
 * Zod validation from suppliers shcema for 'SELECT'
 */
const SupplierSelectZod = createSelectSchema(suppliers);
/**
 * Zod validation from suppliers shcema for 'INSERT'
 */
const SupplierInsertZod = createInsertSchema(suppliers);
/**
 * Zod validation from suppliers shcema for 'UPDATE'
 */
const SupplierUpdateZod = createUpdateSchema(suppliers);
//
//
// --------------------- zod validation end ---------------------

export {
  type SupplierSelectType,
  type SupplierInsertType,
  SupplierSelectZod,
  SupplierInsertZod,
  SupplierUpdateZod,
};
