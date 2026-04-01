import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <p className="text-8xl font-bold mb-6 text-accent">404</p>
        <h1 className="text-xl font-semibold mb-3 text-text">
          Page not found
        </h1>
        <p className="text-sm mb-8 text-text-muted">
          Whatever you were looking for doesn&apos;t exist here.
        </p>
        <Link
          href="/"
          className="text-xs uppercase tracking-widest px-5 py-2.5 border border-accent text-accent hover:bg-accent-dim transition-colors"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}