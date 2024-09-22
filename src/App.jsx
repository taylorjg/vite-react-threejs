import { useEffect } from "react";

import { Caption, SettingsButton, Version } from "@app/components";
import { useThreeAppActions, useOtherSettings } from "@app/hooks";

export const App = () => {
  const threeAppActions = useThreeAppActions();
  const { setShowCaption } = useOtherSettings();

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

        case "n":
          return setShowCaption((value) => !value);

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
  }, [threeAppActions, setShowCaption]);

  return (
    <>
      <Caption />
      <SettingsButton />
      <Version />
    </>
  );
};
