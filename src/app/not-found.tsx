import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="text-6xl" aria-hidden>
        🏜️
      </p>
      <h1 className="mt-4 font-display text-3xl font-extrabold">
        <span className="gold-text">Lost in the wilderness</span>
      </h1>
      <p className="mt-2 text-white/70">This page doesn&apos;t exist — or this era hasn&apos;t opened yet.</p>
      <Link href="/" className="btn-gold focus-ring mt-6">
        Back to the journey
      </Link>
    </div>
  );
}
