import { LOMBA } from "@/common/constants/lomba";
import React from "react";
import LombaCard from "./LombaCard";

export default function LombaList() {
  const filteredLomba = LOMBA.filter((lomba) => lomba.isShow);
  return (
    <div className="flex flex-col lg:flex-row">
      {filteredLomba.map((lomba, index) => (
        <LombaCard key={index} {...lomba} />
      ))}
    </div>
  );
}
