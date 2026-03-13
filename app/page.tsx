"use client";

import InsightCard from "@/components/InsightCard";
import { useInsights } from "@/hooks/useInsights";

export default function Home() {
  const { data, isLoading, isError } = useInsights();

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading insights...</p>
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load insights</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <section className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Cloud Optimization Insights
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <InsightCard
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}