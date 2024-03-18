import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

type PetBtnProps = {
  actionType: "add" | "edit" | "checkout";
  children?: React.ReactNode;
};

export default function PetBtn({ actionType, children }: PetBtnProps) {
  if (actionType === "add") {
    return (
      <Button size="icon">
        <PlusIcon className="h-6 w-6" />
      </Button>
    );
  }

  if (actionType === "edit") {
    return <Button variant="secondary">{children}</Button>;
  }

  if (actionType === "checkout") {
    return <Button variant="secondary">{children}</Button>;
  }
}
