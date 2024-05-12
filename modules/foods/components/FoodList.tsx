import FoodCard from "./FoodCard";

import { FOODS } from "@/common/constants/foods";

const FoodList = () => {
  const filteredFoods = FOODS.filter((food) => food.isShow);
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {filteredFoods.map((food, index) => (
        <FoodCard key={index} {...food} />
      ))}
    </section>
  );
};

export default FoodList;
