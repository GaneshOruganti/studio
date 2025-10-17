
import { Clock } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-1 font-bold font-brandmark text-lg">
      <span>Speed</span>
      <div className="flex items-center justify-center">
        <Clock className="h-4 w-4" />
      </div>
      <span>pus</span>
    </div>
  );
}
