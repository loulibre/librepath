export default function ArchivesPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Archives</h1>
      <p className="text-muted-foreground">
        Upload and manage your zip archives
      </p>
      
      <div className="mt-6 border rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">Upload Archive</h2>
        <p className="mb-4">Select a zip file to upload to the application.</p>
        
        <div className="p-8 border-2 border-dashed rounded-lg text-center">
          <p className="text-muted-foreground">
            Archive upload functionality coming soon
          </p>
        </div>
      </div>
    </div>
  );
}