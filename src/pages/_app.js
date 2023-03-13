import { useEffect, useState } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {!loading ? (
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <div className="flex justify-center items-center h-screen w-screen">
          <div class="loading">
            <div class="loading-text">
              <span class="loading-text-words">L</span>
              <span class="loading-text-words">O</span>
              <span class="loading-text-words">A</span>
              <span class="loading-text-words">D</span>
              <span class="loading-text-words">I</span>
              <span class="loading-text-words">N</span>
              <span class="loading-text-words">G</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
