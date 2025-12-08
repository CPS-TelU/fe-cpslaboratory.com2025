import { Card, CardHeader, CardTitle, CardContent } from "./card";



export default function AlertContent(){
    return(
    <Card className="mb-4 border-red-300 bg-red-50 max-w-full w-full md:max-w-lg xl:translate-x-20">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-red-700">
                Perhatian !!
                </CardTitle>
            </CardHeader>

        <CardContent>
            <div className="relative">
            <textarea
                className="w-full border rounded-md px-3 py-2 text-xs focus:outline-none text-gray-700 bg-white"
                readOnly
                value={`Pastikan semua dokumen rekrutmen yang diunggah sesuai dengan syarat dan ketentuan yang telah ditentukan. Berikut adalah dokumen yang perlu disiapkan:\n\n- CV dalam format ATS-Friendly\n- Foto Formal 4x6\n- Portfolio (opsional)\n- KHS sebagai bukti pencapaian akademik\n- Essay sesuai dengan pilihan topik Anda\n- Commitment Letter yang menegaskan komitmen Anda\n- Bukti Twibbon yang diunggah di Instagram\n\nGabungkan semua dokumen ke dalam satu tautan publik agar lebih mudah diakses oleh tim penilai. Terima kasih!`}
                style={{
                height: "300px",
                overflow: "hidden",
                resize: "none",
                }}
            />

            <div className="flex items-center mt-3">
                <a
                href="https://drive.google.com/drive/folders/10-ZJqSSU805pqZ1nQnnbrfKCqOR2ByLE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BA2025] font-medium flex items-center gap-1 text-sm"
                >
                🔗 Akses Template Dokumen
                </a>
            </div>
            </div>
        </CardContent>
    </Card>
    )
}