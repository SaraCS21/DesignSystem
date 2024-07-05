import { TemplateResult } from 'lit';

interface TemplateProps {
  name: string;
  arrowType: string;
  arrowSize: string;
  calendarType: string;
  checkType: string;
  checkCircle: string;
  closeType: string;
  closeCircle: string;
  cloudType: string;
  codeType: string;
  darkModeType: string;
  darkModeSubType: string;
  downloadType: string;
  editType: string;
  emailType: string;
  emailSubType: string;
  exclamationType: string;
  eyeType: string;
  eyeSubType: string;
  fileType: string;
  fileSubType: string;
  folderType: string;
  folderSubType: string;
  heartType: string;
  homeType: string;
  imageType: string;
  infoType: string;
  languageType: string;
  linkType: string;
  mapPinType: string;
  minusType: string;
  paletteType: string;
  pauseType: string;
  phoneType: string;
  plusType: string;
  questionType: string;
  searchType: string;
  settingsType: string;
  starType: string;
  starSubType: string;
  trashType: string;
  userType: string;
  userSubType: string;
}

type Story = {
  (args: TemplateProps): TemplateResult;
  args?: TemplateProps;
  parameters?: {
    controls?: { disable: boolean };
  };
};

type Icon = TemplateResult;

// Calendar, cloud, code, download, edit, exclamation, heart,
// home, image, info, language, link, mapPin, minus, palette, pause,
// phone, plus, question, search, settings, trash
type IconWithType = {
  type: string;
};

// Arrow
type IconWithTypeAndSize = {
  type: string;
  size: string;
};

// Check, close,
type IconWithTypeAndCircle = {
  type: string;
  circle: string;
};

// Email, eye, file, folder, star, user, darkMode
type IconWithTypeAndSubType = {
  type: string;
  subType: string;
};

export type {
  TemplateProps,
  Story,
  Icon,
  IconWithType,
  IconWithTypeAndSize,
  IconWithTypeAndCircle,
  IconWithTypeAndSubType,
};
