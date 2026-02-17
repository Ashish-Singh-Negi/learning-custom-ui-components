"use client";

import { AnimatePresence, HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const items = ["Dashboard", "Settings", "Profile", "Billing", "Logout"];

export default function CommandPalette({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }

      if (e.key === "ArrowUp") {
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      }

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white w-125 rounded-xl shadow-2xl overflow-hidden"
          >
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-3 outline-none border-b"
            />

            <div className="relative">
              {items.map((item, index) => (
                <motion.div
                  key={item}
                  layout
                  className="relative px-4 py-3 cursor-pointer"
                >
                  {activeIndex === index && (
                    <motion.div
                      layoutId="highlight"
                      className="absolute inset-0 bg-gray-100 rounded-md"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
