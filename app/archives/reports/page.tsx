"use client";

/**
 * Archives Reports Page
 * 
 * Purpose:
 * - Displays reports and analytics for the Archives section
 * - Corresponds to the sidebar menu item under Archives > Reports
 * - Matches the breadcrumb navigation path: Home > Archives > Reports
 */

import { useEffect } from "react"
import { FileBarChart, Download } from "lucide-react"
import { useTopbarStore } from "@/store/use-topbar-store"

export default function ArchivesReports() {
  const setTopbar = useTopbarStore((state) => state.setTopbar)

  useEffect(() => {
    setTopbar("Reports", [
      {
        label: "Generate Report",
        icon: FileBarChart,
        onClick: () => {
          console.log("Generate new report")
        },
      },
      {
        label: "Export",
        icon: Download,
        onClick: () => {
          console.log("Export reports")
        },
      },
    ])
    return () => setTopbar("", [])
  }, [setTopbar])

  return (
    <div className="p-6">
      <p className="text-muted-foreground">
        View and generate archive reports.
      </p>
    </div>
  )
}