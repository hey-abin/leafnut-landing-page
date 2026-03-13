const Footer = () => (
  <footer id="contact" className="border-t border-border py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <p className="font-heading text-2xl font-semibold text-foreground mb-2">Leafnut</p>
      <p className="font-body text-sm text-muted-foreground mb-8">
        Pure nature, bottled for you.
      </p>

      <div className="flex justify-center gap-8 mb-10">
        {["Instagram", "Facebook", "Pinterest"].map((s) => (
          <a
            key={s}
            href="#"
            className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {s}
          </a>
        ))}
      </div>

      <p className="font-body text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Leafnut. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
