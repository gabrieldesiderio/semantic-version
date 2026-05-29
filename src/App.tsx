import { Button } from "./components/ui/button";

export function App() {
  return (
    <div className="flex min-h-svh flex-col gap-4 items-center justify-center p-6">
      <h1 className="font-medium">POC | Semantic Version</h1>
      <Button className="mt-2">Click here</Button>
      <div className="font-mono text-xs text-muted-foreground">
        (Press <kbd>d</kbd> to toggle dark mode)
      </div>
    </div>
  )
}
