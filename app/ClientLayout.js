"use client"
import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem="false" defaultTheme="light">
      <>{children}</>
    </ThemeProvider>
  );
}

export default ClientLayout;
