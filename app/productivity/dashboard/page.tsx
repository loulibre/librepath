"use client";
/**
 * Productivity Dashboard Page
 * 
 * Purpose:
 * - Main overview page for the Productivity section
 * - Corresponds to the sidebar menu item under Productivity > Dashboard
 * - Matches the breadcrumb navigation path: Home > Productivity > Dashboard
 */

import { useEffect } from "react"
import { LayoutDashboard } from "lucide-react"
import { useTopbarStore } from "@/store/use-topbar-store"

export default function ProductivityDashboard() {
  const setTopbar = useTopbarStore((state) => state.setTopbar)

  useEffect(() => {
    setTopbar("Dashboard", [
      {
        label: "New Widget",
        icon: LayoutDashboard,
        onClick: () => {
          console.log("Add new dashboard widget")
        },
      },
    ])
    return () => setTopbar("", [])
  }, [setTopbar])

  return (
    <div className="p-6">
      <p className="text-muted-foreground">
        Welcome to your productivity dashboard.
      </p>
    </div>
  )
}