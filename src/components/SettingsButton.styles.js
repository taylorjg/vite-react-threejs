import styled from "@emotion/styled";

import SettingsIcon from "@mui/icons-material/Settings";

export const StyledSettingsIcon = styled(SettingsIcon)`
  color: #ffffff;
  opacity: 0.5;
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;
