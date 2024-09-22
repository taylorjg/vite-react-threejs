import { Divider, Typography } from "@mui/material";

import { useThreeAppActions } from "@app/contexts";

import {
  StyledSettingsPanel,
  StyledSettingsPanelBody,
  StyledSettingsPanelHeader,
} from "./SettingsPanel.styles";

export const SettingsPanel = () => {
  const threeAppActions = useThreeAppActions();
  console.log(threeAppActions);

  return (
    <StyledSettingsPanel>
      <StyledSettingsPanelHeader>
        <Typography variant="h6" gutterBottom>
          Settings
        </Typography>
      </StyledSettingsPanelHeader>
      <Divider />
      <StyledSettingsPanelBody>
        <div>Shape: TODO</div>
        <div>Colour: TODO</div>
      </StyledSettingsPanelBody>
    </StyledSettingsPanel>
  );
};
