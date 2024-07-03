import React from "react";
import { dummyApiCall } from "../dummyApiCall";

async function fetchTextItem(index: number): Promise<string> {
  return dummyApiCall(index);
}

export function useTextItem(): [
  item: string,
  update: () => void,
  isLoading: boolean,
] {
  const [item, setItem] = React.useState<string>("No text item is found");
  const [index, setIndex] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const update = (): void => {
    setIsLoading(true);
    setItem("Loading new text item now...");
    fetchTextItem(index)
      .then(
        (newItem: string) => {
          setItem(newItem);
          setIndex((i: number) => i + 1);
        },
        (error: Error) => {
          console.error(error.message);
          setItem("Failed to fetch new text item");
          setIndex(0);
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  return [item, update, isLoading];
}
