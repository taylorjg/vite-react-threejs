import { useEffect } from "react";

import { SettingsButton, Version } from "@app/components";
import { useThreeAppActions } from "@app/contexts";

export const App = () => {
  const threeAppActions = useThreeAppActions();

  useEffect(() => {
    const onKeyDown = (e) => {
      switch (e.key) {
        case "c":
          return threeAppActions.cycleColourForwards();

        case "C":
          return threeAppActions.cycleColourBackwards();

        case "s":
          return threeAppActions.cycleShapeForwards();

        case "S":
          return threeAppActions.cycleShapeBackwards();

        default:
          break;
      }
    };

    const addHandler = () => {
      document.addEventListener("keydown", onKeyDown);
    };

    const removeHandler = () => {
      document.removeEventListener("keydown", onKeyDown);
    };

    addHandler();

    return removeHandler;
  }, [threeAppActions]);

  return (
    <>
      <SettingsButton />
      <Version />
    </>
  );
};
