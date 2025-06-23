// src/lib/query/error-response.ts
import { toast } from 'sonner';
import { ErrorResposeType } from '@tainext/utils';

/**
 * Handles error response and shows a toast notification.
 */
export const errorResponse = ({ err, message, title }: ErrorResposeType) => {
  if (err.status === 403) {
    toast.error(`Error 403: Restricted Access`);
  } else {
    toast.error(
      `ERROR ${err?.status}: ${
        (err?.response?.data as any)?.data?.message ?? message
      }`
    );
    console.log(`ERROR_${title}:`, err);
  }
};
