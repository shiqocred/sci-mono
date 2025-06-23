import { Metadata } from 'next';
import { ContainerPage } from '../../../components/container-page';
import React from 'react';
import { redirect } from 'next/navigation';
import { auth } from '../../../lib/auth';

export const metadata: Metadata = { title: 'Orders' };

const OrdersPage = async () => {
  const session = await auth();
  if (!session) {
    const path = '/orders';
    redirect(`/login?redirect=${encodeURIComponent(path)}`);
  }

  return (
    <ContainerPage
      breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Orders' }]}
    >
      Order Page
    </ContainerPage>
  );
};

export default OrdersPage;
