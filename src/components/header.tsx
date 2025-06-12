"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className={`sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/40 ${poppins.className}`}>
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold">LangIQ</span>
                    </Link>
                </div>

                {/* Desktop Navigation - moved to right */}
                <div className="flex items-center space-x-4">
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/"
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/ai-studio"
                                >
                                    AI Studio
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/hardware"
                                >
                                    Hardware
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/prompt"
                                >
                                    Prompt
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/rag"
                                >
                                    RAG
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/tools"
                                >
                                    Tools
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/augmentation"
                                >
                                    Augmentation
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/fine-tuning"
                                >
                                    Fine Tuning
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/agents"
                                >
                                    Agents
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/case-studies"
                                >
                                    Case Studies
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:font-bold focus:font-bold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:font-bold data-[state=open]:font-bold"
                                    href="/contact"
                                >
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t bg-background">
                        <Link
                            href="/"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/ai-studio"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            AI Studio
                        </Link>
                        <Link
                            href="/hardware"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Hardware
                        </Link>
                        <Link
                            href="/prompt"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Prompt
                        </Link>
                        <Link
                            href="/rag"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            RAG
                        </Link>
                        <Link
                            href="/tools"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Tools
                        </Link>
                        <Link
                            href="/augmentation"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Augmentation
                        </Link>
                        <Link
                            href="/fine-tuning"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Fine Tuning
                        </Link>
                        <Link
                            href="/agents"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Agents
                        </Link>
                        <Link
                            href="/case-studies"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-2 text-base font-medium text-foreground hover:font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
