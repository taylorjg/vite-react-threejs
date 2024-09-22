import { Typography } from "@mui/material";

import { useThreeAppSettings, useOtherSettings } from "@app/hooks";
import { StyledCaption } from "./Caption.styles";

export const Caption = () => {
  const { currentShape, currentColour } = useThreeAppSettings();
  const { showCaption } = useOtherSettings();

  if (!showCaption) return null;

  const caption = `${currentShape.name} (${currentColour.name})`;

  return (
    <StyledCaption>
      <Typography variant="h4">{caption}</Typography>
    </StyledCaption>
  );
};
