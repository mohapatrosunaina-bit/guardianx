import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-gx-border bg-gx-obsidian pt-16 pb-12 text-gx-mineral text-xs">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gx-border/50">
          <div className="md:col-span-2 space-y-4">
            <Link className="flex items-center gap-2.5" href="#top">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gx-vermilion to-gx-clay flex items-center justify-center text-gx-warmWhite">
                <Shield className="w-4 h-4 fill-current" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-gx-warmWhite">
                GUARDIAN<span className="text-gx-vermilion">X</span>
              </span>
            </Link>
            <p className="text-gx-mineral max-w-sm leading-relaxed">
              Detect a potential safety signal. Interpret context with care.
              Coordinate family check-ins. Keep human relationships centered.
              Independent-living safety intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase text-gx-warmWhite tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#top" className="hover:text-gx-chalk transition-colors">
                  The Living Guardian
                </a>
              </li>
              <li>
                <a href="#human-truth" className="hover:text-gx-chalk transition-colors">
                  The Human Truth
                </a>
              </li>
              <li>
                <a href="#rhythm" className="hover:text-gx-chalk transition-colors">
                  Daily Rhythm &amp; Context
                </a>
              </li>
              <li>
                <a href="#interactive-guardian" className="hover:text-gx-chalk transition-colors">
                  Spatial Environment
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-gx-chalk transition-colors">
                  Care Response Console
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-gx-chalk transition-colors">
                  Layered Architecture
                </a>
              </li>
              <li>
                <a href="#principles" className="hover:text-gx-chalk transition-colors">
                  Ethical Principles
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-gx-chalk transition-colors">
                  Project &amp; Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase text-gx-warmWhite tracking-wider mb-3">
              Project Context
            </h4>
            <div className="space-y-2 text-gx-mineral">
              <p>
                <strong className="text-gx-warmWhite block">Project:</strong>
                GuardianX
              </p>
              <p>
                <strong className="text-gx-warmWhite block">Category:</strong>
                Elderly Remote Safety
              </p>
              <p>
                <strong className="text-gx-warmWhite block">Creator:</strong>
                Sunaina Mohapatra
              </p>
              <p>
                <strong className="text-gx-warmWhite block">Stage:</strong>
                Concept and interactive frontend prototype
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gx-mineral">
          <div>
            &copy; 2026 GuardianX &middot; Independent-Living Safety Intelligence.
          </div>
          <div className="max-w-xl text-center md:text-right">
            <span className="text-gx-citron font-mono">SIMULATION DISCLOSURE:</span>{" "}
            All environmental and kinetic events displayed are simulated for
            research demonstration. No private surveillance or clinical diagnostics
            are performed.
          </div>
        </div>
      </Container>
    </footer>
  );
}
