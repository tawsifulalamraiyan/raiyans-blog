"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen items-center justify-center flex flex-col">
      <Button
        className="bg-teal-600"
        onClick={() => router.push("/admin/create")}
      >
        Create blog
      </Button>
    </main>
  );
};

export default Page;
