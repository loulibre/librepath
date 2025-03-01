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
import { Home, SquareTerminal, Clock, Star, Settings2, Bell } from "lucide-react";
import { useEffect, useState } from "react";

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
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/productivity" className="flex items-center gap-2">
                  <SquareTerminal className="h-4 w-4" />
                  <span>Productivity</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              {currentPath === "/productivity/history" && (
                <BreadcrumbItem>
                  <BreadcrumbLink href="/productivity/history" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>History</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
              {currentPath === "/productivity/starred" && (
                <BreadcrumbItem>
                  <BreadcrumbLink href="/productivity/starred" className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span>Starred</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
              {currentPath === "/productivity/settings" && (
                <BreadcrumbItem>
                  <BreadcrumbLink href="/productivity/settings" className="flex items-center gap-2">
                    <Settings2 className="h-4 w-4" />
                    <span>Settings</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
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
