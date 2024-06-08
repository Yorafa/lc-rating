"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../Navbar";
import { ThemeProvider } from "../../../hooks/useTheme";
import { SiteProvider } from "../../../hooks/useSite";

import "../../../scss/styles.scss";

const client = new QueryClient();
export default function ({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <SiteProvider>
          <div className="app bg-body">
            <Navbar />
            {children}
          </div>
        </SiteProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
