import { QueryClient } from '@tanstack/react-query';
import { baseUrlAdmin } from '@tainext/utils';

export function buildUrl(endpoint: string, searchParams?: Record<string, any>) {
  const url = new URL(baseUrlAdmin + endpoint);
  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });
  }
  return url.toString();
}

export function isRecord(value: any): value is Record<string, any> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 *
 * @param key bakal di buat sesuai jumlah key
 * @example
 * ```tsx
 *    invalidateQuery([["key-a"], ["key-b"]]);
 * ```
 * dan akan di generate seperti ini
 * ```tsx
 *    queryClient.invalidateQueries({ queryKey: ["key-a"] })
 *    queryClient.invalidateQueries({ queryKey: ["key-b"] })
 * ```
 */
export const invalidateQuery = (queryClient: QueryClient, keys: string[][]) => {
  keys.forEach((key) => queryClient.invalidateQueries({ queryKey: key }));
};
