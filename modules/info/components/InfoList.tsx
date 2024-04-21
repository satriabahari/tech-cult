import { INFO } from "@/common/constants/Info";
import React from "react";
import Box from "./Box";

export default function InfoList() {
  const filteredInfo = INFO.filter((info) => info.isShow);
  return (
    <div className="flex items-center justify-center gap-x-12">
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
