import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import { AlertTriangle, Home, RefreshCw, ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Alert, AlertDescription } from "~/components/ui/alert";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="/logo.png"
          type="image/x-icon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
        <Outlet />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;
  let is404 = false;

  if (isRouteErrorResponse(error)) {
    is404 = error.status === 404;
    message = is404 ? "404" : `Error ${error.status}`;
    details = is404
      ? "The requested page could not be found."
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <main className="pt-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center space-y-8">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-12 h-12 text-destructive" />
                </div>
                <div className="absolute inset-0 w-24 h-24 bg-destructive/5 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-foreground">
                {is404 ? "404" : "Error"}
              </h1>
              <h2 className="text-2xl font-semibold text-muted-foreground">
                {is404 ? "Halaman Tidak Ditemukan" : "Terjadi Kesalahan"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                {is404
                  ? "Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan atau dihapus."
                  : "Maaf, terjadi kesalahan yang tidak terduga. Tim kami telah diberitahu dan sedang memperbaiki masalah ini."}
              </p>
            </div>

            {/* Error Details for Development */}
            {import.meta.env.DEV && details && (
              <Alert className="text-left max-w-lg mx-auto">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="font-mono text-sm">
                  {details}
                </AlertDescription>
              </Alert>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleGoHome}
                size="lg"
                className="min-w-[140px]"
              >
                <Home className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>

              <Button
                onClick={handleGoBack}
                variant="outline"
                size="lg"
                className="min-w-[140px]"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>

              {!is404 && (
                <Button
                  onClick={handleRefresh}
                  variant="outline"
                  size="lg"
                  className="min-w-[140px]"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Muat Ulang
                </Button>
              )}
            </div>

            {/* Additional Help */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Butuh bantuan? Hubungi tim support kami di{" "}
                <a
                  href="mailto:support@bsi.ac.id"
                  className="text-primary hover:underline font-medium"
                >
                  support@bsi.ac.id
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Development Stack Trace */}
        {import.meta.env.DEV && stack && (
          <div className="container mx-auto px-4 mt-12 max-w-4xl">
            <div className="bg-muted/50 rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-4 text-destructive">
                Development Stack Trace
              </h3>
              <pre className="text-sm overflow-x-auto bg-background rounded p-4 border">
                <code className="text-muted-foreground">{stack}</code>
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
