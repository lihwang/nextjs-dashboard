import "@/app/ui/global.css";
// TODO:其他语言 日本语言
import { jp_lang } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={jp_lang.className} lang="ja">
      <body>{children}</body>
    </html>
  );
}
