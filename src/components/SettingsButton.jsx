import { useState } from "react";
import { Drawer, Tooltip } from "@mui/material";

import { SettingsPanel } from "./SettingsPanel";
import { StyledSettingsIcon } from "./SettingsButton.styles";

export const SettingsButton = () => {
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);

  const openSettingsPanel = () => {
    setIsSettingsPanelOpen(true);
  };

  const closeSettingsPanel = () => {
    setIsSettingsPanelOpen(false);
  };

  return (
    <>
      <Tooltip title="Open settings panel">
        <StyledSettingsIcon onClick={openSettingsPanel} />
      </Tooltip>
      <Drawer
        anchor="left"
        open={isSettingsPanelOpen}
        onClose={closeSettingsPanel}
      >
        <SettingsPanel />
      </Drawer>
    </>
  );
};
