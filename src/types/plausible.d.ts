interface PlausibleOptions {
  props?: Record<string, string>;
  u?: string; // optional URL override
}

interface Window {
  plausible: (event: string, options?: PlausibleOptions) => void;
}
