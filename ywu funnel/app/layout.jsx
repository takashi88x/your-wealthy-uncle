import "./globals.css";
export const metadata = {
  title: "Your Wealthy Uncle — Your Purchase",
  description: "Your Wealthy Uncle purchase delivery.",
};
export default function RootLayout({children}) {
  return <html lang="en"><body>{children}</body></html>;
}
