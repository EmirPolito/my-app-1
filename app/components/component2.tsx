"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import createGlobe from "cobe";
/* ===================================================== SECTION ===================================================== */ export function Component2() {
  return (
    <section className="relative z-20 max-w-7xl mx-auto py-14 space-y-6">
      {" "}
      {/* ROW 1 */}{" "}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {" "}
        {/* LEFT — GLOBE CARD */}{" "}
        <div className=" relative overflow-hidden rounded-2xl bg-card border border-border p-5 h-[26rem] w-full md:w-[30rem] flex flex-col ">
          {" "}
          <div className="relative z-10 space-y-1.5">
            {" "}
            <h3 className="text-primary-general text-base font-semibold">
              {" "}
              Hosting over the edge{" "}
            </h3>{" "}
            <p className="text-sm text-primary-color-text">
              {" "}
              With our edge network, we host your website globally.{" "}
            </p>{" "}
          </div>{" "}
          <div className="absolute inset-0 flex items-end justify-center translate-x-15">
            {" "}
            <Globe />{" "}
          </div>{" "}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />{" "}
        </div>{" "}
        {/* RIGHT — GLOBAL INFRASTRUCTURE */}{" "}
        <div className=" relative flex-1 rounded-2xl bg-card border border-border p-6 overflow-hidden ">
          {" "}
          <div className="max-w-md space-y-2">
            {" "}
            <h4 className="text-primary-general text-base font-semibold">
              {" "}
              Global infrastructure{" "}
            </h4>{" "}
            <p className="text-sm text-primary-color-text leading-relaxed">
              {" "}
              You are running out of copy for your website.{" "}
            </p>{" "}
          </div>{" "}
          {/* IMAGE — CROPPED ON PURPOSE */}{" "}
          <div className="absolute bottom-[-20px] right-[-10px]">
            {" "}
            <div className=" rounded-2xl border border-neutral-800/70 bg-neutral-800/40 p-1 ">
              {" "}
              <img
                src="/img/5.jpg"
                alt="Infrastructure"
                className=" w-40 md:w-190 aspect-[10/4] object-cover rounded-xl opacity-90 translate-x-3 translate-y-4 pointer-events-none "
                draggable={false}
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* ROW 2 */}{" "}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {" "}
        {/* LEFT — AUTOMATED WORKFLOWS */}{" "}
        <div className=" relative flex-1 rounded-2xl bg-card border border-border p-6 overflow-hidden ">
          {" "}
          <div className="max-w-md space-y-2">
            {" "}
            <h4 className="text-primary-general text-sm font-semibold">
              {" "}
              Automated workflows{" "}
            </h4>{" "}
            <p className="text-sm text-primary-color-text leading-relaxed">
              {" "}
              Automate your processes with modern cloud tooling.{" "}
            </p>{" "}
          </div>{" "}
          {/* ANIMATED WORKFLOW (NO CAMBIOS) */}{" "}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="mt-6 space-y-3"
          >
            {" "}
            {[
              "Trigger detected",
              "Workflow executed",
              "Deployment completed",
            ].map((step, i) => (
              <motion.div
                key={step}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                className=" flex items-center gap-3 rounded-lg border border-neutral-800/60 bg-neutral-900/40 px-3 py-2 "
              >
                {" "}
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="h-2 w-2 rounded-full bg-emerald-400"
                />{" "}
                <span className="text-xs text-primary-color-text">
                  {" "}
                  {step}{" "}
                </span>{" "}
              </motion.div>
            ))}{" "}
          </motion.div>{" "}
        </div>{" "}
        {/* RIGHT — INTELLIGENT SCALING */}{" "}
        <div className=" relative overflow-hidden rounded-2xl bg-card border border-border p-5 h-[26rem] w-full md:w-[30rem] flex flex-col ">
          {" "}
          <div className="relative z-10 space-y-1.5">
            {" "}
            <h3 className="text-primary-general text-base font-semibold">
              {" "}
              Intelligent scaling{" "}
            </h3>{" "}
            <p className="text-sm text-primary-color-text">
              {" "}
              Scale instantly with smart edge distribution.{" "}
            </p>{" "}
          </div>{" "}
          {/* IMAGE — MORE AGGRESSIVE CROP */}{" "}
          <div className="absolute bottom-[-0px] right-[-0px]">
            {" "}
            <div className=" rounded-2xl border border-neutral-800/70 bg-neutral-800/40 p-1 ">
              {" "}
              <img
                src="/img/5.jpg"
                alt="Scaling"
                className=" w-[195%] aspect-[10/6] object-cover rounded-xl opacity-90 translate-x-3 translate-y-4 pointer-events-none "
                draggable={false}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
/* ===================================================== GLOBE (NO TOCADO) ===================================================== */ function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    let phi = 0;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 420 * 2,
      height: 420 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.25, 0.25, 0.25],
      markerColor: [1, 1, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.01;
      },
    });
    return () => globe.destroy();
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="translate-y-45 scale-115 aspect-square"
      style={{ width: 450, height: 420, maxWidth: "100%" }}
    />
  );
}
