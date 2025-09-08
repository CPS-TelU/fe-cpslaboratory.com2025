import { Poppins, DM_Sans } from "next/font/google";


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // pilih weight yang dipakai
  variable: "--font-poppins", // untuk dipakai di Tailwind
});

