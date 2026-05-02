import React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import LayoutCustom from "./layout";
import { ThemeProvider, NonFlashOfUnstyledContent } from "./components/theme-provider";
import type { MetaFunction } from "@remix-run/node";



export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "style",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <NonFlashOfUnstyledContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <LayoutCustom>
        <Outlet />
      </LayoutCustom>
    </ThemeProvider>
  );
}

export function HydrateFallback() {
  return (
    <ThemeProvider defaultTheme="system">
      <LayoutCustom>
        <div className="flex w-full h-[100vh] items-center justify-center">
          <div className="w-10 h-10 border-4 border-zinc-200 border-t-zinc-800 dark:border-zinc-800 dark:border-t-zinc-200 rounded-full animate-spin"></div>
        </div>
      </LayoutCustom>
    </ThemeProvider>
  );
}
