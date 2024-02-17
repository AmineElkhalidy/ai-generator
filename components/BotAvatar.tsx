import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src="/genify.webp" />
    </Avatar>
  );
};

export default BotAvatar;
