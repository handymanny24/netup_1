import { useEffect, useRef, useState } from 'react';

export function AmbientBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay might be blocked in low-power modes; keep fallback visible
      });
    }
    const timer = window.setTimeout(() => setReady(true), 250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        src="/media/motionsites-background.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setReady(true)}
        className={`h-full w-full object-cover transition-opacity duration-1000 ${
          ready ? 'opacity-90' : 'opacity-0'
        }`}
      />
      {/* Subtle atmospheric vignette for legibility across all pages */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 42%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.62) 78%, rgba(0,0,0,0.82) 100%)',
        }}
      />
    </div>
  );
}
