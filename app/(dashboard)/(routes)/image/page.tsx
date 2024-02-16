"use client";

import Heading from "@/components/Heading";
import { Image } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { ConversationFormSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";

const ImageGenerationPage = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof ConversationFormSchema>>({
    resolver: zodResolver(ConversationFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof ConversationFormSchema>) {
    try {
      const response = await axios.post("/api/conversation");

      form.reset();
    } catch (error) {
      //TODO: Open Pro Modal
    } finally {
      router.refresh();
    }
  }

  return (
    <section className="mt-8">
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        Icon={Image}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        placeholder="Have a conversation with Genify..."
                        disabled={isLoading}
                        {...field}
                        autoComplete="off"
                        type="text"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="col-span-12 lg:col-span-2 w-full"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>

        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader color="fill-pink-700" />
            </div>
          )}

          {images.length === 0 && !isLoading && (
            <div>
              <Empty label="No images generated!" />
            </div>
          )}

          <div className="flex flex-col-reverse gap-y-4">
            <div>Images will be rendered soon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerationPage;
