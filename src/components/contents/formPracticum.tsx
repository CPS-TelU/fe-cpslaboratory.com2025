"use client"
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
import React, { useState } from "react";
import { Register } from "@/lib/api";


interface props{
    title : string
}

const api = process.env.NEXT_PUBLIC_API_REGISTER

export default function FormPracticum({title} : props){
    const [formData, setFormData] = useState<Register>({
        name:"",
        nim:"",
        className:"",
        noHp:"",
        gender:"",
        email:"",
        major:"",
        faculty:"",
        document:"",
        year:""
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const target = e.target;

        if (target instanceof HTMLInputElement && target.type === "checkbox") {
        setFormData({
            ...formData,
            [target.name]: target.checked,
        });
        } else {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
        }
    };


    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await fetch(`${api}/practicum/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:formData.name,
                    nim:formData.nim,
                    className:formData.className,
                    noHp:formData.noHp,
                    gender:formData.gender,
                    email:formData.email,
                    major:formData.major,
                    faculty:formData.faculty,
                    document:formData.document,
                    year:formData.year
                }),
            })
            setLoading(false)
            const result = await res.json();
               if(res.ok){
                alert("Terimakasih telah mendaftar")
            }else if (res.status === 400) {
            
            alert(result.message || "Data yang dikirim tidak valid (400)");
            } else {
                alert(result.message || `Terjadi kesalahan: ${res.status}`);
            }
        } catch (error) {
            console.error("message error", error)
            alert("An error occurred while submitting the form. Please try again.");
        }finally{
            setLoading(false)
        }
    }

    return(
    <form onSubmit={handleSubmit} className=" max-w-lg mx-auto w-full md:w-2/3">

        <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-semibold">Form {title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Name */}
                    <div className="space-y-1">
                        <Label>Nama</Label>
                        <Input name="name" placeholder="Nama lengkap" onChange={handleChange} required />
                    </div>

                    {/* NIM */}
                    <div className="space-y-1">
                        <Label>NIM</Label>
                        <Input name="nim" placeholder="Masukkan NIM" onChange={handleChange} required />
                    </div>

                    {/* Class Name */}
                    <div className="space-y-1">
                        <Label>Kelas</Label>
                        <Input name="className" placeholder="Masukkan kelas" onChange={handleChange} required />
                    </div>

                    {/* No HP */}
                    <div className="space-y-1">
                        <Label>No HP</Label>
                        <Input name="noHp" placeholder="08xxxxxxxxxx" onChange={handleChange} required />
                    </div>

                    {/* Gender */}
                    <div className="space-y-1 w-full">
                    <Label>Gender</Label>
                    <Select name="gender" onValueChange={(value) => setFormData((prev) => ({...prev, gender:value}))}>
                        <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis kelamin" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <Label>Email</Label>
                        <Input name="email" type="email" placeholder="email@example.com" onChange={handleChange} required />
                    </div>

                    {/* Major */}
                    <div className="space-y-1">
                        <Label>Program Studi</Label>
                        <Input name="major" placeholder="Masukkan program studi" onChange={handleChange} required />
                    </div>

                    {/* Faculty */}
                    <div className="space-y-1">
                        <Label>Fakultas</Label>
                        <Input name="faculty" placeholder="Masukkan fakultas" onChange={handleChange} required />
                    </div>

                    {/* Document (link) */}
                    <div className="space-y-1">
                    <Label>Link Dokumen</Label>
                    <Input
                        name="document"
                        placeholder="Masukkan link Google Drive"
                        required
                        onChange={handleChange}
                    />
                    </div>

                    {/* Year */}
                    <div className="space-y-1">
                    <Label>Tahun Angkatan</Label>
                    <Input name="year" placeholder="2024 / 2025" onChange={handleChange} required />
                    </div>
                </CardContent>

            <CardFooter>
                <Button type="submit" className="w-full bg-[#ba2025] hover:bg-red-400"  disabled={loading}>
                    {loading ? "Loading...." : "apply"}
                </Button>
            </CardFooter>
        </Card>
    </form>
    )
}