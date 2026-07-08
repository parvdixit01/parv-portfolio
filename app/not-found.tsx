import { GlowButton } from "@/components/ui/GlowButton";

export default function NotFound() {
  return (
    <div className="grid-bg flex min-h-screen flex-col items-center justify-center px-6">
      <div className="glass max-w-lg rounded-xl p-8 text-center">
        <p className="font-mono text-sm text-cyan">
          <span className="text-magenta">ERR</span> deployment failed
        </p>
        <h1 className="mt-4 text-6xl font-bold text-gradient">404</h1>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-background/50 p-4 text-left font-mono text-xs text-foreground-muted">
          {`$ kubectl get route /unknown
Error: route not found in cluster
Status: CrashLoopBackOff
Suggestion: return to homepage`}
        </pre>
        <div className="mt-8">
          <GlowButton href="/" variant="primary">
            Return Home
          </GlowButton>
        </div>
      </div>
    </div>
  );
}
