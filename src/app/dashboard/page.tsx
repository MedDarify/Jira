/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, CheckCircle, Users, Calendar, BarChart3, Zap, Star, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95
         backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-2 ml-2">
                        {/* <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-accent-foreground" />
            </div> */}
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={85}
                            height={85}
                        />
                    </div>

                    <nav className="hidden md:flex items-center space-x-6">
                        <a
                            href="#features"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Pricing
                        </a>
                        <a
                            href="#testimonials"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Reviews
                        </a>
                        <Button variant="ghost" size="sm">
                            Sign In
                        </Button>
                        <ThemeToggle />
                    </nav>

                    <div className="flex md:hidden items-center space-x-2">
                        <ThemeToggle />
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 md:py-32 p-16">
                <div className="container">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
                            Streamline Your Projects with <span className="text-accent">Seamless Collaboration</span>
                        </h1>
                        <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
                            The modern project management tool that brings teams together. Track tasks, manage workflows, and deliver
                            results faster than ever.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                                Get Started Free
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="lg">
                                Watch Demo
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">No credit card required • 14-day free trial</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-muted/30 p-24">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to manage projects</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Powerful features designed to help teams collaborate effectively and deliver exceptional results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border-border hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <CheckCircle className="h-6 w-6 text-accent" />
                                </div>
                                <CardTitle>Task Management</CardTitle>
                                <CardDescription>
                                    Create, assign, and track tasks with intuitive boards and customizable workflows.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-border hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-accent" />
                                </div>
                                <CardTitle>Team Collaboration</CardTitle>
                                <CardDescription>
                                    Real-time updates, comments, and file sharing to keep everyone on the same page.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-border hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <Calendar className="h-6 w-6 text-accent" />
                                </div>
                                <CardTitle>Timeline Planning</CardTitle>
                                <CardDescription>Visualize project timelines with Gantt charts and milestone tracking.</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-border hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <BarChart3 className="h-6 w-6 text-accent" />
                                </div>
                                <CardTitle>Advanced Analytics</CardTitle>
                                <CardDescription>
                                    Get insights into team performance and project progress with detailed reports.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-border hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <Zap className="h-6 w-6 text-accent" />
                                </div>
                                <CardTitle>Automation</CardTitle>
                                <CardDescription>
                                    Automate repetitive tasks and workflows to focus on what matters most.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-border hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <Star className="h-6 w-6 text-accent" />
                                </div>
                                <CardTitle>Integrations</CardTitle>
                                <CardDescription>
                                    Connect with your favorite tools like Slack, GitHub, and Google Workspace.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 p-24">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by teams worldwide</h2>
                        <p className="text-xl text-muted-foreground">See what our customers have to say about TaskFlow</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-border">
                            <CardContent className="pt-6">
                                <div className="flex items-center space-x-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    "TaskFlow has completely transformed how our team manages projects. The intuitive interface and
                                    powerful features make collaboration effortless."
                                </p>
                                <div className="flex items-center space-x-3">
                                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <span className="text-sm font-medium text-accent">SJ</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">Sarah Johnson</p>
                                        <p className="text-sm text-muted-foreground">Product Manager, TechCorp</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border">
                            <CardContent className="pt-6">
                                <div className="flex items-center space-x-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    "The automation features have saved us countless hours. We can now focus on building great products
                                    instead of managing spreadsheets."
                                </p>
                                <div className="flex items-center space-x-3">
                                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <span className="text-sm font-medium text-accent">MC</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">Mike Chen</p>
                                        <p className="text-sm text-muted-foreground">Engineering Lead, StartupXYZ</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border">
                            <CardContent className="pt-6">
                                <div className="flex items-center space-x-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    "Switching from Jira to TaskFlow was the best decision we made. The user experience is night and day
                                    better."
                                </p>
                                <div className="flex items-center space-x-3">
                                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <span className="text-sm font-medium text-accent">AR</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">Alex Rodriguez</p>
                                        <p className="text-sm text-muted-foreground">Scrum Master, DevTeam</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-accent text-accent-foreground p-24">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your project management?</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Join thousands of teams who have already made the switch to TaskFlow. Start your free trial today.
                        </p>
                        <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                            Start Free Trial
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-border p-16">
                <div className="container">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="h-6 w-6 rounded bg-accent flex items-center justify-center">
                                    <CheckCircle className="h-4 w-4 text-accent-foreground" />
                                </div>
                                <span className="font-bold">TaskFlow</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                The modern project management tool for teams that want to get things done.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Product</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        Integrations
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        API
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Company</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Support</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        Status
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        Privacy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                        <p>&copy; 2024 TaskFlow. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
