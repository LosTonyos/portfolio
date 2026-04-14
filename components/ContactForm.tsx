"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, email, sujet, message }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div
        className="p-6 rounded-xl border flex flex-col items-center justify-center py-16 text-center"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        <CheckCircle size={48} style={{ color: "var(--accent)" }} className="mb-4" />
        <h3 className="heading-md mb-2" style={{ color: "var(--anthracite)" }}>
          Message envoyé !
        </h3>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Merci pour votre message. Je vous répondrai dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6">
      <h3 className="heading-md mb-4" style={{ color: "var(--anthracite)" }}>
        Envoyer un message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: "var(--anthracite)" }}>Nom</label>
            <input
              type="text" required placeholder="Votre nom" value={nom} onChange={(e) => setNom(e.target.value)}
              className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "var(--anthracite)" }}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: "var(--anthracite)" }}>Email</label>
            <input
              type="email" required placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "var(--anthracite)" }}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1" style={{ color: "var(--anthracite)" }}>Sujet</label>
          <input
            type="text" required placeholder="Objet de votre message" value={sujet} onChange={(e) => setSujet(e.target.value)}
            className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "var(--anthracite)" }}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1" style={{ color: "var(--anthracite)" }}>Message</label>
          <textarea
            required rows={5} placeholder="Votre message..." value={message} onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none resize-none transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "var(--anthracite)" }}
          />
        </div>
        {error && (
          <p className="text-xs" style={{ color: "#f87171" }}>
            Une erreur est survenue. Réessayez ou contactez-moi directement par email.
          </p>
        )}
        <button
          type="submit" disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          style={{ background: "var(--accent)", color: "#fff", opacity: loading ? 0.7 : 1 }}
        >
          <Send size={14} /> {loading ? "Envoi en cours…" : "Envoyer le message"}
        </button>
      </form>
    </div>
  );
}
