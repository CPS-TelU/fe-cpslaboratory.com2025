import React from "react";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type StatusType = "idle" | "loading" | "success" | "error";

interface StatusOverlayProps {
  status: StatusType;
  message?: string;
  onClose: () => void;
}

export default function StatusOverlay({
  status,
  message,
  onClose,
}: StatusOverlayProps) {
  if (status === "idle") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center space-y-6 animate-in zoom-in-95 duration-300">
        {status === "loading" && (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-20 w-20 text-blue-600 animate-spin" />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Mohon Tunggu</h3>
              <p className="text-gray-500">Sedang memproses data Anda...</p>
            </div>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="h-24 w-24 text-green-500 animate-in zoom-in duration-300" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Berhasil!</h3>
              <p className="text-gray-500 mt-2">
                {message || "Data berhasil disimpan."}
              </p>
            </div>
            <Button
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 text-lg py-6 mt-2"
            >
              Tutup
            </Button>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center gap-4">
            <XCircle className="h-24 w-24 text-red-500 animate-in zoom-in duration-300" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Gagal!</h3>
              <p className="text-gray-500 mt-2">
                {message || "Terjadi kesalahan."}
              </p>
            </div>
            <Button
              onClick={onClose}
              variant="destructive"
              className="w-full text-lg py-6 mt-2"
            >
              Coba Lagi
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
