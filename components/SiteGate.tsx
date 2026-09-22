"use client";

import Image from "next/image";
import {
  FormEvent,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/constants";

const STORAGE_KEY = "laura-elisa-unlocked";
const ADMIN_PASSWORD = "12345678";

type Props = { children: ReactNode };

export function SiteGate({ children }: Props) {
  const reduce = useReducedMotion();
  const titleId = useId();
  const inputId = useId();
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const openLogin = useCallback(() => {
    setLoginOpen(true);
    setPassword("");
    setError("");
  }, []);

  const onDoubleClick = useCallback(() => {
    if (!unlocked) openLogin();
  }, [unlocked, openLogin]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setUnlocked(true);
      setLoginOpen(false);
      setPassword("");
      setError("");
      return;
    }
    setError("Contraseña incorrecta");
    setShake(true);
    window.setTimeout(() => setShake(false), 450);
  };

  // Site gate disabled — always show content
  return <>{children}</>;

  if (!ready) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-white">
        <div className="h-10 w-10 animate-pulse rounded-full bg-magenta/20" />
      </div>
    );
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div
      className="relative flex min-h-dvh select-none flex-col overflow-hidden bg-white"
      onDoubleClick={onDoubleClick}
      role="presentation"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-magenta/15 blur-3xl"
          animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-orange/15 blur-3xl"
          animate={reduce ? undefined : { x: [0, -24, 0], y: [0, -16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,59,142,0.08),_transparent_55%)]" />
      </div>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex w-full max-w-lg flex-col items-center"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 scale-125 rounded-full bg-magenta/10 blur-2xl" />
            <Image
              src="/logo.svg"
              alt={SITE.name}
              width={120}
              height={120}
              className="relative h-auto w-[100px] drop-shadow-md sm:w-[120px]"
              priority
            />
          </motion.div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">
            Próximamente
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            Sitio en construcción
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-charcoal-muted sm:text-lg">
            Estamos preparando una experiencia a la altura de{" "}
            <strong className="font-semibold text-charcoal">{SITE.name}</strong>.
            Muy pronto podrás cotizar tu préstamo aquí.
          </p>

          <div className="mt-8 flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 text-sm text-charcoal-muted shadow-sm backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-magenta" />
            </span>
            Trabajando en el lanzamiento
          </div>

          <div className="mt-10 h-1.5 w-48 overflow-hidden rounded-full bg-magenta-soft">
            <motion.div
              className="h-full rounded-full bg-orange"
              initial={{ width: "18%" }}
              animate={reduce ? { width: "55%" } : { width: ["18%", "72%", "40%", "68%"] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </main>

      <footer className="relative z-10 pb-8 text-center text-xs text-charcoal-muted">
        © {SITE.name} · Santo Domingo Este
      </footer>

      <AnimatePresence>
        {loginOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLoginOpen(false)}
          >
            <div className="absolute inset-0 bg-charcoal/35 backdrop-blur-[2px]" />
            <motion.form
              onSubmit={submit}
              onClick={(e) => e.stopPropagation()}
              initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
              animate={
                shake
                  ? { opacity: 1, y: 0, scale: 1, x: [0, -8, 8, -6, 6, 0] }
                  : { opacity: 1, y: 0, scale: 1, x: 0 }
              }
              exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.99 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              className="relative z-10 w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-border bg-white p-6 shadow-2xl shadow-charcoal/15"
            >
              <div className="mb-5 h-1.5 w-full rounded-full bg-gradient-to-r from-magenta to-orange" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-magenta">
                Acceso
              </p>
              <h2 id={titleId} className="mt-2 text-xl font-extrabold text-charcoal">
                Administrador
              </h2>
              <p className="mt-1 text-sm text-charcoal-muted">
                Solo contraseña. Sin usuario.
              </p>

              <label htmlFor={inputId} className="mt-5 mb-1.5 block text-sm font-semibold text-charcoal">
                Contraseña
              </label>
              <input
                id={inputId}
                type="password"
                autoComplete="current-password"
                autoFocus
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                className="focus-ring w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-base text-charcoal outline-none transition focus:border-magenta"
                placeholder="••••••••"
              />
              {error && (
                <p className="mt-2 text-sm font-medium text-error" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="focus-ring mt-5 flex h-12 w-full items-center justify-center rounded-full bg-orange text-base font-bold text-white transition hover:bg-orange-dark"
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={() => setLoginOpen(false)}
                className="mt-3 w-full text-center text-xs font-medium text-charcoal-muted transition hover:text-charcoal"
              >
                Cancelar
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
