"use client";

import Heading from "@/components/Heading";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { MusicFormSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";

const MusicGenerationPage = () => {
  const router = useRouter();
  const [music, setMusic] = useState<string>();

  const form = useForm<z.infer<typeof MusicFormSchema>>({
    resolver: zodResolver(MusicFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof MusicFormSchema>) {
    try {
      setMusic(undefined);

      const response = await axios.post("/api/music", values);

      setMusic(response.data.audio);
      form.reset();
    } catch (error: any) {
      // if (error?.response?.status === 403) {
      //   proModal.onOpen();
      // } else {
      //   toast.error("Something went wrong.");
      // }
    } finally {
      router.refresh();
    }
  }

  return (
    <section className="mt-8">
      <Heading
        title="Music Generation"
        description="Turn your prompt into music."
        Icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
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
                        placeholder="Piano solo"
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
              <Loader color="fill-violet-500" />
            </div>
          )}

          {!music && !isLoading && (
            <div>
              <Empty label="No music generated!" />
            </div>
          )}

          {music && (
            <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </section>
  );
};

export default MusicGenerationPage;
