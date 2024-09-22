import PropTypes from "prop-types";

import { ThreeAppActionsContext } from "./three-app-actions-context";

export const ThreeAppActionsProvider = ({ threeAppActions, children }) => {
  return (
    <ThreeAppActionsContext.Provider value={threeAppActions}>
      {children}
    </ThreeAppActionsContext.Provider>
  );
};

ThreeAppActionsProvider.propTypes = {
  threeAppActions: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
