import { useState } from "react";
import PropTypes from "prop-types";

import { OtherSettingsContext } from "./other-settings-context";

export const OtherSettingsProvider = ({ settings = {}, children }) => {
  const { caption = false, kioskMode = false } = settings;
  const [showCaption, setShowCaption] = useState(caption);

  const toggleCaption = () => {
    setShowCaption((value) => !value);
  };

  const otherSettings = {
    kioskMode,
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
  settings: PropTypes.shape({
    caption: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};
