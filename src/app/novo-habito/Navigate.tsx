'use client'
import { useRouter } from "next/navigation";

export default function Navigate() {
  const navigate = useRouter();

  return (
    <>
      <button
        onClick={() => navigate.push("/")}
        className="bg-slate-900 flex-1 py-2 rounded-md text-red-500 uppercase"
      >
        Cancelar e voltar
      </button>
    </>
  );
}
