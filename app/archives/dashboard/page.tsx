"use client";

/**
 * Archives Dashboard Page
 * 
 * Purpose:
 * - Main dashboard view for the Archives section
 * - Corresponds to the sidebar menu item under Archives > Dashboard
 * - Matches the breadcrumb navigation path: Home > Archives > Dashboard
 */

export default function ArchivesDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Archives Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome to the Archives dashboard. This page displays archived content and management tools.
      </p>
    </div>
  );
}