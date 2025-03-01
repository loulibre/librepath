/**
 * What: App Sidebar Inset
 * A component that provides the top navigation bar and breadcrumb functionality for the application.
 * 
 * Why:
 * - Provides consistent navigation structure across the application
 * - Displays current location through breadcrumbs
 * - Handles sidebar toggle and notification controls
 * 
 * How:
 * - Uses client-side navigation tracking with useState and useEffect
 * - Integrates with UI components from shadcn/ui:
 *   - Sidebar components for layout
 *   - Breadcrumb for navigation path
 *   - Tooltip for UI hints
 * - Dependencies:
 *   - ../ui/sidebar: SidebarInset, SidebarTrigger
 *   - ../ui/breadcrumb: Navigation components
 *   - lucide-react: Icon components
 * 
 * When:
 * - Rendered as part of the main application layout
 * - Active whenever the application is running
 * - Updates on route changes through useEffect
 */

"use client";

import { SidebarInset } from "../ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Socials from "@/components/socials";
import { SidebarTrigger } from "../ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
// Add LayoutDashboard to the imports
// Update the imports to include Archive
import { Home, SquareTerminal, Clock, Star, Settings2, Bell, LayoutDashboard, Archive } from "lucide-react";
import { useEffect, useState } from "react";
// Add to imports
import { FolderUp, FolderSync, Grid3x3 } from "lucide-react";

export function AppSidebarInset({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <SidebarInset className="overflow-x-hidden">
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 justify-between">
        <div className="flex items-center gap-2 px-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarTrigger className="-ml-1" />
            </TooltipTrigger>
            <TooltipContent side="bottom" align="start">
              Toggle Sidebar <kbd className="ml-2">⌘+b</kbd>
            </TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />

              {currentPath === "/productivity/dashboard" && (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/productivity" className="flex items-center gap-2">
                      <SquareTerminal className="h-4 w-4" />
                      <span>Productivity</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/productivity/dashboard" className="flex items-center gap-2">
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboard</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}

              {/* ... other productivity pages ... */}

              {currentPath === "/archives/dashboard" && (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/archives" className="flex items-center gap-2">
                      <Archive className="h-4 w-4" />
                      <span>Archives</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/archives/dashboard" className="flex items-center gap-2">
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboard</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}

              {/* ... other archives pages ... */}

              {currentPath === "/productivity/calendar" && (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/productivity" className="flex items-center gap-2">
                      <SquareTerminal className="h-4 w-4" />
                      <span>Productivity</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/productivity/calendar" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Calendar</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}

              {currentPath === "/productivity/starred" && (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/productivity" className="flex items-center gap-2">
                      <SquareTerminal className="h-4 w-4" />
                      <span>Productivity</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/productivity/starred" className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      <span>Starred</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}

              {currentPath === "/productivity/settings" && (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/productivity" className="flex items-center gap-2">
                      <SquareTerminal className="h-4 w-4" />
                      <span>Productivity</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/productivity/settings" className="flex items-center gap-2">
                      <Settings2 className="h-4 w-4" />
                      <span>Settings</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}

              {currentPath === "/archives/uploads" && (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/archives" className="flex items-center gap-2">
                      <Archive className="h-4 w-4" />
                      <span>Archives</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/archives/uploads" className="flex items-center gap-2">
                      <FolderUp className="h-4 w-4" />
                      <span>Uploads</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}

              {currentPath === "/archives/scan" && (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/archives" className="flex items-center gap-2">
                      <Archive className="h-4 w-4" />
                      <span>Archives</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/archives/scan" className="flex items-center gap-2">
                      <FolderSync className="h-4 w-4" />
                      <span>Scan</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}

              {currentPath === "/archives/reports" && (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/archives" className="flex items-center gap-2">
                      <Archive className="h-4 w-4" />
                      <span>Archives</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/archives/reports" className="flex items-center gap-2">
                      <Grid3x3 className="h-4 w-4" />
                      <span>Reports</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mr-2 sm:mr-4">
          <Bell className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
        </div>
      </header>
      {children}
    </SidebarInset>
  );
}
