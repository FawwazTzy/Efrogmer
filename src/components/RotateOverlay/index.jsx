// src/components/RotateOverlay
import { useZustandState } from "../../store/state";

export default function RotateOverlay() {
  const isPortrait = useZustandState((s) => s.isPortrait);
  const isMobileDevice = useZustandState((s) => s.isMobileDevice);

  if (!isMobileDevice || !isPortrait) return null;

  return (
    <div className="fixed inset-0 bg-black/85 z-[9999] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Rotate Your Device</h2>
      <p className="opacity-90">Please rotate to landscape mode to continue.</p>
    </div>
  );
}
