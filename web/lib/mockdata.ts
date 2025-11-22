import { IModel } from "@/http/model/model.interface";
const imagens = [
  "https://images.unsplash.com/photo-1619384846683-8dede3452564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50fGVufDF8fHx8MTc2MTk1NzM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50fGVufDF8fHx8MTc2MTk1NzM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1520975912779-1f1a378b3c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50fGVufDF8fHx8MTc2MTk1NzM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50fGVufDF8fHx8MTc2MTk1NzM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
];
export const mockData: IModel[] = [
  {
    id: "1",
    name: "Model 1",
    gender: "female",
    nationality: "American",
    city: "New York",
    email: "model1@example.com",
    measure: {
      height: 175,
      weight: 55,
      mannequin: "S",
      shoe: "8",
    },
    additionalInfo: {
      categories: ["runway", "e-commerce"],
      eyeColor: "blue",
      hairType: "curly",
      hairColor: "blonde",
      birthDate: "1995-01-01",
    },
    imagens: imagens,
    socialMedia: {
      instagram: "@model1",
      facebook: "model1.fb",
      twitter: "model1_tw",
    },
    availableFor: ["photoshoot", "runway"],
    calendarAvailability: ["2023-09-01", "2023-09-02"],
    experience: {
      years: 5,
      events: ["Fashion Week", "Photoshoot for Brand X"],
      brandsWorked: ["Brand A", "Brand B"],
    },
    bio: "Experienced model with a passion for fashion.",
    achievements: ["Top Model 2020", "Best Newcomer 2019"],
    portfolioLink: "https://model1portfolio.com",
    ebook: "https://model1ebook.com",
    documents: {
      passport: true,
      visa: true,
      workPermit: true,
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-02",
  },
];
