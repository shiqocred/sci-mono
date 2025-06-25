import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { productBatches } from '../schema';
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod';

// --------------------- type start ---------------------
//
//
/**
 * Type from product-batch shcema for 'SELECT'
 */
type ProductBatchSelectType = InferSelectModel<typeof productBatches>;
/**
 * Type from product-batch shcema for 'INSERT'
 */
type ProductBatchInsertType = InferInsertModel<typeof productBatches>;
//
//
// --------------------- type end ---------------------

// --------------------- zod validation start ---------------------
//
//
/**
 * Zod validation from product-batch shcema for 'SELECT'
 */
const ProductBatchSelectZod = createSelectSchema(productBatches);
/**
 * Zod validation from product-batch shcema for 'INSERT'
 */
const ProductBatchInsertZod = createInsertSchema(productBatches);
/**
 * Zod validation from product-batch shcema for 'UPDATE'
 */
const ProductBatchUpdateZod = createUpdateSchema(productBatches);
//
//
// --------------------- zod validation end ---------------------

export {
  type ProductBatchSelectType,
  type ProductBatchInsertType,
  ProductBatchSelectZod,
  ProductBatchInsertZod,
  ProductBatchUpdateZod,
};
