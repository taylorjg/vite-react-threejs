import { useState } from "react";
import PropTypes from "prop-types";

import { OtherSettingsContext } from "./other-settings-context";

export const OtherSettingsProvider = ({
  initialCaptionState = false,
  children,
}) => {
  const [showCaption, setShowCaption] = useState(initialCaptionState);

  const toggleCaption = () => {
    setShowCaption((value) => !value);
  };

  const otherSettings = {
    showCaption,
    setShowCaption,
    toggleCaption,
  };

  return (
    <OtherSettingsContext.Provider value={otherSettings}>
      {children}
    </OtherSettingsContext.Provider>
  );
};

OtherSettingsProvider.propTypes = {
  initialCaptionState: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
