import { Icons } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Icons.logo className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">Branch Edge</span>
            </div>
            <h3 className="text-xl font-semibold font-headline">Innovate. Create. Elevate.</h3>
            <p className="text-muted-foreground">
              We transform businesses through innovative software solutions, creating digital experiences that drive growth and success.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Branch Edge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
