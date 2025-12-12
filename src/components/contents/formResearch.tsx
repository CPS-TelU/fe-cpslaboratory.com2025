"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchemaType } from "@/lib/schemas";
import StatusOverlay from "@/components/ui/StatusOverlay";

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

export default function FormResearch({ title }: props) {
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
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchemaType) => {
    setStatus("loading");

    try {
      const res = await fetch(`${api}/research/register`, {
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

      if (res.ok) {
        setMessage("Pendaftaran Research berhasil dikirim!");
        setStatus("success");
        reset();
      } else {
        setMessage(result.message || `Gagal: Status ${res.status}`);
        setStatus("error");
      }
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
    <>
      <StatusOverlay
        status={status}
        message={message}
        onClose={handleCloseOverlay}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg mx-auto md:w-2/3"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Form {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Input Nama */}
            <div className="space-y-1">
              <Label>Nama</Label>
              <Input
                {...register("name")}
                placeholder="Nama lengkap"
                className={errors.name && "border-red-500"}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            {/* Input NIM */}
            <div className="space-y-1">
              <Label>NIM</Label>
              <Input
                {...register("nim")}
                placeholder="Masukkan NIM"
                className={errors.nim && "border-red-500"}
              />
              {errors.nim && (
                <p className="text-red-500 text-xs">{errors.nim.message}</p>
              )}
            </div>

            {/* Input Kelas */}
            <div className="space-y-1">
              <Label>Kelas</Label>
              <Input
                {...register("className")}
                placeholder="Contoh: TT-47-06"
                className={errors.className && "border-red-500"}
              />
              {errors.className && (
                <p className="text-red-500 text-xs">
                  {errors.className.message}
                </p>
              )}
            </div>

            {/* Input No HP */}
            <div className="space-y-1">
              <Label>No HP</Label>
              <Input
                {...register("noHp")}
                placeholder="08xxxxxxxxxx"
                className={errors.noHp && "border-red-500"}
              />
              {errors.noHp && (
                <p className="text-red-500 text-xs">{errors.noHp.message}</p>
              )}
            </div>

            {/* Select Gender */}
            <div className="space-y-1 w-full">
              <Label>Gender</Label>
              <Select
                onValueChange={(val) => {
                  setValue("gender", val as any);
                  trigger("gender");
                }}
              >
                <SelectTrigger className={errors.gender && "border-red-500"}>
                  <SelectValue placeholder="Pilih jenis kelamin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-red-500 text-xs">{errors.gender.message}</p>
              )}
            </div>

            {/* Input Email */}
            <div className="space-y-1">
              <Label>Email</Label>
              <Input
                type="email"
                {...register("email")}
                placeholder="email@example.com"
                className={errors.email && "border-red-500"}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Input Prodi */}
            <div className="space-y-1">
              <Label>Program Studi</Label>
              <Input
                {...register("major")}
                placeholder="Masukkan program studi"
                className={errors.major && "border-red-500"}
              />
              {errors.major && (
                <p className="text-red-500 text-xs">{errors.major.message}</p>
              )}
            </div>

            {/* Input Fakultas */}
            <div className="space-y-1">
              <Label>Fakultas</Label>
              <Input
                {...register("faculty")}
                placeholder="Masukkan fakultas"
                className={errors.faculty && "border-red-500"}
              />
              {errors.faculty && (
                <p className="text-red-500 text-xs">{errors.faculty.message}</p>
              )}
            </div>

            {/* Input Link Dokumen */}
            <div className="space-y-1">
              <Label>Link Dokumen</Label>
              <Input
                {...register("document")}
                placeholder="https://..."
                className={errors.document && "border-red-500"}
              />
              {errors.document && (
                <p className="text-red-500 text-xs">
                  {errors.document.message}
                </p>
              )}
            </div>

            {/* Input Tahun */}
            <div className="space-y-1">
              <Label>Tahun Angkatan</Label>
              <Input
                {...register("year")}
                placeholder="2024 / 2025"
                className={errors.year && "border-red-500"}
              />
              {errors.year && (
                <p className="text-red-500 text-xs">{errors.year.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-[#ba2025] hover:bg-red-400"
            >
              Apply
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
