"use client";

import { useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AccessGate() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function unlock(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const response = await fetch("/api/access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (response.ok) window.location.href = "/os";
    else setError("Access key not recognized. Please try again.");
  }

  return (
    <main className="access-page dark">
      <div className="ambient a1" /><div className="ambient a2" /><div className="grid-bg" />
      <div className="access-brand"><div className="logo-mark"><span /><span /></div><span>Overwrite <b>OS</b></span></div>
      <section className="access-card">
        <div className="access-orb"><Sparkles className="size-5" /></div>
        <p className="eyebrow mt-6">Private demo environment</p>
        <h1>Enter the operating system.</h1>
        <p className="access-copy">Access Overwrite&apos;s intelligent command center for business growth, automation, and visualization.</p>
        <form onSubmit={unlock} className="mt-7">
          <label className="mb-2 block text-[10px] font-medium text-white/55">Secure access key</label>
          <div className="access-input">
            <LockKeyhole className="size-4 text-white/30" />
            <Input type={show ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" autoFocus className="h-11 border-0 bg-transparent px-0 text-xs shadow-none focus-visible:ring-0" />
            <button type="button" onClick={() => setShow(!show)} className="text-white/30 hover:text-white">{show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button>
          </div>
          {error && <p className="mt-2 text-[10px] text-red-300">{error}</p>}
          <Button disabled={!password || loading} className="accent-button mt-4 h-11 w-full">
            {loading ? "Verifying access..." : "Unlock Overwrite OS"}<ArrowRight className="size-3.5" />
          </Button>
        </form>
        <div className="mt-6 flex items-center justify-center gap-2 text-[9px] text-white/25"><ShieldCheck className="size-3.5 text-emerald-400/60" />Protected private workspace</div>
      </section>
      <p className="access-footer">Overwrite Intelligence Systems · Authorized access only</p>
    </main>
  );
}
