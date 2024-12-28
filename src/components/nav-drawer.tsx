export default function NavDrawer() {
  return (
    <div>
      <div
        onClick={toggleNav}
        className="absolute right-5 top-5 z-50 rounded border border-white/70 p-2 text-white/70 backdrop-blur-3xl md:hidden"
      >
        {isNavOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      <nav
        className={cn(
          "inset-0 h-screen w-screen -translate-x-full transform bg-background/90 transition-transform duration-300 md:hidden",
          {
            "translate-x-0": isNavOpen,
          },
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="border-border [&:nth-last-child(2)]:border-t"
            >
              {link.internalLink ? (
                <button
                  ref={(el) => {
                    navLinkButtons.current[index] = el;
                  }}
                  onClick={() =>
                    link.internalLink === "#contact"
                      ? handleScrollToContactForm()
                      : handleScrollToInternalLink(link.internalLink!, 48)
                  }
                  // className="rounded-3xl px-4 py-1"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  tabIndex={-1}
                  href={link.externalLink!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-fit"
                >
                  <button
                    ref={(el) => {
                      navLinkButtons.current[index] = el;
                    }}
                    // className="rounded-3xl px-4 py-1"
                  >
                    {link.label}
                  </button>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
