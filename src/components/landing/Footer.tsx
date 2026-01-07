import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050708] border-t border-border-light pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[rgba(99,242,154,0.05)] to-transparent pointer-events-none"></div>
      <div className="container max-w-[var(--container-width)] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-15">
          <div className="lg:col-span-2">
            <Link
              href="#"
              className="flex items-center gap-2 font-bold text-xl text-white no-underline mb-5"
            >
              <div className="w-6 h-6 bg-accent-primary rounded-md"></div>
              INDUS
            </Link>
            <p className="text-[14px] text-text-secondary leading-[1.6]">
              Building the next generation of conversational AI infrastructure
              for the enterprise.
            </p>
          </div>
          <div>
            <h4 className="text-[14px] text-white mb-5 font-semibold">
              Product
            </h4>
            <ul className="list-none p-0">
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Agents
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Phone Numbers
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Observability
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] text-white mb-5 font-semibold">
              Company
            </h4>
            <ul className="list-none p-0">
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] text-white mb-5 font-semibold">
              Developers
            </h4>
            <ul className="list-none p-0">
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Status
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden lg:block">
            {" "}
            {/* Spacer or extra col if needed, handled by grid */}
            <h4 className="text-[14px] text-white mb-5 font-semibold">Legal</h4>
            <ul className="list-none p-0">
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border-light flex justify-between items-center text-[13px] text-text-muted">
          <div>&copy; 2024 Indus AI Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-inherit hover:text-white transition-colors"
            >
              <i className="ph ph-twitter-logo text-lg"></i>
            </Link>
            <Link
              href="#"
              className="text-inherit hover:text-white transition-colors"
            >
              <i className="ph ph-linkedin-logo text-lg"></i>
            </Link>
            <Link
              href="#"
              className="text-inherit hover:text-white transition-colors"
            >
              <i className="ph ph-github-logo text-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
