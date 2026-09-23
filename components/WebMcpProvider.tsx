'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { syncToolSurface } from '@/lib/webmcp/register';

// Registers the WebMCP tools for the current page and swaps them on every
// route change (App Router navigation does not reload the page). Renders
// nothing, and does nothing in a browser without WebMCP.
export default function WebMcpProvider() {
  const pathname = usePathname();

  useEffect(() => {
    void syncToolSurface(pathname ?? '/');
  }, [pathname]);

  return null;
}
