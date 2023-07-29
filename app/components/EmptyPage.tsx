"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyPageProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyPage = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}: EmptyPageProps) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col items-center justify-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyPage;
