import { z } from "zod";

export const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Nama lengkap minimal 2 karakter dan tidak boleh kosong",
  }),

  nim: z.string().min(5, { message: "NIM wajib diisi dengan benar" }),

  className: z
    .string()
    .trim()
    .toUpperCase()
    .regex(/^[A-Z]{2}-\d{2}-\d{2}$/, {
      message: "Format kelas salah. Contoh yang benar: TT-47-06",
    }),

  noHp: z
    .string()
    .trim()
    .min(10, { message: "Nomor HP minimal 10 digit" })
    .max(15, { message: "Nomor HP maksimal 15 digit" })
    .regex(/^[0-9]+$/, { message: "Nomor HP hanya boleh berisi angka" }),

  gender: z.enum(["male", "female", "Laki-laki", "Perempuan"], {
    errorMap: () => ({ message: "Silakan pilih jenis kelamin" }),
  }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Format email tidak valid (contoh@email.com)" }),

  major: z.string().min(1, { message: "Program studi wajib diisi" }),

  faculty: z.string().min(1, { message: "Fakultas wajib diisi" }),

  document: z.string().trim().url({
    message:
      "Link dokumen harus berupa URL valid (awalan http:// atau https://)",
  }),

  year: z.string().min(1, { message: "Tahun angkatan wajib diisi" }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
