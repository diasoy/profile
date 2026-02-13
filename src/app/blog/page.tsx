import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Blog() {
  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto flex max-w-3xl items-center justify-center px-6 py-20">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl">Blog</CardTitle>
            <CardDescription>
              Longer writing, tutorials, and stories.
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
