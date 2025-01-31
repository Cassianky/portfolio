"use client";

import axios from "axios";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster } from "@/components/ui/toaster";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [honeypot, setHoneypot] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [submitting, setSubmitting] = useState(false);
  function onSubmit() {
    // Detected as a bot
    if (honeypot) {
      toast({
        variant: "destructive",
        title: "Bots are not allowed",
        description: "Please exit this page!",
      });
      return;
    }
    setSubmitting(true);
    axios({
      method: "POST",
      url: "https://formspree.io/f/mkggpgbn",
      data: {
        name: form.getValues("name"),
        email: form.getValues("email"),
        message: form.getValues("message"),
      },
    })
      .then(() => {
        handleServerResponse(
          true,
          "Thank you!",
          "Your message has been sent successfully."
        );
      })
      .catch((error) => {
        handleServerResponse(
          false,
          "Message failed to send.",
          error.response.data.error
        );
      });
  }

  const handleServerResponse = (
    ok: boolean,
    title: string,
    description: string
  ) => {
    if (ok) {
      form.reset();
      setOpen(false);
    }
    toast({
      title: title,
      description: description,
    });
    setSubmitting(false);
  };

  const handleHoneypotChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHoneypot(event.target.value);
  };

  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 flex justify-between p-6 bg-slate-50 gap-3 items-center w-full z-50">
            <div
              className="flex justify-center items-center bg-slate-800 h-9 w-9 rounded-full hover:cursor-pointer"
              onClick={() => {
                document.getElementById("home")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <p className="text-m tracking-tight text-slate-50">CN</p>
            </div>
            <div className="flex gap-3">
              {["home", "about", "experience", "projects", "books"].map(
                (section) => (
                  <Button
                    key={section}
                    className={`text-m text-slate-800 ${
                      section === activeSection
                        ? "underline underline-offset-8"
                        : ""
                    }"`}
                    variant="header"
                    onClick={() => {
                      document.getElementById(section)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Button>
                )
              )}
            </div>
          </header>
          <main className="flex-grow bg-slate-50">{children}</main>
          <footer className="fixed bottom-0 w-full flex gap-6 items-center justify-center py-4 bg-slate-200">
            <small>© 2024 Cassia Ng Kai Ying . All Rights Reserved.</small>
          </footer>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button className="fixed bottom-10 right-10 bg-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M232 64v128a16 16 0 0 1-16 16H83l-32.6 28.16l-.09.07A15.9 15.9 0 0 1 40 240a16.05 16.05 0 0 1-6.79-1.52A15.84 15.84 0 0 1 24 224V64a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16"
                  />
                </svg>
                Contact Me
              </Button>
            </SheetTrigger>
            <SheetContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <SheetHeader>
                    <SheetTitle>Contact Me</SheetTitle>
                    <SheetDescription>
                      You can contact me via LinkedIn or by submitting the form
                      below. I would reach out to you as soon as possible.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 py-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your name..."
                              {...field}
                              autoFocus
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your email..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Type your message here."
                              {...field}
                              className="h-32"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Input
                      type="text"
                      className="hidden"
                      onChange={handleHoneypotChange}
                    ></Input>
                  </div>
                  <SheetFooter className="flex justify-center items-center">
                    {submitting ? (
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={cn("animate-spin")}
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      <Button className="bg-slate-800" type="submit">
                        Submit
                      </Button>
                    )}
                  </SheetFooter>
                </form>
              </Form>
            </SheetContent>
          </Sheet>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
