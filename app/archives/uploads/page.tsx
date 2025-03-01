"use client";

/**
 * Archives Uploads Page
 * 
 * Purpose:
 * - Handles file uploads for the Archives section
 * - Corresponds to the sidebar menu item under Archives > Uploads
 * - Matches the breadcrumb navigation path: Home > Archives > Uploads
 */

import { useEffect } from "react"
import { Upload } from "lucide-react"
import { useTopbarStore } from "@/store/use-topbar-store"

export default function Uploads() {
  const setTopbar = useTopbarStore((state) => state.setTopbar)

  useEffect(() => {
    setTopbar("Uploads", [
      {
        label: "Upload File",
        icon: Upload,
        onClick: () => {
          console.log("Upload file")
        },
      },
    ])
    return () => setTopbar("", [])
  }, [setTopbar])

  return (
    <div className="flex flex-col gap-4 p-6">
      <p className="text-muted-foreground">
        Welcome to the Uploads page.
      </p>
    </div>
  )
}