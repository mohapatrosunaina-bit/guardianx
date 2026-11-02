import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sun, Lock, UserCheck } from "lucide-react";

export function HumanTruthSection() {
  return (
    <section className="py-24 md:py-32 border-t border-gx-border/40 relative overflow-hidden" id="human-truth">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="The Human Truth"
            title="Living independently shouldn’t mean"
            titleAccent="being alone."
            description="True independence is not about total isolation. It is about waking up in your own home, making morning tea your own way, and knowing that the people who love you have clarity if your rhythm falters."
            align="center"
          />

          <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gx-carbon via-gx-carbon to-gx-obsidian border border-gx-border relative shadow-panel">
            <div className="space-y-6 text-base sm:text-lg text-gx-warmWhite/90 leading-relaxed font-sans max-w-2xl mx-auto text-left">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:font-extrabold first-letter:text-gx-vermilion first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Ananya is 74. She has lived in her Bengaluru apartment for thirty-two years. She knows the exact
                angle of morning sunlight across her balcony plants, the creak of the floorboard outside the
                kitchen, and the quiet comfort of afternoon reading.
              </p>
              <p className="text-gx-mineral">
                Her daughter Kavita lives twelve kilometres away across heavy city traffic. Kavita worries
                quietly every afternoon:{" "}
                <em className="text-gx-warmWhite not-italic">
                  Did Ma slip near the bathroom? Is her silence peaceful reading, or is she immobilized?
                </em>
              </p>
              <p className="text-gx-mineral">
                Traditional solutions present an intolerable choice: sterile panic buttons that feel clinical
                and stigmatizing, or invasive optical video cameras that strip away a mother’s privacy in her own home.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gx-border/50 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-5 rounded-2xl bg-gx-obsidian/70 border border-gx-border/60">
                <div className="w-10 h-10 rounded-xl bg-gx-carbon border border-gx-chalk/20 flex items-center justify-center text-gx-chalk mb-3">
                  <Sun className="w-5 h-5 text-gx-amber" />
                </div>
                <h4 className="font-display font-bold text-base text-gx-warmWhite">Freedom &amp; Reassurance</h4>
                <p className="text-xs text-gx-mineral mt-1.5 leading-relaxed">
                  Support that respects autonomy. Older adults retain full freedom of routine without being made
                  to feel fragile or dependent.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gx-obsidian/70 border border-gx-border/60">
                <div className="w-10 h-10 rounded-xl bg-gx-carbon border border-gx-citron/20 flex items-center justify-center text-gx-citron mb-3">
                  <Lock className="w-5 h-5 text-gx-citron" />
                </div>
                <h4 className="font-display font-bold text-base text-gx-warmWhite">Privacy &amp; Awareness</h4>
                <p className="text-xs text-gx-mineral mt-1.5 leading-relaxed">
                  Environmental sensing without optical surveillance. Contextual indicators protect personal
                  dignity inside private spaces.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gx-obsidian/70 border border-gx-border/60">
                <div className="w-10 h-10 rounded-xl bg-gx-carbon border border-gx-vermilion/20 flex items-center justify-center text-gx-vermilion mb-3">
                  <UserCheck className="w-5 h-5 text-gx-vermilion" />
                </div>
                <h4 className="font-display font-bold text-base text-gx-warmWhite">Human Care First</h4>
                <p className="text-xs text-gx-mineral mt-1.5 leading-relaxed">
                  Technology that brings families closer rather than replacing the warmth of a daughter checking
                  on her mother.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
