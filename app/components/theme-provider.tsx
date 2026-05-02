import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "light",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null;
    if (stored && (stored === "dark" || stored === "light" || stored === "system")) {
      setTheme(stored);
    }
  }, [storageKey]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    const finalTheme: "dark" | "light" = theme === "system" 
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme;

    root.classList.add(finalTheme);
    setResolvedTheme(finalTheme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        root.classList.remove("light", "dark");
        const newTheme = e.matches ? "dark" : "light";
        root.classList.add(newTheme);
        setResolvedTheme(newTheme);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    resolvedTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export function NonFlashOfUnstyledContent({ storageKey = 'vite-ui-theme' }: { storageKey?: string }) {
  const scriptStr = `
    (function () {
      try {
        var root = window.document.documentElement;
        var stored = localStorage.getItem('${storageKey}');
        var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        var theme = stored ? stored : 'system';
        if (theme !== 'dark' && theme !== 'light' && theme !== 'system') theme = 'system';
        var finalTheme = theme === 'system' ? (darkQuery.matches ? 'dark' : 'light') : theme;
        
        root.classList.remove('light', 'dark');
        root.classList.add(finalTheme);
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: scriptStr }} />;
}
