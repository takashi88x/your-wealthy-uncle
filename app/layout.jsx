import "./globals.css";

export const metadata = {
  title: "The First $10K System — Your Wealthy Uncle",
  description: "A practical 90-day money reset to help you organize your spending, build better saving habits, and work toward your first $10,000.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
