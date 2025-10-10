import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Mail, 
  Github, 
  BookOpen,
  Rocket,
  ExternalLink,
  Linkedin,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Terminal,
  Palette,
  Cpu,
  HardDrive,
  MemoryStick,
  Laptop
} from "lucide-react"

export default function About() {

  const currentActivities = [
    "Working full-time as a software engineer",
    "Tweaking this website",
    "Learning React Native and mobile development",
    "Contributing to open-source projects",
    "Eating healthy and cooking",
    "Working out"
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/25">
                <span className="text-5xl">👋</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-100 dark:to-white bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Learn more about my journey as a software engineer, my current projects, and what drives my passion for technology.
          </p>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Bio & Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text -slate-300 leading-relaxed">
                  I am a passionate software engineer with a love for creating innovative solutions that make a real difference. 
                  My journey began over a decade ago when I wrote my first line of code, and since then, I&apos;ve been on an 
                  incredible adventure through the ever-evolving world of technology.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I believe in writing clean, maintainable code and creating user experiences that truly matter. 
                  Whether it&apos;s building scalable web applications or contributing to open-source projects, 
                  I&apos;m always excited to tackle new challenges and learn something new.
                </p>
              </CardContent>
            </Card>

            {/* Current Activities */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  What I&apos;m Doing Now
                </CardTitle>
                <CardDescription>
                  Updated October 11th, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {currentActivities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Hardware Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  Hardware Setup
                </CardTitle>
                <CardDescription>
                  My development machines and specifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Main Desktop */}
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="w-6 h-6 text-blue-600" />
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Main Desktop PC</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-slate-500" />
                      <div>
                        <div className="font-medium text-sm">Processor</div>
                        <div className="text-xs text-muted-foreground">Intel Core i7-12700K</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MemoryStick className="w-4 h-4 text-slate-500" />
                      <div>
                        <div className="font-medium text-sm">Memory</div>
                        <div className="text-xs text-muted-foreground">32GB DDR4 3200MHz</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-4 h-4 text-slate-500" />
                      <div>
                        <div className="font-medium text-sm">Storage</div>
                        <div className="text-xs text-muted-foreground">1TB NVMe SSD + 2TB HDD</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Monitor className="w-4 h-4 text-slate-500" />
                      <div>
                        <div className="font-medium text-sm">Graphics</div>
                        <div className="text-xs text-muted-foreground">NVIDIA RTX 3070</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop */}
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Laptop className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Laptop</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Laptop className="w-4 h-4 text-slate-500" />
                      <div>
                        <div className="font-medium text-sm">Model</div>
                        <div className="text-xs text-muted-foreground">MacBook Pro 14&quot; M2 Pro</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MemoryStick className="w-4 h-4 text-slate-500" />
                      <div>
                        <div className="font-medium text-sm">Memory</div>
                        <div className="text-xs text-muted-foreground">16GB Unified Memory</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-4 h-4 text-slate-500" />
                      <div>
                        <div className="font-medium text-sm">Storage</div>
                        <div className="text-xs text-muted-foreground">512GB SSD</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Monitor className="w-4 h-4 text-slate-500" />
                      <div>
                        <div className="font-medium text-sm">Display</div>
                        <div className="text-xs text-muted-foreground">14&quot; Liquid Retina XDR</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Peripherals */}
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-4">Peripherals & Accessories</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="text-sm">
                      <span className="font-medium">Monitor:</span>
                      <span className="text-muted-foreground ml-2">Dell UltraSharp 27&quot; 4K</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Keyboard:</span>
                      <span className="text-muted-foreground ml-2">Keychron K2 Mechanical</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Mouse:</span>
                      <span className="text-muted-foreground ml-2">Logitech MX Master 3</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Headphones:</span>
                      <span className="text-muted-foreground ml-2">Sony WH-1000XM4</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Webcam:</span>
                      <span className="text-muted-foreground ml-2">Logitech C920 HD Pro</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Microphone:</span>
                      <span className="text-muted-foreground ml-2">Blue Yeti USB</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  My setup is designed for both performance and comfort during long coding sessions. 
                  The desktop handles heavy development work while the MacBook provides excellent portability for work on the go.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact & Personal */}
          <div className="space-y-8">
            {/* Contact Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Let&apos;s connect and collaborate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 h-auto py-3"
                  asChild
                >
                  <a href="mailto:diassnorrman@gmail.com">
                    <Mail className="w-4 h-4" />
                    <div className="text-left">
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">diassnorrman@gmail.com</div>
                    </div>
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 h-auto py-3"
                  asChild
                >
                  <a href="https://github.com/diasoy" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    <div className="text-left">
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm text-muted-foreground">@diasoy</div>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 h-auto py-3"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/diasnormann" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    <div className="text-left">
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">@diasnormann</div>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Tools Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  Tools & Setup
                </CardTitle>
                <CardDescription>
                  Development tools and software I use daily
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <Monitor className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-sm">VS Code</div>
                    <div className="text-xs text-muted-foreground">Primary code editor with extensions</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <Terminal className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-sm">Terminal & Git</div>
                    <div className="text-xs text-muted-foreground">Command line tools and version control</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <Palette className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="font-medium text-sm">Figma</div>
                    <div className="text-xs text-muted-foreground">UI/UX design and prototyping</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <Database className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-sm">Database Tools</div>
                    <div className="text-xs text-muted-foreground">PostgreSQL, MongoDB, Prisma</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <Cloud className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="font-medium text-sm">Cloud Services</div>
                    <div className="text-xs text-muted-foreground">AWS, Vercel, Docker deployment</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <Smartphone className="w-5 h-5 text-indigo-600" />
                  <div>
                    <div className="font-medium text-sm">Testing Tools</div>
                    <div className="text-xs text-muted-foreground">Jest, Cypress, React Testing Library</div>
                  </div>
                </div>
                
                <Separator />
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  I believe in using the right tools for the job. My setup focuses on productivity, 
                  clean code, and efficient workflows that help me deliver quality software.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
