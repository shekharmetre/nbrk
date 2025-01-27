import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Upcoming from "@/components/dummy/upcoming";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "company",
    children: [
      {
        id: 11,
        label: "about",
        url: "#",
      },
      {
        id: 12,
        label: "distributers",
        url: "#",
      },
      {
        id: 13,
        label: "Units",
        url: "#",
      },
      {
        id: 14,
        label: "career",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "help",
    children: [
      {
        id: 21,
        label: "customer support",
        url: "#",
      },
      {
        id: 22,
        label: "delivery details",
        url: "#",
      },
      {
        id: 23,
        label: "terms & conditions",
        url: "#",
      },
      {
        id: 24,
        label: "privacy policy",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "faq",
    children: [
      {
        id: 31,
        label: "account",
        url: "#",
      },
      {
        id: 32,
        label: "manage deliveries",
        url: "#",
      },
      {
        id: 33,
        label: "orders",
        url: "#",
      },
      {
        id: 34,
        label: "payments",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "resources",
    children: [
      {
        id: 41,
        label: "Free eBooks",
        url: "#",
      },
      {
        id: 42,
        label: "development tutorial",
        url: "#",
      },
      {
        id: 43,
        label: "How to - Blog",
        url: "#",
      },
      {
        id: 44,
        label: "youtube playlist",
        url: "#",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex foooter-dialog flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Dialog>
              <Link
                href={link.url}
                key={link.id}
                className={cn([
                  link.id !== 41 && link.id !== 43 && "capitalize",
                  "text-black/60 text-sm md:text-base mb-4 w-fit",
                ])}
              >
                <DialogTrigger asChild>
                  <Button variant="link">{link.label}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-transparent border-none">
                  <Upcoming />
                </DialogContent>
              </Link>
            </Dialog>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
