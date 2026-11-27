import { useRef, useState, useEffect, useCallback } from 'react';

/**
 * Lightweight Web Audio nocturnal ambient pad for the hero sound toggle.
 * Starts muted and only initializes AudioContext on user gesture.
 */
export function useAmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscsRef = useRef<OscillatorNode[]>([]);

  const toggleSound = useCallback(() => {
    try {
      if (!ctxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;

        const ctx = new AudioCtx();
        const master = ctx.createGain();
        master.gain.value = 0;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 340;

        master.connect(filter);
        filter.connect(ctx.destination);

        // Warm nocturnal fifth chord (A2 + E3 + B3)
        const freqs = [110, 164.81, 246.94];
        const oscs = freqs.map((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx === 0 ? 'sine' : 'triangle';
          osc.frequency.value = freq;

          const voiceGain = ctx.createGain();
          voiceGain.gain.value = idx === 0 ? 0.09 : 0.035;

          osc.connect(voiceGain);
          voiceGain.connect(master);
          osc.start();
          return osc;
        });

        ctxRef.current = ctx;
        masterGainRef.current = master;
        oscsRef.current = oscs;
      }

      const ctx = ctxRef.current;
      const master = masterGainRef.current;
      if (!ctx || !master) return;

      if (ctx.state === 'suspended') {
        void ctx.resume();
      }

      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);

      if (isPlaying) {
        master.gain.linearRampToValueAtTime(0, now + 0.6);
        setIsPlaying(false);
      } else {
        master.gain.linearRampToValueAtTime(0.45, now + 0.9);
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying((p) => !p);
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      oscsRef.current.forEach((osc) => {
        try {
          osc.stop();
        } catch {
          // ignore
        }
      });
      if (ctxRef.current) {
        void ctxRef.current.close();
      }
    };
  }, []);

  return { isPlaying, toggleSound };
}
