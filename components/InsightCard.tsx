"use client";

import { motion } from "framer-motion";
import { tokens } from "../tokens/designTokens";

type Props = {
  title: string;
  description: string;
  price: string;
};

export default function InsightCard({ title, description, price }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      style={{
        background: tokens.colors.cardBg,
        borderRadius: tokens.radius.card,
        boxShadow: tokens.shadow.card,
        padding: tokens.spacing.cardPadding
      }}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-gray-500 text-sm mb-4">{description}</p>

      <p className="font-bold">{price}</p>
    </motion.div>
  );
}