"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  price: string;
  index: number;
};

export default function InsightCard({ title, description, price, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-lg font-semibold mb-2 text-gray-900">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>

      <span className="text-lg font-bold text-gray-900">
        {price}
      </span>
    </motion.div>
  );
}