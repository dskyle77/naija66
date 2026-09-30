export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/80">
      <div className="container flex flex-col items-start justify-between gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center">
        <p>Naija66 · Nigeria since 1960</p>
        <p>
          Built by{" "}
          <a
            href="https://dskyle77.vercel.app"
            className="font-medium text-blue-600 underline-offset-4 hover:text-primary hover:underline transition-all duration-300 ease-in-out"
          >
            David Onyema
          </a>
        </p>
      </div>
    </footer>
  );
}
