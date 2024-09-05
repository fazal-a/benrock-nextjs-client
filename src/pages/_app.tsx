import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {CssBaseline} from "@mui/material";
import theme from "@/theme/theme";
import {ThemeProvider} from "@mui/system";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
