import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { products } from '../schema';
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod';

// --------------------- type start ---------------------
//
//
/**
 * Type from products shcema for 'SELECT'
 */
type ProductsSelectType = InferSelectModel<typeof products>;
/**
 * Type from products shcema for 'INSERT'
 */
type ProductsInsertType = InferInsertModel<typeof products>;
//
//
// --------------------- type end ---------------------

// --------------------- zod validation start ---------------------
//
//
/**
 * Zod validation from products shcema for 'SELECT'
 */
const ProductsSelectZod = createSelectSchema(products);
/**
 * Zod validation from products shcema for 'INSERT'
 */
const ProductsInsertZod = createInsertSchema(products);
/**
 * Zod validation from products shcema for 'UPDATE'
 */
const ProductsUpdateZod = createUpdateSchema(products);
//
//
// --------------------- zod validation end ---------------------

export {
  type ProductsSelectType,
  type ProductsInsertType,
  ProductsSelectZod,
  ProductsInsertZod,
  ProductsUpdateZod,
};
