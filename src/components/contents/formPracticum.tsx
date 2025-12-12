"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchemaType } from "@/lib/schemas";
import {
  User,
  CreditCard,
  Building2,
  Phone,
  Mail,
  GraduationCap,
  FileText,
  Calendar,
  Users,
  Send,
} from "lucide-react";

import StatusOverlay from "@/components/ui/StatusOverlay";
import SectionContainer from "@/utils/SectionsContainer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface props {
  title: string;
}

export default function FormPracticum({ title }: props) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const api = process.env.NEXT_PUBLIC_API_REGISTER || "";

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchemaType) => {
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`${api}/practicum/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: data.name,
          nim: data.nim,
          className: data.className,
          noHp: data.noHp,
          gender: data.gender,
          email: data.email,
          major: data.major,
          faculty: data.faculty,
          document: data.document,
          year: data.year,
        }),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const textError = await res.text();
        console.error("❌ Response bukan JSON:", textError);
        throw new Error("Server Error: Respons tidak valid.");
      }

      const result = await res.json();
      console.log("✅ Result API:", result);

      if (!res.ok) {
        if (
          res.status === 409 ||
          result.message?.toLowerCase().includes("email")
        ) {
          setError("email", {
            type: "manual",
            message: result.message || "Email sudah terdaftar!",
          });
          setStatus("idle");
          return;
        }
        throw new Error(result.message || `Gagal: Status ${res.status}`);
      }

      setMessage("Pendaftaran Praktikum berhasil dikirim!");
      setStatus("success");
      reset();
    } catch (error: any) {
      console.error("❌ Error:", error);
      setMessage(error.message || "Terjadi kesalahan koneksi.");
      setStatus("error");
    }
  };

  const handleCloseOverlay = () => {
    setStatus("idle");
    setMessage("");
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/50">
      <StatusOverlay
        status={status}
        message={message}
        onClose={handleCloseOverlay}
      />

      <SectionContainer>
        <div className="py-10 md:py-16 px-4 flex flex-col items-center justify-center relative">
          {/* Background Decor */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-red-600/10 blur-[100px] -z-10 rounded-full" />

          <div className="text-center mb-8 space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Join <span className="text-[#ba2025]">Practicum</span> Team
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Lengkapi formulir di bawah ini untuk mendaftar. Pastikan data yang
              Anda masukkan valid.
            </p>
          </div>

          <Card className="w-full max-w-4xl shadow-xl border-slate-200/60 bg-white/80 backdrop-blur-sm">
            <CardHeader className="border-b border-slate-100 bg-slate-50/50 p-6 md:p-8">
              <div className="flex items-center gap-2 text-[#ba2025] mb-2">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Application Form
                </span>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800">
                Form {title}
              </CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="p-6 md:p-8 space-y-8">
                {/* SECTION 1: Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800 border-b pb-2">
                    <User className="w-4 h-4 text-[#ba2025]" /> Informasi
                    Pribadi
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nama */}
                    <div className="space-y-2">
                      <Label className="text-slate-600">Nama</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          {...register("name")}
                          placeholder="Nama lengkap"
                          className={`pl-9 focus-visible:ring-[#ba2025] ${errors.name ? "border-red-500 bg-red-50" : ""}`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Gender */}
                    <div className="space-y-2">
                      <Label className="text-slate-600">Gender</Label>
                      <Select
                        onValueChange={(val) => {
                          setValue("gender", val as any);
                          trigger("gender");
                        }}
                      >
                        <SelectTrigger
                          className={`focus:ring-[#ba2025] ${errors.gender ? "border-red-500 bg-red-50" : ""}`}
                        >
                          <SelectValue placeholder="Pilih jenis kelamin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.gender && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.gender.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label className="text-slate-600">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          type="email"
                          {...register("email")}
                          placeholder="email@example.com"
                          className={`pl-9 focus-visible:ring-[#ba2025] ${errors.email ? "border-red-500 bg-red-50" : ""}`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* No HP */}
                    <div className="space-y-2">
                      <Label className="text-slate-600">No HP</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          {...register("noHp")}
                          placeholder="08xxxxxxxxxx"
                          className={`pl-9 focus-visible:ring-[#ba2025] ${errors.noHp ? "border-red-500 bg-red-50" : ""}`}
                        />
                      </div>
                      {errors.noHp && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.noHp.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800 border-b pb-2">
                    <GraduationCap className="w-4 h-4 text-[#ba2025]" />{" "}
                    Informasi Akademik
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* NIM */}
                    <div className="space-y-2">
                      <Label className="text-slate-600">NIM</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          {...register("nim")}
                          placeholder="Masukkan NIM"
                          className={`pl-9 focus-visible:ring-[#ba2025] ${errors.nim ? "border-red-500 bg-red-50" : ""}`}
                        />
                      </div>
                      {errors.nim && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.nim.message}
                        </p>
                      )}
                    </div>

                    {/* Kelas */}
                    <div className="space-y-2">
                      <Label className="text-slate-600">Kelas</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          {...register("className")}
                          placeholder="Contoh: TT-47-06"
                          className={`pl-9 focus-visible:ring-[#ba2025] ${errors.className ? "border-red-500 bg-red-50" : ""}`}
                        />
                      </div>
                      {errors.className && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.className.message}
                        </p>
                      )}
                    </div>

                    {/* Fakultas */}
                    <div className="space-y-2">
                      <Label className="text-slate-600">Fakultas</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          {...register("faculty")}
                          placeholder="Masukkan fakultas"
                          className={`pl-9 focus-visible:ring-[#ba2025] ${errors.faculty ? "border-red-500 bg-red-50" : ""}`}
                        />
                      </div>
                      {errors.faculty && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.faculty.message}
                        </p>
                      )}
                    </div>

                    {/* Prodi */}
                    <div className="space-y-2">
                      <Label className="text-slate-600">Program Studi</Label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          {...register("major")}
                          placeholder="Masukkan program studi"
                          className={`pl-9 focus-visible:ring-[#ba2025] ${errors.major ? "border-red-500 bg-red-50" : ""}`}
                        />
                      </div>
                      {errors.major && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.major.message}
                        </p>
                      )}
                    </div>

                    {/* Tahun Angkatan */}
                    <div className="space-y-2 md:col-span-2">
                      <Label className="text-slate-600">Tahun Angkatan</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          {...register("year")}
                          placeholder="2024 / 2025"
                          className={`pl-9 focus-visible:ring-[#ba2025] ${errors.year ? "border-red-500 bg-red-50" : ""}`}
                        />
                      </div>
                      {errors.year && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.year.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* SECTION 3: Documents */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800 border-b pb-2">
                    <FileText className="w-4 h-4 text-[#ba2025]" /> Dokumen
                    Pendukung
                  </h3>
                  <div className="space-y-2">
                    <Label className="text-slate-600">Link Dokumen</Label>
                    <div className="relative">
                      <Input
                        {...register("document")}
                        placeholder="https://..."
                        className={`focus-visible:ring-[#ba2025] ${errors.document ? "border-red-500 bg-red-50" : ""}`}
                      />
                    </div>
                    {errors.document && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.document.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="bg-slate-50/50 p-6 md:p-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#ba2025] hover:bg-red-700 text-white shadow-lg shadow-red-600/20 transition-all duration-300"
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Apply <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </SectionContainer>
    </div>
  );
}
