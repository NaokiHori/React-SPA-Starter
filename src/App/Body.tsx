import { JSX } from "react";
import { useTextItem } from "./hooks";
import * as style from "./style.css";

function Text({ textItem }: { textItem: string }): JSX.Element {
  return <div className={style.text}>{textItem}</div>;
}

function Button({
  isLoadingTextItem,
  updateTextItem,
}: {
  isLoadingTextItem: boolean;
  updateTextItem: () => void;
}): JSX.Element {
  const buttonText = "Change Text";
  const handleClick = (): void => {
    updateTextItem();
  };
  return (
    <button
      className={style.button}
      disabled={isLoadingTextItem}
      onClick={() => {
        handleClick();
      }}
    >
      {buttonText}
    </button>
  );
}

export function Body(): JSX.Element {
  const [textItem, updateTextItem, isLoadingTextItem] = useTextItem();
  return (
    <div className={style.body}>
      <Text textItem={textItem} />
      <Button
        isLoadingTextItem={isLoadingTextItem}
        updateTextItem={updateTextItem}
      />
    </div>
  );
}
