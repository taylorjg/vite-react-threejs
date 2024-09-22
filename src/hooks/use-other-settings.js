import { useContext } from "react";

import { OtherSettingsContext } from "./other-settings-context";

export const useOtherSettings = () => {
  return useContext(OtherSettingsContext);
};
