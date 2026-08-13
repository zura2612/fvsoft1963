import React from 'react';
import { motion, Variants } from 'framer-motion';

// ==========================================
// 1. TYPES & INTERFACES (Props & Modèle)
// ==========================================

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ServicesProps {
  /** Classe CSS optionnelle pour surcharger le conteneur principal */
  className?: string;
}

// ==========================================
// 2. DONNÉES EN DUR (Contrainte #1)
// ==========================================

const SERVICES_DATA: Service[] = [
  {
    id: '1',
    title: 'Développement Web sur Mesure',
    description:
      'Conception d\'applications web rapides, modernes et scalables, adaptées aux exigences métiers spécifiques.',
    tags: ['React', 'TypeScript', 'Next.js'],
  },
  {
    id: '2',
    title: 'Audit & Performance Web',
    description:
      'Analyse approfondie du code, optimisation des temps de chargement, Core Web Vitals et référencement technique.',
    tags: ['Lighthouse', 'SEO', 'Performance'],
  },
  {
    id: '3',
    title: 'Architecture & API REST / Serverless',
    description:
      'Mise en place d\'architectures légères et robustes, intégration d\'API et déploiement edge/serverless.',
    tags: ['Cloudflare', 'Node.js', 'Workers'],
  },
];

// ==========================================
// 3. VARIANTES FRAMER MOTION TYPÉES (Contrainte #3)
// ==========================================

/** Animation de l'en-tête de section */
const headerVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier pour un arrêt fluide
    },
  },
};

/** Conteneur de la grille : gère le déclenchement en cascade (Stagger) */
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Décalage de 150ms entre chaque carte
      delayChildren: 0.1,
    },
  },
};

/** Animation individuelle de chaque carte de service */
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// ==========================================
// 4. COMPOSANT PRINCIPAL
// ==========================================

export const Services: React.FC<ServicesProps> = ({ className = '' }) => {
  return (
    <div className={`w-full py-16 ${className}`}>
      
      {/* SECTION 1 : En-tête / Intro de la section */}
      <section className="container mx-auto px-4 mb-16 bg-gray-50/50 dark:bg-gray-950/50 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={headerVariants}
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-grey-900 dark:text-white mb-4">
            Nos Services & Prestations
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Des compétences techniques spécialisées pour concrétiser et optimiser vos projets digitaux.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 : Grille des Services animée au défilement */}
      <section className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Déclenche l'animation à 20% de visibilité
          variants={gridContainerVariants}
        >
          {SERVICES_DATA.map((service) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeInOut' } }}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default Services;