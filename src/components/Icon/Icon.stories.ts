import { TemplateResult, html } from 'lit';
import { TemplateProps, Story } from '../../types/icon';
import {
  COLOR_ARG,
  COLOR_INTENSITY_ARG,
  ICON_ARG,
  ICON_ARROW_SIZE,
  ICON_ARROW_TYPE,
  ICON_CALENDAR_TYPE,
  ICON_CHECK_CIRCLE,
  ICON_CHECK_TYPE,
  ICON_CLOSE_CIRLCE,
  ICON_CLOSE_TYPE,
  ICON_CLOUD_TYPE,
  ICON_CODE_TYPE,
  ICON_DARK_MODE_SUB_TYPE,
  ICON_DARK_MODE_TYPE,
  ICON_DOWNLOAD_TYPE,
  ICON_EDIT_TYPE,
  ICON_EMAIL_SUB_TYPE,
  ICON_EMAIL_TYPE,
  ICON_EXCLAMATION_TYPE,
  ICON_EYE_SUB_TYPE,
  ICON_EYE_TYPE,
  ICON_FILE_SUB_TYPE,
  ICON_FILE_TYPE,
  ICON_FOLDER_SUB_TYPE,
  ICON_FOLDER_TYPE,
  ICON_HEART_TYPE,
  ICON_HOME_TYPE,
  ICON_IMAGE_TYPE,
  ICON_INFO_TYPE,
  ICON_LANGUAGE_TYPE,
  ICON_LINK_TYPE,
  ICON_MAP_PIN_TYPE,
  ICON_MINUS_TYPE,
  ICON_PALETTE_TYPE,
  ICON_PAUSE_TYPE,
  ICON_PHONE_TYPE,
  ICON_PLUS_TYPE,
  ICON_QUESTION_TYPE,
  ICON_SEARCH_TYPE,
  ICON_SETTINGS_TYPE,
  ICON_STAR_SUB_TYPE,
  ICON_STAR_TYPE,
  ICON_TRASH_TYPE,
  ICON_USER_SUB_TYPE,
  ICON_USER_TYPE,
} from '../../constants/argTypesConstants';
import './Icon';

export default {
  title: 'Design System/Atoms/MyIcon',
  component: 'my-icon',
  argTypes: {
    name: ICON_ARG,
    color: COLOR_ARG,
    colorIntensity: COLOR_INTENSITY_ARG,
    arrowType: ICON_ARROW_TYPE,
    arrowSize: ICON_ARROW_SIZE,
    calendarType: ICON_CALENDAR_TYPE,
    checkType: ICON_CHECK_TYPE,
    checkCircle: ICON_CHECK_CIRCLE,
    closeType: ICON_CLOSE_TYPE,
    closeCircle: ICON_CLOSE_CIRLCE,
    cloudType: ICON_CLOUD_TYPE,
    codeType: ICON_CODE_TYPE,
    darkModeType: ICON_DARK_MODE_TYPE,
    darkModeSubType: ICON_DARK_MODE_SUB_TYPE,
    downloadType: ICON_DOWNLOAD_TYPE,
    editType: ICON_EDIT_TYPE,
    emailType: ICON_EMAIL_TYPE,
    emailSubType: ICON_EMAIL_SUB_TYPE,
    exclamationType: ICON_EXCLAMATION_TYPE,
    eyeType: ICON_EYE_TYPE,
    eyeSubType: ICON_EYE_SUB_TYPE,
    fileType: ICON_FILE_TYPE,
    fileSubType: ICON_FILE_SUB_TYPE,
    folderType: ICON_FOLDER_TYPE,
    folderSubType: ICON_FOLDER_SUB_TYPE,
    heartType: ICON_HEART_TYPE,
    homeType: ICON_HOME_TYPE,
    imageType: ICON_IMAGE_TYPE,
    infoType: ICON_INFO_TYPE,
    languageType: ICON_LANGUAGE_TYPE,
    linkType: ICON_LINK_TYPE,
    mapPinType: ICON_MAP_PIN_TYPE,
    minusType: ICON_MINUS_TYPE,
    paletteType: ICON_PALETTE_TYPE,
    pauseType: ICON_PAUSE_TYPE,
    phoneType: ICON_PHONE_TYPE,
    plusType: ICON_PLUS_TYPE,
    questionType: ICON_QUESTION_TYPE,
    searchType: ICON_SEARCH_TYPE,
    settingsType: ICON_SETTINGS_TYPE,
    starType: ICON_STAR_TYPE,
    starSubType: ICON_STAR_SUB_TYPE,
    trashType: ICON_TRASH_TYPE,
    userType: ICON_USER_TYPE,
    userSubType: ICON_USER_SUB_TYPE,
  },
  args: {
    name: 'arrow',
    color: 'blue',
    colorIntensity: 500,
    arrowType: 'up',
    arrowSize: 'normal',
    calendarType: 'outlined',
    checkType: 'normal',
    checkCircle: 'outlined',
    closeType: 'normal',
    closeCircle: 'outlined',
    cloudType: 'outlined',
    codeType: 'code',
    darkModeType: 'sun',
    darkModeSubType: 'outlined',
    downloadType: 'outlined',
    editType: 'outlined',
    emailType: 'normal',
    emailSubType: 'outlined',
    exclamationType: 'outlined',
    eyeType: 'normal',
    eyeSubType: 'outlined',
    fileType: 'normal',
    fileSubType: 'outlined',
    folderType: 'normal',
    folderSubType: 'outlined',
    heartType: 'outlined',
    homeType: 'outlined',
    imageType: 'outlined',
    infoType: 'outlined',
    languageType: 'normal',
    linkType: 'outlined',
    mapPinType: 'outlined',
    minusType: 'outlined',
    paletteType: 'normal',
    pauseType: 'outlined',
    phoneType: 'outlined',
    plusType: 'outlined',
    questionType: 'outlined',
    searchType: 'outlined',
    settingsType: 'outlined',
    starType: 'normal',
    starSubType: 'outlined',
    trashType: 'outlined',
    userType: 'normal',
    userSubType: 'outlined',
  },
};

const Template = ({
  name,
  color,
  colorIntensity,
  arrowType,
  arrowSize,
  calendarType,
  checkType,
  checkCircle,
  closeType,
  closeCircle,
  cloudType,
  codeType,
  darkModeType,
  darkModeSubType,
  downloadType,
  editType,
  emailType,
  emailSubType,
  exclamationType,
  eyeType,
  eyeSubType,
  fileType,
  fileSubType,
  folderType,
  folderSubType,
  heartType,
  homeType,
  imageType,
  infoType,
  languageType,
  linkType,
  mapPinType,
  minusType,
  paletteType,
  pauseType,
  phoneType,
  plusType,
  questionType,
  searchType,
  settingsType,
  starType,
  starSubType,
  trashType,
  userType,
  userSubType,
}: TemplateProps): TemplateResult => html`
  <my-icon
    name=${name}
    color=${color}
    colorIntensity=${colorIntensity}
    arrowType=${arrowType}
    arrowSize=${arrowSize}
    calendarType=${calendarType}
    checkType=${checkType}
    checkCircle=${checkCircle}
    closeType=${closeType}
    closeCircle=${closeCircle}
    cloudType=${cloudType}
    codeType=${codeType}
    darkModeType=${darkModeType}
    darkModeSubType=${darkModeSubType}
    downloadType=${downloadType}
    editType=${editType}
    emailType=${emailType}
    emailSubType=${emailSubType}
    exclamationType=${exclamationType}
    eyeType=${eyeType}
    eyeSubType=${eyeSubType}
    fileType=${fileType}
    fileSubType=${fileSubType}
    folderType=${folderType}
    folderSubType=${folderSubType}
    heartType=${heartType}
    homeType=${homeType}
    imageType=${imageType}
    infoType=${infoType}
    languageType=${languageType}
    linkType=${linkType}
    mapPinType=${mapPinType}
    minusType=${minusType}
    paletteType=${paletteType}
    pauseType=${pauseType}
    phoneType=${phoneType}
    plusType=${plusType}
    questionType=${questionType}
    searchType=${searchType}
    settingsType=${settingsType}
    starType=${starType}
    starSubType=${starSubType}
    trashType=${trashType}
    userType=${userType}
    userSubType=${userSubType}
  />
`;

export const CustomIcon: Story = Template.bind({});
CustomIcon.args = {
  name: 'arrow',
  color: 'blue',
  colorIntensity: 500,
  arrowType: 'up',
  arrowSize: 'normal',
  calendarType: 'outlined',
  checkType: 'normal',
  checkCircle: 'outlined',
  closeType: 'normal',
  closeCircle: 'outlined',
  cloudType: 'outlined',
  codeType: 'code',
  darkModeType: 'sun',
  darkModeSubType: 'outlined',
  downloadType: 'outlined',
  editType: 'outlined',
  emailType: 'normal',
  emailSubType: 'outlined',
  exclamationType: 'outlined',
  eyeType: 'normal',
  eyeSubType: 'outlined',
  fileType: 'normal',
  fileSubType: 'outlined',
  folderType: 'normal',
  folderSubType: 'outlined',
  heartType: 'outlined',
  homeType: 'outlined',
  imageType: 'outlined',
  infoType: 'outlined',
  languageType: 'normal',
  linkType: 'outlined',
  mapPinType: 'outlined',
  minusType: 'outlined',
  paletteType: 'normal',
  pauseType: 'outlined',
  phoneType: 'outlined',
  plusType: 'outlined',
  questionType: 'outlined',
  searchType: 'outlined',
  settingsType: 'outlined',
  starType: 'normal',
  starSubType: 'outlined',
  trashType: 'outlined',
  userType: 'normal',
  userSubType: 'outlined',
};
