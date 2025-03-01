"use client"

import { useEffect } from "react"
import { useTopbarStore } from "@/store/use-topbar-store"

export default function Settings() {
  const setTopbar = useTopbarStore((state) => state.setTopbar)

  useEffect(() => {
    setTopbar("Settings", [])
    return () => setTopbar("", [])
  }, [setTopbar])

  return (
    <div className="flex flex-col gap-4 p-6">
      <p className="text-muted-foreground">
        Welcome to the Settings page.
      </p>
    </div>
  )
}