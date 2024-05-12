export interface FoodProps {
  id: number;
  name: string;
  description: string;
  origin: string;
  ingredients: string[];
  instructions: string;
  image: string;
  isShow: boolean;
}