import * as z from "zod";

export const ConversationFormSchema = z.object({
  prompt: z.string().min(1, { message: "Propmt is required!" }),
});

export const CodeFormSchema = z.object({
  prompt: z.string().min(1, { message: "Propmt is required!" }),
});