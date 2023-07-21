"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string";
import { Input } from "./input";

export const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);
  const router = useRouter();

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
