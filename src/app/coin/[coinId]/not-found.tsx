'use client'

import { DangerIcon } from "@/components/ui-icons/danger";
import { useParams } from "next/navigation";

export default function NotFound() {

  const pathname = useParams();

  return (
    <div className="bg-white w-[32vw] border rounded-3xl flex items-center p-[3vw] shadow-sm">
      <div className="flex items-center gap-[0.5vw]">
        <DangerIcon />
        <p className="text-sm font-semibold">There is no result for "{pathname.coinId}"!</p>
      </div>
    </div>
  )
}