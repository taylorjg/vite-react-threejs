import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const ThreeAppActionsContext = createContext();

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

export const useThreeAppActions = () => {
  return useContext(ThreeAppActionsContext);
};
