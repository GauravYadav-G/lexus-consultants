import { useEffect, useState } from "react";

type LoaderPhase = "visible" | "exiting" | "hidden";

/** Initial document loader. The timeout is a safety net for slow or failed assets. */
export function PageLoader() {
  const [phase, setPhase] = useState<LoaderPhase>("visible");

  useEffect(() => {
    const startedAt = performance.now();
    let phaseTimer = 0;
    let fallbackTimer = 0;
    let completed = false;

    const finishLoading = () => {
      if (completed) return;
      completed = true;
      window.clearTimeout(fallbackTimer);

      // Keep the opening transition brief while avoiding a flash on fast loads.
      const remainingMinimum = Math.max(0, 450 - (performance.now() - startedAt));
      phaseTimer = window.setTimeout(() => {
        setPhase("exiting");
        phaseTimer = window.setTimeout(() => setPhase("hidden"), 420);
      }, remainingMinimum);
    };

    const onWindowLoad = () => finishLoading();
    window.addEventListener("load", onWindowLoad, { once: true });

    fallbackTimer = window.setTimeout(finishLoading, 4000);
    if (document.readyState === "complete") finishLoading();

    return () => {
      window.removeEventListener("load", onWindowLoad);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(phaseTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`page-loader${phase === "exiting" ? " page-loader--exiting" : ""}`}
      role="status"
      aria-label="Loading Lexus Consultants"
      aria-live="polite"
    >
      <div className="page-loader__content">
        <img
          className="page-loader__logo"
          src="/images/lexus-logo-light.svg"
          alt="Lexus Consultants — Legal & Corporate Advisory"
          fetchPriority="high"
        />

        <div className="page-loader__wheel" aria-hidden="true">
          <svg viewBox="0 0 100 100" focusable="false">
            <circle className="page-loader__outer-ring" cx="50" cy="50" r="43" />
            <g className="page-loader__spokes">
              {Array.from({ length: 24 }, (_, index) => (
                <line key={index} x1="50" y1="15" x2="50" y2="43" transform={`rotate(${index * 15} 50 50)`} />
              ))}
            </g>
            <circle className="page-loader__inner-ring" cx="50" cy="50" r="8" />
            <circle className="page-loader__hub" cx="50" cy="50" r="2.5" />
          </svg>
        </div>

        <p className="page-loader__name">LEXUS CONSULTANTS</p>
        <p className="page-loader__tagline">Legal &amp; Corporate Advisory</p>
        <div className="page-loader__track" aria-hidden="true">
          <span />
        </div>
        <span className="sr-only">Loading website content</span>
      </div>
    </div>
  );
}
