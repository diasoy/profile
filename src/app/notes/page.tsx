import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Notes() {
  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto flex max-w-3xl items-center justify-center px-6 py-20">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl">Notes</CardTitle>
            <CardDescription>
              Short learnings, snippets, and personal notes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
