import { Typography } from "@mui/material";

import { StyledCaption } from "./Caption.styles";
import { useThreeAppActions } from "@app/contexts/use-three-app-actions";

export const Caption = () => {
  const { settings } = useThreeAppActions();
  const { currentShape, currentColour } = settings;
  const caption = `${currentShape.name} (${currentColour.name})`;

  return (
    <StyledCaption>
      <Typography variant="h4">{caption}</Typography>
    </StyledCaption>
  );
};
