import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconStyles } from './Icon.styles';
import { ARROW_ICONS } from '../../public/icons/arrow';
import { CALENDAR_ICONS } from '../../public/icons/calendar';
import { CHECK_ICONS } from '../../public/icons/check';
import { CLOSE_ICONS } from '../../public/icons/close';
import { CLOUD_ICONS } from '../../public/icons/cloud';
import { CODE_ICONS } from '../../public/icons/code';
import { DARK_MODE_ICONS } from '../../public/icons/darkMode';
import { DOWNLOAD_ICONS } from '../../public/icons/download';
import { EDIT_ICONS } from '../../public/icons/edit';
import { EMAIL_ICONS } from '../../public/icons/email';
import { EXCLAMATION_ICONS } from '../../public/icons/exclamation';
import { EYE_ICONS } from '../../public/icons/eye';
import { FILE_ICONS } from '../../public/icons/file';
import { FOLDER_ICONS } from '../../public/icons/folder';
import { HEART_ICONS } from '../../public/icons/heart';
import { HOME_ICONS } from '../../public/icons/home';
import { IMAGE_ICONS } from '../../public/icons/image';
import { INFO_ICONS } from '../../public/icons/info';
import { LANGUAGE_ICONS } from '../../public/icons/language';
import { LINK_ICONS } from '../../public/icons/link';
import { MAP_PIN_ICONS } from '../../public/icons/mapPin';
import { MINUS_ICONS } from '../../public/icons/minus';
import { PALETTE_ICONS } from '../../public/icons/palette';
import { PAUSE_ICONS } from '../../public/icons/pause';
import { PHONE_ICONS } from '../../public/icons/phone';
import { PLUS_ICONS } from '../../public/icons/plus';
import { QUESTION_ICONS } from '../../public/icons/question';
import { SEARCH_ICONS } from '../../public/icons/search';
import { SETTINGS_ICONS } from '../../public/icons/settings';
import { STAR_ICONS } from '../../public/icons/star';
import { TRASH_ICONS } from '../../public/icons/trash';
import { USER_ICONS } from '../../public/icons/user';

@customElement('my-icon')
export class MiIcon extends LitElement {
  @property({ type: String })
  name = 'arrow';

  @property({ type: String })
  arrowType = 'up';

  @property({ type: String })
  arrowSize = 'normal';

  @property({ type: String })
  calendarType = 'outlined';

  @property({ type: String })
  checkType = 'normal';

  @property({ type: String })
  checkCircle = 'outlined';

  @property({ type: String })
  closeType = 'normal';

  @property({ type: String })
  closeCircle = 'outlined';

  @property({ type: String })
  cloudType = 'outlined';

  @property({ type: String })
  codeType = 'code';

  @property({ type: String })
  darkModeType = 'sun';

  @property({ type: String })
  darkModeSubType = 'outlined';

  @property({ type: String })
  downloadType = 'outlined';

  @property({ type: String })
  editType = 'outlined';

  @property({ type: String })
  emailType = 'normal';

  @property({ type: String })
  emailSubType = 'outlined';

  @property({ type: String })
  exclamationType = 'outlined';

  @property({ type: String })
  eyeType = 'normal';

  @property({ type: String })
  eyeSubType = 'outlined';

  @property({ type: String })
  fileType = 'normal';

  @property({ type: String })
  fileSubType = 'outlined';

  @property({ type: String })
  folderType = 'normal';

  @property({ type: String })
  folderSubType = 'outlined';

  @property({ type: String })
  heartType = 'outlined';

  @property({ type: String })
  homeType = 'outlined';

  @property({ type: String })
  imageType = 'outlined';

  @property({ type: String })
  infoType = 'outlined';

  @property({ type: String })
  languageType = 'normal';

  @property({ type: String })
  linkType = 'normal';

  @property({ type: String })
  mapPinType = 'outlined';

  @property({ type: String })
  minusType = 'outlined';

  @property({ type: String })
  paletteType = 'normal';

  @property({ type: String })
  pauseType = 'outlined';

  @property({ type: String })
  phoneType = 'outlined';

  @property({ type: String })
  plusType = 'outlined';

  @property({ type: String })
  questionType = 'outlined';

  @property({ type: String })
  searchType = 'outlined';

  @property({ type: String })
  settingsType = 'outlined';

  @property({ type: String })
  starType = 'normal';

  @property({ type: String })
  starSubType = 'outlined';

  @property({ type: String })
  trashType = 'normal';

  @property({ type: String })
  userType = 'normal';

  @property({ type: String })
  userSubType = 'outlined';

  static get styles() {
    return [IconStyles];
  }

  render() {
    const arrowIcon = ARROW_ICONS({
      type: this.arrowType,
      size: this.arrowSize,
    });

    const calendarIcon = CALENDAR_ICONS({ type: this.calendarType });

    const checkIcon = CHECK_ICONS({
      type: this.checkType,
      circle: this.checkCircle,
    });

    const closeIcon = CLOSE_ICONS({
      type: this.closeType,
      circle: this.closeCircle,
    });

    const cloudIcon = CLOUD_ICONS({ type: this.cloudType });

    const codeIcon = CODE_ICONS({ type: this.codeType });

    const darkModeIcon = DARK_MODE_ICONS({
      type: this.darkModeType,
      subType: this.darkModeSubType,
    });

    const downloadIcon = DOWNLOAD_ICONS({ type: this.downloadType });

    const editIcon = EDIT_ICONS({ type: this.editType });

    const emailIcon = EMAIL_ICONS({
      type: this.emailType,
      subType: this.emailSubType,
    });

    const exclamationIcon = EXCLAMATION_ICONS({ type: this.exclamationType });

    const eyeIcon = EYE_ICONS({
      type: this.eyeType,
      subType: this.eyeSubType,
    });

    const fileIcon = FILE_ICONS({
      type: this.fileType,
      subType: this.fileSubType,
    });

    const folderIcon = FOLDER_ICONS({
      type: this.folderType,
      subType: this.folderSubType,
    });

    const heartIcon = HEART_ICONS({ type: this.heartType });

    const homeIcon = HOME_ICONS({ type: this.homeType });

    const imageIcon = IMAGE_ICONS({ type: this.imageType });

    const infoIcon = INFO_ICONS({ type: this.infoType });

    const languageIcon = LANGUAGE_ICONS({ type: this.languageType });

    const linkIcon = LINK_ICONS({ type: this.linkType });

    const mapPinIcon = MAP_PIN_ICONS({ type: this.mapPinType });

    const minusIcon = MINUS_ICONS({ type: this.minusType });

    const paletteIcon = PALETTE_ICONS({ type: this.paletteType });

    const pauseIcon = PAUSE_ICONS({ type: this.pauseType });

    const phoneIcon = PHONE_ICONS({ type: this.phoneType });

    const plusIcon = PLUS_ICONS({ type: this.plusType });

    const questionIcon = QUESTION_ICONS({ type: this.questionType });

    const searchIcon = SEARCH_ICONS({ type: this.searchType });

    const settingsIcon = SETTINGS_ICONS({ type: this.settingsType });

    const starIcon = STAR_ICONS({
      type: this.starType,
      subType: this.starSubType,
    });

    const trashIcon = TRASH_ICONS({ type: this.trashType });

    const userIcon = USER_ICONS({
      type: this.userType,
      subType: this.userSubType,
    });

    const icon =
      arrowIcon ||
      calendarIcon ||
      checkIcon ||
      closeIcon ||
      cloudIcon ||
      codeIcon ||
      darkModeIcon ||
      downloadIcon ||
      editIcon ||
      emailIcon ||
      exclamationIcon ||
      eyeIcon ||
      fileIcon ||
      folderIcon ||
      heartIcon ||
      homeIcon ||
      imageIcon ||
      infoIcon ||
      languageIcon ||
      linkIcon ||
      mapPinIcon ||
      minusIcon ||
      paletteIcon ||
      pauseIcon ||
      phoneIcon ||
      plusIcon ||
      questionIcon ||
      searchIcon ||
      settingsIcon ||
      starIcon ||
      trashIcon ||
      userIcon;

    return html` <div>${icon}</div> `;
  }
}
