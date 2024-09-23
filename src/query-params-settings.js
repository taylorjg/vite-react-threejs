const parseBool = (s) => {
  if (s === "") return true;
  if (!s) return false;

  switch (s.toLowerCase()) {
    case "1":
    case "true":
    case "y":
    case "yes":
    case "on":
    case "enable":
    case "enabled":
      return true;

    case "0":
    case "false":
    case "n":
    case "no":
    case "off":
    case "disable":
    case "disabled":
      return false;

    default:
      return false;
  }
};

const identity = (value) => value;

const getQueryParams = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const getParam = (name, defaultValue, transform = identity) => {
    return searchParams.has(name)
      ? transform(searchParams.get(name))
      : defaultValue;
  };

  const has = (name) => searchParams.has(name);

  const getString = (name, defaultValue) => getParam(name, defaultValue);
  const getNumber = (name, defaultValue) =>
    getParam(name, defaultValue, Number);
  const getBool = (name, defaultValue) =>
    getParam(name, defaultValue, parseBool);

  return {
    has,
    getString,
    getNumber,
    getBool,
  };
};

export const getQueryParamsSettings = () => {
  const queryParams = getQueryParams();

  const maybeShape = queryParams.has("shape")
    ? { shape: queryParams.getNumber("shape") }
    : undefined;

  const maybeColour = queryParams.has("colour")
    ? { colour: queryParams.getNumber("colour") }
    : undefined;

  const maybeCaption = queryParams.has("caption")
    ? { caption: queryParams.getBool("caption") }
    : undefined;

  const maybeKioskMode = queryParams.has("kioskMode")
    ? { kioskMode: queryParams.getBool("kioskMode") }
    : undefined;

  return {
    ...maybeShape,
    ...maybeColour,
    ...maybeCaption,
    ...maybeKioskMode,
  };
};
