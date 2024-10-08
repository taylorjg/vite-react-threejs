import PropTypes from "prop-types";
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@mui/material";

import {
  useThreeAppActions,
  useThreeAppSettings,
  useOtherSettings,
} from "@app/hooks";

import {
  StyledSettingsPanel,
  StyledSettingsPanelBody,
  StyledSettingsPanelHeader,
} from "./SettingsPanel.styles";

const SHAPE_OPTIONS = [
  { label: "Square", value: 0 },
  { label: "Triangle", value: 1 },
  { label: "Circle", value: 2 },
];

const COLOUR_OPTIONS = [
  { label: "Red", value: 0 },
  { label: "Orange", value: 1 },
  { label: "Yellow", value: 2 },
  { label: "Green", value: 3 },
  { label: "Blue", value: 4 },
  { label: "Indigo", value: 5 },
  { label: "Violet", value: 6 },
];

const FORM_LABEL_SX = { sx: { mb: "0.5rem" } };

const ShapeSetting = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <FormControl>
      <FormLabel id="shape-label" {...FORM_LABEL_SX}>
        Shape
      </FormLabel>
      <RadioGroup
        aria-labelledby="shape-label"
        name="shape-group"
        value={value}
        onChange={handleChange}
      >
        {SHAPE_OPTIONS.map((option) => (
          <FormControlLabel
            key={option.label}
            control={<Radio size="small" />}
            label={option.label}
            value={option.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

ShapeSetting.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};

const ColourSetting = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <FormControl>
      <FormLabel id="colour-label" {...FORM_LABEL_SX}>
        Colour
      </FormLabel>
      <RadioGroup
        aria-labelledby="colour-label"
        name="colour-group"
        value={value}
        onChange={handleChange}
      >
        {COLOUR_OPTIONS.map((option) => (
          <FormControlLabel
            key={option.label}
            control={<Radio size="small" />}
            label={option.label}
            value={option.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

ColourSetting.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};

const CaptionSetting = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.checked);
  };

  return (
    <FormControl>
      <FormLabel id="caption-label" {...FORM_LABEL_SX}>
        Caption
      </FormLabel>
      <FormControlLabel
        control={
          <Switch
            aria-labelledby="caption-label"
            size="small"
            checked={value}
            onClick={handleChange}
          />
        }
        label={value ? "On" : "Off"}
      />
    </FormControl>
  );
};

CaptionSetting.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
};

export const SettingsPanel = () => {
  const threeAppActions = useThreeAppActions();
  const { currentShapeIndex, currentColourIndex } = useThreeAppSettings();
  const { showCaption, setShowCaption } = useOtherSettings();

  return (
    <StyledSettingsPanel>
      <StyledSettingsPanelHeader>
        <Typography variant="h4">Settings</Typography>
      </StyledSettingsPanelHeader>
      <Divider />
      <StyledSettingsPanelBody>
        <ShapeSetting
          value={currentShapeIndex}
          setValue={threeAppActions.showShape}
        />
        <ColourSetting
          value={currentColourIndex}
          setValue={threeAppActions.showColour}
        />
        <CaptionSetting value={showCaption} setValue={setShowCaption} />
      </StyledSettingsPanelBody>
    </StyledSettingsPanel>
  );
};
