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

interface props{
    title : string
}



export default function FormPage({title} : props){
    return(
    <Card className="w-full max-w-lg mx-auto">
            <CardHeader>
                <CardTitle className="text-lg font-semibold">Form {title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                    <Label>Nama</Label>
                    <Input name="name" placeholder="Nama lengkap" required />
                </div>

                {/* NIM */}
                <div className="space-y-1">
                    <Label>NIM</Label>
                    <Input name="nim" placeholder="Masukkan NIM" required />
                </div>

                {/* Class Name */}
                <div className="space-y-1">
                    <Label>Kelas</Label>
                    <Input name="className" placeholder="Masukkan kelas" required />
                </div>

                {/* No HP */}
                <div className="space-y-1">
                    <Label>No HP</Label>
                    <Input name="noHp" placeholder="08xxxxxxxxxx" required />
                </div>

                {/* Gender */}
                <div className="space-y-1">
                <Label>Jenis Kelamin</Label>
                <Select name="gender">
                    <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis kelamin" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="Laki-laki">Laki-laki</SelectItem>
                    <SelectItem value="Perempuan">Perempuan</SelectItem>
                    </SelectContent>
                </Select>
                </div>

                {/* Email */}
                <div className="space-y-1">
                <Label>Email</Label>
                <Input name="email" type="email" placeholder="email@example.com" required />
                </div>

                {/* Major */}
                <div className="space-y-1">
                <Label>Program Studi</Label>
                <Input name="major" placeholder="Masukkan program studi" required />
                </div>

                {/* Faculty */}
                <div className="space-y-1">
                <Label>Fakultas</Label>
                <Input name="faculty" placeholder="Masukkan fakultas" required />
                </div>

                {/* Document (link) */}
                <div className="space-y-1">
                <Label>Link Dokumen</Label>
                <Input
                    name="document"
                    placeholder="Masukkan link Google Drive"
                    required
                />
                </div>

                {/* Year */}
                <div className="space-y-1">
                <Label>Tahun Angkatan</Label>
                <Input name="year" placeholder="2024 / 2025" required />
                </div>
            </CardContent>

        <CardFooter>
            <Button type="submit" className="w-full bg-[#ba2025] hover:bg-red-400">Kirim</Button>
        </CardFooter>
    </Card>
    )
}