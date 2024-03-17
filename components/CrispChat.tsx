"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("7ba4fa62-f239-4a1c-85f1-da7d60ff3d01");
  }, []);
  return null;
};

export default CrispChat;
