"use client"

import * as React from "react"
import {
  ArrowDown,
  ArrowUp,
  Bell,
  Copy,
  CornerUpLeft,
  CornerUpRight,
  FileText,
  GalleryVerticalEnd,
  LineChart,
  Link,
  MoreHorizontal,
  Settings2,
  Star,
  Trash,
  Trash2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

/**
 * NavActions Component
 * 
 * This component provides the menu items for the three-dot menu in the Topbar.
 * It can be used either as a standalone component or as part of the Topbar's
 * more options menu.
 * 
 * Dependencies:
 * - shadcn/ui components: Button, Popover, Sidebar
 * - lucide-react: For all menu icons
 * 
 * Usage:
 * 1. As part of Topbar (standalone={false}):
 *    - Renders just the menu items
 *    - Used inside Topbar's PopoverContent
 * 
 * 2. As standalone (standalone={true}):
 *    - Includes its own wrapper and trigger button
 *    - Used for demo/testing purposes
 * 
 * Menu Structure:
 * - Groups of related actions (customize, file operations, etc.)
 * - Each action has an icon and label
 * - Actions are separated into logical groups with borders
 */

// Data structure defining all menu items and their groups
const data = [
  [
    {
      label: "Customize Page",
      icon: Settings2,
      // Each group is an array of related actions
    },
    {
      label: "Turn into wiki",
      icon: FileText,
    },
  ],
  [
    {
      label: "Copy Link",
      icon: Link,
    },
    {
      label: "Duplicate",
      icon: Copy,
    },
    {
      label: "Move to",
      icon: CornerUpRight,
    },
    {
      label: "Move to Trash",
      icon: Trash2,
    },
  ],
  [
    {
      label: "Undo",
      icon: CornerUpLeft,
    },
    {
      label: "View analytics",
      icon: LineChart,
    },
    {
      label: "Version History",
      icon: GalleryVerticalEnd,
    },
    {
      label: "Show delete pages",
      icon: Trash,
    },
    {
      label: "Notifications",
      icon: Bell,
    },
  ],
  [
    {
      label: "Import",
      icon: ArrowUp,
    },
    {
      label: "Export",
      icon: ArrowDown,
    },
  ],
]

interface NavActionsProps {
  standalone?: boolean  // Controls rendering mode
}

export function NavActions({ standalone = false }: NavActionsProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  // Only auto-open for demo purposes when used in standalone mode
  React.useEffect(() => {
    if (standalone) {
      setIsOpen(true)
    }
  }, [standalone])

  // When used inside the Topbar, we don't need the wrapper elements
  if (!standalone) {
    return (
      <Sidebar collapsible="none" className="bg-transparent">
        <SidebarContent>
          {data.map((group, index) => (
            <SidebarGroup key={index} className="border-b last:border-none">
              <SidebarGroupContent className="gap-0">
                <SidebarMenu>
                  {group.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton>
                        <item.icon /> <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
    )
  }

  // Standalone version with its own trigger
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="hidden font-medium text-muted-foreground md:inline-block">Edit Oct 08</div>
      <Button variant="ghost" size="icon" className="h-7 w-7">
        <Star />
      </Button>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="h-7 w-7 data-[state=open]:bg-accent">
            <MoreHorizontal />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 overflow-hidden rounded-lg p-0" align="end">
          <Sidebar collapsible="none" className="bg-transparent">
            <SidebarContent>
              {data.map((group, index) => (
                <SidebarGroup key={index} className="border-b last:border-none">
                  <SidebarGroupContent className="gap-0">
                    <SidebarMenu>
                      {group.map((item, index) => (
                        <SidebarMenuItem key={index}>
                          <SidebarMenuButton>
                            <item.icon /> <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </div>
  )
}

