// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-800 dark:border-white bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Colonne 1 : Présentation & Coordonnées */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/favicon.ico"
                alt={siteConfig.name}
                width={30}
                height={30}
                className="w-6 h-6 shrink-0 rounded-sm"
              />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {siteConfig.nom_entreprise.prefix}
                <span className="text-blue-600 dark:text-blue-500">
                  {siteConfig.nom_entreprise.suffix}
                </span>
              </h3>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              {siteConfig.description}
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div className="space-y-4 md:justify-self-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Liens sociaux & Réseaux */}
          <div className="space-y-4 md:justify-self-end">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Réseaux & Code
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Image
                  src="/icons/github.png"
                  alt="GitHub"
                  width={30}
                  height={30}
                  className="shrink-0 dark:invert"
                />
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="shrink-0"
                />
              </a>

            </div>
          </div>

        </div>

        {/* Séparateur & Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-4">
          <p>© {currentYear} {siteConfig.name}. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:underline">
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}