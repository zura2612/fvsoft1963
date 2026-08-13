// components/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface HeroProps {
  /** Classe CSS optionnelle pour le conteneur principal */
  className?: string;
}

// Variantes d'animation typées avec délai personnalisé
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <section className={`relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden py-16 md:py-24 rounded-2xl ${className}`}>
      
      {/* 1. ARRIÈRE-PLAN : Image Next.js optimisée en positionnement absolu */}
      <Image
        src="/images/fond_hero.webp"
        alt="Arrière-plan fvsoft1963"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* 2. OVERLAY : Masque léger pour garantir la lisibilité du texte */}
      <div className="absolute inset-0 bg-slate-950/30 z-10 pointer-events-none" />

      {/* 3. CONTENU : Texte, Badges et Boutons */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-white">
        
        {/* Badge d'état animé */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/20 backdrop-blur-md text-blue-200 text-xs font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
          </span>
          <span className="text-sm">A votre service</span>
        </motion.div>

        {/* Titre Principal */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md"
        >
          Conception & Développement <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300">
            d'applications Web High-Tech
          </span>
        </motion.h1>

        {/* Pitch / Description */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-lg sm:text-xl text-slate-100 max-w-2xl leading-relaxed drop-shadow"
        >
          Développeur Full-Stack spécialisé dans les écosystèmes modernes et le déploiement Serverless Edge sur le réseau Cloudflare.
        </motion.p>

        {/* Boutons d'action (CTA) */}
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/realisations"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-900/30 transition-all w-full sm:w-auto"
          >
            Découvrir nos réalisations
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300/40 bg-slate-900/50 hover:bg-slate-800/70 backdrop-blur-sm text-white font-medium transition-all w-full sm:w-auto"
          >
            Nous contacter
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;