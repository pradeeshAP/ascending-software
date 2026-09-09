import Image from "next/image";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { navLinks } from "@/data/nav";
import { contactDetails } from "@/data/contact";
import { LinkedInIcon, XIcon, GitHubIcon } from "@/components/ui/SocialIcons";

const email = contactDetails.find((d) => d.label === "Email Us");
const phone = contactDetails.find((d) => d.label === "Call Us");

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/5 bg-marble">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/assets/logo.jpeg"
                alt="Ascending Software logo"
                width={34}
                height={34}
                className="rounded-lg mix-blend-multiply"
              />
              <span className="font-display text-sm font-semibold text-text-primary">
                Ascending Software
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">
              Engineering future-ready technology using modern architectures, cloud-native
              platforms and intelligent automation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[LinkedInIcon, XIcon, GitHubIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-text-secondary transition-colors hover:border-olive hover:text-olive"
                >
                  <Icon className="h-4 w-4 group-hover:animate-icon-pop" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="eyebrow">Navigate</span>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-olive"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="eyebrow">Solutions</span>
            <ul className="flex flex-col gap-3">
              {solutions.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-text-secondary transition-colors hover:text-olive"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="eyebrow">Get in touch</span>
            {email && (
              <a
                href={email.href}
                className="group flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-olive"
              >
                <email.icon className="h-4 w-4" />
                {email.lines[0]}
              </a>
            )}
            {phone && (
              <a
                href={phone.href}
                className="group flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-olive"
              >
                <phone.icon className="h-4 w-4" />
                {phone.lines[0]}
              </a>
            )}
            <Link
              href="/contact"
              className="text-sm font-semibold text-olive transition-colors hover:text-olive-dark"
            >
              Start a Project &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 text-xs text-text-secondary sm:flex-row">
          <span>© {year} Ascending Software. All rights reserved.</span>
          <span>Built for real-world impact.</span>
        </div>
      </div>
    </footer>
  );
}
