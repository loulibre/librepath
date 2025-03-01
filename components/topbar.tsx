"use client"

import * as React from "react"
import { Star, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavActions } from "@/components/nav-actions"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useTopbarStore } from "@/store/use-topbar-store"

export function Topbar() {
  const { title, actions } = useTopbarStore()
  const [isStarred, setIsStarred] = React.useState(false)
  const [isMoreOpen, setIsMoreOpen] = React.useState(false)

  return (
    <div className="flex h-14 w-full items-center justify-between border-b px-4">
      <div className="flex items-center">
        <h1 className="text-xl font-medium">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden font-medium text-muted-foreground md:inline-block">Edit Oct 08</div>
        
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsStarred(!isStarred)}>
          <Star className={isStarred ? "fill-yellow-400 text-yellow-400" : ""} />
        </Button>

        {actions?.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={action.onClick}
          >
            {action.icon && React.createElement(action.icon)}
          </Button>
        ))}

        <Popover open={isMoreOpen} onOpenChange={setIsMoreOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="h-7 w-7 data-[state=open]:bg-accent">
              <MoreHorizontal />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 overflow-hidden rounded-lg p-0" align="end">
            <NavActions standalone={false} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

