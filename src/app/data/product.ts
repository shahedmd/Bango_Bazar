export type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  price: number;
  shortDescription: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Sunshine Precision Screwdriver Set",
    brand: "Sunshine",
    category: "Precision Tools",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    price: 1350,
    shortDescription: "Reliable screwdriver set for daily mobile repair work.",
  },
  {
    id: 2,
    name: "Relife Opening Tool Kit",
    brand: "Relife",
    category: "Opening Tools",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80",
    price: 890,
    shortDescription: "Safe opening tools for smartphones and delicate devices.",
  },
  {
    id: 3,
    name: "Quick Soldering Station",
    brand: "Quick",
    category: "Soldering",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    price: 6950,
    shortDescription: "Stable heat control for accurate soldering performance.",
  },
  {
    id: 4,
    name: "2UUL Microscope Support Light",
    brand: "2UUL",
    category: "Microscope",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    price: 2250,
    shortDescription: "Clear lighting support for board-level inspection work.",
  },
  {
    id: 5,
    name: "GVM UV Adhesive Kit",
    brand: "GVM",
    category: "Repair Chemicals",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    price: 1150,
    shortDescription: "Repair adhesive support kit for workshop tasks.",
  },
];
