"use client";

import InsightCard from "../components/InsightCard";
import { useInsights } from "../hooks/useInsights";

export default function Home() {
  const { data, isLoading, error } = useInsights();

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading insights...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Error loading insights.</p>
      </main>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Cloud Optimization Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {data?.map((item: any, index: number) => (
          <InsightCard
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}