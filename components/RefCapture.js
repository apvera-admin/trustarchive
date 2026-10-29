'use client';
import { useEffect } from 'react';
import { REF_STORAGE_KEY, sanitizeRef } from '../lib/waitlist';

// Remembers the first valid ?ref= value a visitor arrives with, so it can be
// attached to their waitlist signup later. Renders nothing.
export default function RefCapture() {
  useEffect(() => {
    try {
      const ref = sanitizeRef(new URLSearchParams(window.location.search).get('ref'));
      if (ref && !localStorage.getItem(REF_STORAGE_KEY)) {
        localStorage.setItem(REF_STORAGE_KEY, ref);
      }
    } catch {
      // Storage blocked (private mode, etc.) — signup still works without a source.
    }
  }, []);

  return null;
}
