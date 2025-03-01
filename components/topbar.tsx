/**
 * Topbar Component
 * 
 * This component renders the application's top navigation bar.
 * It combines static elements with dynamic content managed through the topbar store.
 * 
 * State Management:
 * - Uses Zustand-powered topbar store (@/store/use-topbar-store) for dynamic content
 * - Store provides page title and action buttons that can be updated from any page
 * - Each page component can set its own title and actions using useTopbarStore
 * 
 * Dependencies:
 * - @/store/use-topbar-store: Manages dynamic title and action buttons
 * - @/components/nav-actions: For the more options menu
 * - shadcn/ui components: Button, Popover
 * - lucide-react: For icons
 * 
 * Features:
 * - Dynamic title from store (updated per-page)
 * - Star button with toggle functionality
 * - Dynamic action buttons from store (configurable per-page)
 * - More options menu (three dots)
 * 
 * Example Store Usage in Pages:
 * ```tsx
 * const setTopbar = useTopbarStore((state) => state.setTopbar)
 * useEffect(() => {
 *   setTopbar("Page Title", [actions])
 *   return () => setTopbar("", []) // Cleanup
 * }, [])
 * ```
 */

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
      {/* Left side: Page title */}
      <div className="flex items-center">
        <h1 className="text-xl font-medium">{title}</h1>
      </div>

      {/* Right side: Actions and buttons */}
      <div className="flex items-center gap-2">
        {/* Date - hidden on mobile */}
        <div className="hidden font-medium text-muted-foreground md:inline-block">02-Feb-2025</div>
        
        {/* Star button with toggle state */}
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsStarred(!isStarred)}>
          <Star className={isStarred ? "fill-yellow-400 text-yellow-400" : ""} />
        </Button>

        {/* Dynamic action buttons from store */}
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

        {/* More options menu */}
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

