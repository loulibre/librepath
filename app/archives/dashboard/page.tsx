"use client";

/**
 * Archives Dashboard Page
 * 
 * Purpose:
 * - Main overview page for the Archives section
 * - Corresponds to the sidebar menu item under Archives > Dashboard
 * - Matches the breadcrumb navigation path: Home > Archives > Dashboard
 */

import { useEffect } from "react"
import { LayoutDashboard } from "lucide-react"
import { useTopbarStore } from "@/store/use-topbar-store"

export default function ArchivesDashboard() {
  const setTopbar = useTopbarStore((state) => state.setTopbar)

  useEffect(() => {
    setTopbar("Dashboard", [
      {
        label: "Customize",
        icon: LayoutDashboard,
        onClick: () => {
          console.log("Customize archives dashboard")
        },
      },
    ])
    return () => setTopbar("", [])
  }, [setTopbar])

  return (
    <div className="p-6">
      <p className="text-muted-foreground">
        Welcome to your archives dashboard.
      </p>
    </div>
  )
}