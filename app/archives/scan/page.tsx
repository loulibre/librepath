"use client";

/**
 * Archives Scan Page
 * 
 * Purpose:
 * - Provides scanning functionality for the Archives section
 * - Corresponds to the sidebar menu item under Archives > Scan
 * - Matches the breadcrumb navigation path: Home > Archives > Scan
 */

export default function ArchivesScan() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Archives Scan</h1>
      <p className="text-muted-foreground">
        Scan and process documents for archiving.
      </p>
    </div>
  );
}