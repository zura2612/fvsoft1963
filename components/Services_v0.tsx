// components/Services_v0.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Cpu, Gauge, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Code2;
  technologies: string[];
}

const services: Service[] = [
  {
    id: "fullstack",
    title: "Développement Web Full-Stack",
    description:
      "Conception d'applications web réactives, robustes et maintenables. Du schéma de données jusqu'à l'interface utilisateur.",
    icon: Code2,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "serverless",
    title: "Architecture Serverless & Edge Cloudflare",
    description:
      "Déploiement global à faible latence. Utilisation des Workers, KV namespaces et Pager pour des performances optimales.",
    icon: Cpu,
    technologies: ["Cloudflare Workers", "Pages", "KV / D1", "Hono", "Edge API"],
  },
  {
    id: "audit",
    title: "Audit & Performance Web",
    description:
      "Optimisation du temps de chargement, Core Web Vitals, réduction du bundle JS et mise aux normes d'accessibilité.",
    icon: Gauge,
    technologies: ["Lighthouse", "Web Vitals", "bundle-analyzer", "SEO", "Cache Strategy"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-950/50 border-y border-gray-200/60 dark:border-gray-800/60">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* En-tête de section */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Nos Services & Prestations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Des solutions logicielles sur-mesure adaptées aux exigences modernes du web et du Cloud.
          </p>
        </div>

        {/* Grille des 3 cartes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const targetUrl = `/contact?subject=${encodeURIComponent(service.title)}`;

            return (
              <motion.div key={service.id} variants={cardVariants} className="h-full">
                <Link
                  href={targetUrl}
                  className="group relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div>
                    {/* Icône du service */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>

                    {/* Titre & Description */}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Badges de technologies + CTA */}
                  <div className="pt-6 border-t border-gray-100 dark:border-gray-800/80">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                      <span>En savoir plus</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}