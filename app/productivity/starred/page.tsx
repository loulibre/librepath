"use client";

/**
 * Productivity Starred Page
 * 
 * Purpose:
 * - Displays starred/favorited items from the Productivity section
 * - Corresponds to the sidebar menu item under Productivity > Starred
 * - Matches the breadcrumb navigation path: Home > Productivity > Starred
 */

import { useEffect } from "react"
import { Star } from "lucide-react"
import { useTopbarStore } from "@/store/use-topbar-store"

export default function ProductivityStarred() {
  const setTopbar = useTopbarStore((state) => state.setTopbar)

  useEffect(() => {
    setTopbar("Starred", [
      {
        label: "Add to Starred",
        icon: Star,
        onClick: () => {
          console.log("Add item to starred")
        },
      },
    ])
    return () => setTopbar("", [])
  }, [setTopbar])

  return (
    <div className="p-6">
      <p className="text-muted-foreground">
        View your starred items.
      </p>
    </div>
  )
}