import { useEffect } from "react";

import { Caption, SettingsButton, Version } from "@app/components";
import { useThreeAppActions, useOtherSettings } from "@app/hooks";

export const App = () => {
  const threeAppActions = useThreeAppActions();
  const { kioskMode, toggleCaption } = useOtherSettings();

  useEffect(() => {
    if (kioskMode) return;

    const onKeyDown = (e) => {
      switch (e.key) {
        case "s":
          return threeAppActions.cycleShapeForwards();

        case "S":
          return threeAppActions.cycleShapeBackwards();

        case "c":
          return threeAppActions.cycleColourForwards();

        case "C":
          return threeAppActions.cycleColourBackwards();

        case "n":
          return toggleCaption();

        default:
          return;
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
  }, [threeAppActions, kioskMode, toggleCaption]);

  return (
    <>
      <Caption />
      {!kioskMode && <SettingsButton />}
      <Version />
    </>
  );
};
