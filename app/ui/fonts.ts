import { Noto_Sans_JP ,Inter,Lusitana} from "next/font/google";

export const jp_lang = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
})
 

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});