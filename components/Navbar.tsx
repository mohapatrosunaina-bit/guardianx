"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Living Guardian", href: "#living-guardian-hero" },
    { name: "The Vision", href: "#human-truth" },
    { name: "Daily Rhythm", href: "#rhythm" },
    { name: "Interactive Space", href: "#interactive-guardian" },
    { name: "Response Console", href: "#demo" },
    { name: "Architecture", href: "#architecture" },
    { name: "Ethical Principles", href: "#principles" },
    { name: "Project", href: "#project" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gx-obsidian/92 backdrop-blur-md border-b border-gx-border py-3 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-b border-gx-chalk/[0.05] py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="#top"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gx-citron rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gx-vermilion to-gx-clay flex items-center justify-center text-gx-warmWhite shadow-[0_0_20px_rgba(198,91,61,0.35)] group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center font-display font-extrabold text-xl tracking-tight text-gx-warmWhite">
                GUARDIAN<span className="text-gx-vermilion">X</span>
              </div>
              <div className="text-[9px] font-mono tracking-widest text-gx-mineral uppercase font-medium leading-none">
                Independent Living Safety Intelligence
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-gx-mineral">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gx-chalk transition-colors tracking-wide py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#demo">
              <Button size="sm" className="group">
                <span>Explore Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gx-mineral hover:text-gx-warmWhite hover:bg-gx-carbon border border-gx-border focus:outline-none focus:ring-2 focus:ring-gx-citron"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-gx-obsidian/95 backdrop-blur-xl border-b border-gx-border p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gx-mineral hover:text-gx-warmWhite py-2 border-b border-gx-border/40"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a href="#demo" onClick={() => setIsMobileMenuOpen(false)}>
                <Button size="md" className="w-full justify-center">
                  <span>Explore Demo</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
