"use client";

/**
 * Archives Scan Page
 * 
 * Purpose:
 * - Provides scanning functionality for the Archives section
 * - Corresponds to the sidebar menu item under Archives > Scan
 * - Matches the breadcrumb navigation path: Home > Archives > Scan
 */

import { useEffect } from "react"
import { ScanLine } from "lucide-react"
import { useTopbarStore } from "@/store/use-topbar-store"

export default function ArchivesScan() {
  const setTopbar = useTopbarStore((state) => state.setTopbar)

  useEffect(() => {
    setTopbar("Scan", [
      {
        label: "New Scan",
        icon: ScanLine,
        onClick: () => {
          console.log("Start new scan")
        },
      },
    ])
    return () => setTopbar("", [])
  }, [setTopbar])

  return (
    <div className="p-6">
      <p className="text-muted-foreground">
        Scan and process documents for archiving.
      </p>
    </div>
  )
}