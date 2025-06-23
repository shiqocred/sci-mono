import { SidebarInset, SidebarProvider } from '@tainext/ui';
import React, { ReactNode } from 'react';
import { AppSidebar } from '../../components/sidebar/app-sidebar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
