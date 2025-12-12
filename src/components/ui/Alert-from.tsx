import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, FileText, CheckCircle2, Download } from "lucide-react";

export default function AlertContent() {
  return (
    <Card className="w-full border-l-4 border-l-[#ba2025] border-y-slate-200 border-r-slate-200 bg-white shadow-lg h-full overflow-hidden">
      <div className="bg-red-50/50 p-5 border-b border-red-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-100 rounded-full text-[#ba2025]">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800">Persyaratan Berkas</h3>
            <p className="text-xs text-slate-500">
              Wajib dibaca sebelum submit
            </p>
          </div>
        </div>
      </div>

      <CardContent className="p-5 space-y-6">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            Siapkan dokumen berikut dalam satu folder{" "}
            <strong>Google Drive</strong> dan pastikan aksesnya{" "}
            <strong>Publik (Anyone with the link)</strong>.
          </p>

          <div className="space-y-3">
            {[
              "CV (ATS Friendly)",
              "Foto Formal 4x6",
              "Scan KHS Terakhir",
              "Essay (Sesuai Topik)",
              "Commitment Letter",
              "Bukti Upload Twibbon",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-slate-700 font-medium group-hover:text-[#ba2025] transition-colors">
                  {item}
                </span>
              </div>
            ))}
            <div className="flex items-start gap-3 group opacity-75">
              <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-500">
                Portfolio (Opsional)
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-2 border-t border-dashed border-slate-200">
          <a
            href="https://drive.google.com/drive/folders/10-ZJqSSU805pqZ1nQnnbrfKCqOR2ByLE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-sm font-semibold transition-all hover:shadow-sm group"
          >
            <Download className="w-4 h-4 text-[#ba2025] group-hover:translate-y-0.5 transition-transform" />
            Download Template
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
