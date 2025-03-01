"use client"

import { useEffect } from "react"
import { Plus, Calendar as CalendarIcon } from "lucide-react"
import { useTopbarStore } from "@/store/use-topbar-store"

export default function Calendar() {
  const setTopbar = useTopbarStore((state) => state.setTopbar)

  useEffect(() => {
    setTopbar("Calendar", [
      {
        label: "Add Event",
        icon: Plus,
        onClick: () => {
          console.log("Add new calendar event")
        },
      },
    ])

    return () => setTopbar("", [])
  }, [setTopbar])

  return (
    <div className="flex flex-col gap-4 p-6">
      <p className="text-muted-foreground">
        Welcome to the Calendar page.
      </p>
    </div>
  )
}