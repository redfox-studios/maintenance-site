export default function Home() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Status dot */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="text-accent text-xs uppercase tracking-[0.2em]">Maintenance in progress</span>
        </div>

        <h1 className="text-text text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          We&apos;ll be back soon
        </h1>

        <p className="text-text-muted text-base leading-relaxed mb-10">
          The site is currently down for scheduled maintenance.
          <br />
          Sorry for the inconvenience.
        </p>

        <div className="h-px w-16 bg-border mx-auto mb-8" />

        <p className="text-text-faint text-xs tracking-wide">
          &copy; {new Date().getFullYear()} - RedFox Studios, All rights reserved
        </p>
      </div>
    </div>
  );
}