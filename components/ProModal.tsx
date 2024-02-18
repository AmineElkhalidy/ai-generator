import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Check,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  Zap,
} from "lucide-react";
import { useProModal } from "@/hooks/useProModal";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,

    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,

    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: Music,

    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

const ProModal = () => {
  const [loading, setLoading] = useState(false);
  const proModal = useProModal();

  const onSusbscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      console.log(response);

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong with Stripe!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-semibold py-1">
              Upgrade to Genify
              <Badge variant="premium" className="text-sm text-white">
                PRO
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-center space-y-2 text-zinc-900 font-medium">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="p-3 border-black/5 flex items-center justify-between"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-6 h-6", tool.color)} />
                </div>
                <p className="font-semibold text-sm">{tool.label}</p>
              </div>

              <Check className="text-emerald-600 w-5 h-5" />
            </Card>
          ))}
        </DialogDescription>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSusbscribe}
            size="lg"
            variant="premium"
            className="w-full text-white"
          >
            Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
