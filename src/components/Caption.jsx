import { Typography } from "@mui/material";

import { useThreeAppActions, useOtherSettings } from "@app/hooks";
import { StyledCaption } from "./Caption.styles";

export const Caption = () => {
  const { settings } = useThreeAppActions();
  const { showCaption } = useOtherSettings();

  if (!showCaption) return null;

  const { currentShape, currentColour } = settings;
  const caption = `${currentShape.name} (${currentColour.name})`;

  return (
    <StyledCaption>
      <Typography variant="h4">{caption}</Typography>
    </StyledCaption>
  );
};
