"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useProModal } from "@/hooks/useProModal";

const FreeCounter = ({ apilimit = 0 }: { apilimit: number }) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="pt-6 pb-1">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apilimit} / {MAX_FREE_COUNTS} Free Generations
            </p>

            <Progress
              value={(apilimit / MAX_FREE_COUNTS) * 100}
              className="h-3"
              color="#005DBB"
            />
          </div>
          <CardFooter>
            <Button
              onClick={proModal.onOpen}
              variant="premium"
              className="w-full text-white"
            >
              Upgrade <Zap className="w-4 h-4 ml-2 fill-white text-white" />
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
