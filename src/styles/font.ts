import { Poppins, DM_Sans } from "next/font/google";


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // pilih weight yang dipakai
  variable: "--font-poppins", // untuk dipakai di Tailwind
});

export const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
});