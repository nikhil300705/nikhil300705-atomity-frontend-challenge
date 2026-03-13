import { useQuery } from "@tanstack/react-query";

export type Insight = {
  title: string;
  description: string;
  price: string;
};

async function fetchInsights(): Promise<Insight[]> {
  const response = await fetch("https://dummyjson.com/products?limit=4&skip=10");

  if (!response.ok) {
    throw new Error("Failed to fetch insights");
  }

  const data = await response.json();

  return data.products.map((product: any) => ({
    title: product.title,
    description: product.description,
    price: `$${product.price}`,
  }));
}

export function useInsights() {
  return useQuery({
    queryKey: ["insights"],
    queryFn: fetchInsights,
    staleTime: 1000 * 60 * 5
  });
}