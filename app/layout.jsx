import "./globals.css";
import Navibar from "./components/Navibar";
import { NextUIProvider } from "@nextui-org/system";

export const metadata = {
  title: "Duct Daddy Duct Cleaning",
  description: "Affordable and Dependable Duct Cleaning Services Based in Kansas City and Surrounding Areas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#F5F5F7]">
      <body
        className={`antialiased`}
      >
        <NextUIProvider>
          <Navibar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
