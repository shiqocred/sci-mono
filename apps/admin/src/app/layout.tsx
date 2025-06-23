import QueryProviders from '../providers/query-provider';
import { ToastProvider } from '../providers/toast-provider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import './global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Admin SCI',
    default: 'Admin - Sehat Cerah Indonesia', // a default is required when creating a template
  },
  description: 'Toko pakan hewan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProviders>
          <NuqsAdapter>
            <ToastProvider />
            {children}
          </NuqsAdapter>
        </QueryProviders>
      </body>
    </html>
  );
}
