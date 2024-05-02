import { INFO } from "@/common/constants/Info";
import React from "react";
import Box from "./Box";

export default function InfoList() {
  const filteredInfo = INFO.filter((info) => info.isShow);
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-8 px-4 lg:grid-cols-3 lg:px-0">
      {filteredInfo.map((info, index) => (
        <div key={index}>
          <Box
            icon={info.icon}
            title={info.title}
            description={info.description}
          />
        </div>
      ))}
    </div>
  );
}
