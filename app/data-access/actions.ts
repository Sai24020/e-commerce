'use server';

import { Product, Products } from "@/lib/interfaces";
import { API_ENDPOINT } from "@/app/data-access/endpoints";

// Fetch products (alla produkter)
export async function fetchProductT(): Promise<Products> {
  const res = await fetch("https://dummyjson.com/products?limit=194&skip=0");

  if (!res.ok) {
    throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
  }

  const data: Products = await res.json();
  return data;
}

// Fetch en enskild produkt
export const fetchProduct = async (id: number): Promise<Product> => {
  const res = await fetch(`${API_ENDPOINT}/${id}`);

  if (!res.ok) {
    throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
  }

  const product: Product = await res.json();
  return product;
};

// Fetch produkter med sidpaginering
export async function fetchProducts(skip = 0, limit = 24): Promise<{ products: Product[]; total: number }> {
  const res = await fetch(`${API_ENDPOINT}?limit=${limit}&skip=${skip}`);

  if (!res.ok) {
    throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();

  return {
    products: data.products,
    total: data.total,
  };
}

// Hämta kategorier
export const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch(`${API_ENDPOINT}/categories`);

  if (!res.ok) {
    throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
  }

  const data: string[] = await res.json();
  return data;
};

// Allmän fetch från API
export const fetchFromAPI = async <T>(endpoint: string): Promise<T | { message: string }> => {
  const res = await fetch(endpoint, {
    headers: {
      "User-Agent": "TestNextjsApp/1.0",
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    return {
      message: "There was an error fetching data from the API, please try again later",
    };
  }

  const data: T = await res.json();
  return data;
};

// Fetch produkter baserat på kategori + sortering
export const fetchProductsByCategory = async (
  category: string | string[],
  sort: string | string[]
): Promise<Products> => {
  const categoryParam = Array.isArray(category) ? category[0] : category;
  const sortParam = Array.isArray(sort) ? sort[0] : sort;

  const url = `https://dummyjson.com/products/category/${categoryParam}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
  }

  const data: Products = await res.json();

  if (sortParam === "price-asc") {
    data.products.sort((a, b) => a.price - b.price);
  } else if (sortParam === "price-desc") {
    data.products.sort((a, b) => b.price - a.price);
  }

  return data;
};



