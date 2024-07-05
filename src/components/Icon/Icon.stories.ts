import { TemplateResult, html } from 'lit';
import { TemplateProps, Story } from '../../types/icon';
import {
  colorArg,
  colorIntensityArg,
  iconArg,
  iconArrowSize,
  iconArrowType,
  iconCalendarType,
  iconCheckCircle,
  iconCheckType,
  iconCloseCircle,
  iconCloseType,
  iconCloudType,
  iconCodeType,
  iconDarkModeSubType,
  iconDarkModeType,
  iconDownloadType,
  iconEditType,
  iconEmailSubType,
  iconEmailType,
  iconExclamationType,
  iconEyeSubType,
  iconEyeType,
  iconFileSubType,
  iconFileType,
  iconFolderSubType,
  iconFolderType,
  iconHeartType,
  iconHomeType,
  iconImageType,
  iconInfoType,
  iconLanguageType,
  iconLinkType,
  iconMapPinType,
  iconMinusType,
  iconPaletteType,
  iconPauseType,
  iconPhoneType,
  iconPlusType,
  iconQuestionType,
  iconSearchType,
  iconSettingsType,
  iconStarSubType,
  iconStarType,
  iconTrashType,
  iconUserSubType,
  iconUserType,
} from '../../constants/argTypesConstant';
import './Icon';

export default {
  title: 'Design System/Atoms/MyIcon',
  component: 'my-icon',
  argTypes: {
    name: iconArg,
    color: colorArg,
    colorIntensity: colorIntensityArg,
    arrowType: iconArrowType,
    arrowSize: iconArrowSize,
    calendarType: iconCalendarType,
    checkType: iconCheckType,
    checkCircle: iconCheckCircle,
    closeType: iconCloseType,
    closeCircle: iconCloseCircle,
    cloudType: iconCloudType,
    codeType: iconCodeType,
    darkModeType: iconDarkModeType,
    darkModeSubType: iconDarkModeSubType,
    downloadType: iconDownloadType,
    editType: iconEditType,
    emailType: iconEmailType,
    emailSubType: iconEmailSubType,
    exclamationType: iconExclamationType,
    eyeType: iconEyeType,
    eyeSubType: iconEyeSubType,
    fileType: iconFileType,
    fileSubType: iconFileSubType,
    folderType: iconFolderType,
    folderSubType: iconFolderSubType,
    heartType: iconHeartType,
    homeType: iconHomeType,
    imageType: iconImageType,
    infoType: iconInfoType,
    languageType: iconLanguageType,
    linkType: iconLinkType,
    mapPinType: iconMapPinType,
    minusType: iconMinusType,
    paletteType: iconPaletteType,
    pauseType: iconPauseType,
    phoneType: iconPhoneType,
    plusType: iconPlusType,
    questionType: iconQuestionType,
    searchType: iconSearchType,
    settingsType: iconSettingsType,
    starType: iconStarType,
    starSubType: iconStarSubType,
    trashType: iconTrashType,
    userType: iconUserType,
    userSubType: iconUserSubType,
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
