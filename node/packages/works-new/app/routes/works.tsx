import { Outlet } from "@remix-run/react";

import { Layout } from "@/components/layout";

export default function Index() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
