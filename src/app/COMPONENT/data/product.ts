export type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  price: number;
  shortDescription: string;
  detailsDescription: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Sunshine Precision Screwdriver Set",
    brand: "Sunshine",
    category: "Precision Tools",
    image:
      "https://images.pexels.com/photos/31862953/pexels-photo-31862953.jpeg?cs=srgb&dl=pexels-fotografia-lui-vlad-1445510816-31862953.jpg&fm=jpg",
    price: 1350,
    shortDescription: "Reliable screwdriver set for daily mobile repair work.",
    detailsDescription:
      "The Sunshine Precision Screwdriver Set is built for technicians who need accuracy, comfort, and reliability in everyday servicing work. It is suitable for opening smartphones, handling internal screws, and supporting repeated repair tasks with more control and less hand fatigue.",
  },
  {
    id: 2,
    name: "Relife Opening Tool Kit",
    brand: "Relife",
    category: "Opening Tools",
    image:
      "https://images.pexels.com/photos/6754839/pexels-photo-6754839.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6754839.jpg&fm=jpg",
    price: 890,
    shortDescription: "Safe opening tools for smartphones and delicate devices.",
    detailsDescription:
      "The Relife Opening Tool Kit helps technicians open phones and delicate devices with better safety and less damage risk. It is designed for careful disassembly work and fits well into both quick service jobs and more detailed repair sessions.",
  },
  {
    id: 3,
    name: "Quick Soldering Station",
    brand: "Quick",
    category: "Soldering",
    image:
      "https://images.pexels.com/photos/6755056/pexels-photo-6755056.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6755056.jpg&fm=jpg",
    price: 6950,
    shortDescription: "Stable heat control for accurate soldering performance.",
    detailsDescription:
      "The Quick Soldering Station is made for stable temperature control and dependable workshop performance. It supports precision board-level repair, connector work, and component replacement where consistency and controlled heat matter most.",
  },
  {
    id: 4,
    name: "2UUL Microscope Support Light",
    brand: "2UUL",
    category: "Microscope",
    image:
      "https://images.pexels.com/photos/6755066/pexels-photo-6755066.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6755066.jpg&fm=jpg",
    price: 2250,
    shortDescription: "Clear lighting support for board-level inspection work.",
    detailsDescription:
      "The 2UUL Microscope Support Light improves visibility during close inspection and board-level servicing. It helps technicians work with more confidence while checking components, cleaning contact points, and handling detailed repair tasks.",
  },
  {
    id: 5,
    name: "GVM UV Adhesive Kit",
    brand: "GVM",
    category: "Repair Chemicals",
    image:
      "https://images.pexels.com/photos/6755092/pexels-photo-6755092.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6755092.jpg&fm=jpg",
    price: 1150,
    shortDescription: "Repair adhesive support kit for workshop tasks.",
    detailsDescription:
      "The GVM UV Adhesive Kit is useful for repair workflows where controlled bonding and finishing matter. It supports practical workshop use and gives technicians an extra solution for restoration, fitting, and careful repair handling.",
  },
  {
    id: 6,
    name: "Sunshine Precision Screwdriver Set Pro",
    brand: "Sunshine",
    category: "Precision Tools",
    image:
      "https://images.pexels.com/photos/31862953/pexels-photo-31862953.jpeg?cs=srgb&dl=pexels-fotografia-lui-vlad-1445510816-31862953.jpg&fm=jpg",
    price: 1550,
    shortDescription: "Advanced screwdriver support for professional repair work.",
    detailsDescription:
      "The Sunshine Precision Screwdriver Set Pro is for technicians who want a more refined and durable setup for repeated service tasks. It is a strong choice for precision repair benches where tool comfort, grip, and repeat use matter every day.",
  },
];
