import { useContext } from "react";

import { ThreeAppActionsContext } from "./three-app-actions-context";

export const useThreeAppActions = () => {
  return useContext(ThreeAppActionsContext);
};
