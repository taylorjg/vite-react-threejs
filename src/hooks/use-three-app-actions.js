import { useContext, useEffect, useState } from "react";

import { ThreeAppActionsContext } from "./three-app-actions-context";

export const useThreeAppActions = () => {
  const threeAppActions = useContext(ThreeAppActionsContext);

  const [settings, setSettings] = useState(threeAppActions.getSettings);

  useEffect(() => {
    threeAppActions.addSettingsChangedListener(setSettings);
    return () => threeAppActions.removeSettingsChangedListener(setSettings);
  }, [threeAppActions]);

  return {
    ...threeAppActions,
    settings,
  };
};
