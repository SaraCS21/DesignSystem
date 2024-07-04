import { homeOutlined, homeSharp } from '../public/icons/home';
import {
  arrowRepeat,
  downArrow,
  downArrowSmall,
  leftArrow,
  leftArrowSmall,
  rightArrow,
  rightArrowSmall,
  upArrow,
  upArrowSmall,
} from '../public/icons/arrow';
import { Icon } from '../types/icon';
import { calendarOutlined, calendarShape } from '../public/icons/calendar';
import {
  check,
  checkCircleOutlined,
  checkCircleShape,
} from '../public/icons/check';
import {
  close,
  closeCircleOutlined,
  closeCircleShape,
} from '../public/icons/close';
import { cloudOutlined, cloudShape } from '../public/icons/cloud';
import {
  code,
  css,
  database,
  github,
  htmlIcon,
  linkedin,
  react,
  tailwind,
  vue,
} from '../public/icons/code';
import {
  moonOutlined,
  moonSharp,
  sunOutlined,
  sunSharp,
} from '../public/icons/darkMode';
import { downloadOutlined, downloadShape } from '../public/icons/download';
import { editOutlined, editShape } from '../public/icons/edit';
import {
  emailOpenOutlined,
  emailOpenShape,
  emailOutlined,
  emailShape,
} from '../public/icons/email';
import {
  exclamationOutlined,
  exclamationShape,
} from '../public/icons/exclamation';
import {
  eyeOutlined,
  eyeShape,
  eyeSlashOutlined,
  eyeSlashShape,
} from '../public/icons/eye';
import {
  fileCheckOutlined,
  fileCheckShape,
  fileCloneOutlined,
  fileCloneShape,
  fileCodeOutlined,
  fileCodeShape,
  fileCopyOutlined,
  fileCopyShape,
  fileEditOutlined,
  fileEditShape,
  fileOutlined,
  filePlusOutlined,
  filePlusShape,
  fileShape,
} from '../public/icons/file';
import {
  folderArrowOutlined,
  folderArrowShape,
  folderDuplicateOutlined,
  folderDuplicateShape,
  folderOpenOutlined,
  folderOpenShape,
  folderOutlined,
  folderShape,
} from '../public/icons/folder';
import { heartOutlined, heartShape } from '../public/icons/heart';
import { imageOutlined, imageShape } from '../public/icons/image';
import { infoOutlined, infoShape } from '../public/icons/info';
import { language } from '../public/icons/language';
import { link } from '../public/icons/link';
import { mapPinOutlined, mapPinSharp } from '../public/icons/mapPin';
import { minusCircleOutlined, minusCircleShape } from '../public/icons/minus';
import { palette } from '../public/icons/palette';
import { pauseCircleOutlined, pauseCircleShape } from '../public/icons/pause';
import { phoneOutlined, phoneSharp } from '../public/icons/phone';
import { plusCircleOutlined, plusCircleShape } from '../public/icons/plus';
import { questionOutlined, questionShape } from '../public/icons/question';
import { searchOutlined, searchShape } from '../public/icons/search';
import { settingsOutlined, settingsShape } from '../public/icons/settings';
import {
  halfStarOutlined,
  halfStarShape,
  starOutlined,
  starShape,
} from '../public/icons/star';
import { trashOutlined, trashShape } from '../public/icons/trash';
import {
  userAddOutlined,
  userAddSharp,
  userCircleOutlined,
  userCircleSharp,
  userEditOutlined,
  userEditSharp,
  userOutlined,
  userRemoveOutlined,
  userRemoveSharp,
  userSettingsOutlined,
  userSettingsSharp,
  userSharp,
} from '../public/icons/user';

export const iconTypes = ['outlined', 'sharp'] as const;

export const ICONS: { [key: string]: Icon } = {
  // Arrow icons
  rightArrow: rightArrow,
  leftArrow: leftArrow,
  upArrow: upArrow,
  downArrow: downArrow,
  rightArrowSmall: rightArrowSmall,
  leftArrowSmall: leftArrowSmall,
  upArrowSmall: upArrowSmall,
  downArrowSmall: downArrowSmall,
  arrowRepeat: arrowRepeat,

  // Calendar icons
  calendarOutlined: calendarOutlined,
  calendarShape: calendarShape,

  // Check icons
  checkCircleOutlined: checkCircleOutlined,
  checkCircleShape: checkCircleShape,
  check: check,

  // Close icons
  closeCircleOutlined: closeCircleOutlined,
  closeCircleShape: closeCircleShape,
  close: close,

  // Cloud icons
  cloudOutlined: cloudOutlined,
  cloudShape: cloudShape,

  // Code icons
  code: code,
  css: css,
  database: database,
  github: github,
  htmlIcon: htmlIcon,
  linkedin: linkedin,
  react: react,
  tailwind: tailwind,
  vue: vue,

  // Dark mode icons
  moonOutlined: moonOutlined,
  moonSharp: moonSharp,
  sunOutlined: sunOutlined,
  sunSharp: sunSharp,

  // Download icons
  downloadOutlined: downloadOutlined,
  downloadShape: downloadShape,

  // Edit icons
  editOutlined: editOutlined,
  editShape: editShape,

  // Email icons
  emailOutlined: emailOutlined,
  emailShape: emailShape,
  emailOpenOutlined: emailOpenOutlined,
  emailOpenShape: emailOpenShape,

  // Exclemation icons
  exclamationOutlined: exclamationOutlined,
  exclamationShape: exclamationShape,

  // Eye icons
  eyeOutlined: eyeOutlined,
  eyeShape: eyeShape,
  eyeSlashOutlined: eyeSlashOutlined,
  eyeSlashShape: eyeSlashShape,

  // File icons
  fileOutlined: fileOutlined,
  fileShape: fileShape,
  fileCheckOutlined: fileCheckOutlined,
  fileCheckShape: fileCheckShape,
  filePlusOutlined: filePlusOutlined,
  filePlusShape: filePlusShape,
  fileCloneOutlined: fileCloneOutlined,
  fileCloneShape: fileCloneShape,
  fileCodeOutlined: fileCodeOutlined,
  fileCodeShape: fileCodeShape,
  fileCopyOutlined: fileCopyOutlined,
  fileCopyShape: fileCopyShape,
  fileEditOutlined: fileEditOutlined,
  fileEditShape: fileEditShape,

  // Folder icons
  folderOutlined: folderOutlined,
  folderShape: folderShape,
  folderArrowOutlined: folderArrowOutlined,
  folderArrowShape: folderArrowShape,
  folderDuplicateOutlined: folderDuplicateOutlined,
  folderDuplicateShape: folderDuplicateShape,
  folderOpenOutlined: folderOpenOutlined,
  folderOpenShape: folderOpenShape,

  // Heart icons
  heartOutlined: heartOutlined,
  heartShape: heartShape,

  // Home icons
  homeOutlined: homeOutlined,
  homeSharp: homeSharp,

  // Image icons
  imageOutlined: imageOutlined,
  imageShape: imageShape,

  // Info icons
  infoOutlined: infoOutlined,
  infoShape: infoShape,

  // Language icons
  language: language,

  // Link icons
  link: link,

  // Map pin icons
  mapPinOutlined: mapPinOutlined,
  mapPinSharp: mapPinSharp,

  // Minus icons
  minusCircleOutlined: minusCircleOutlined,
  minusCircleShape: minusCircleShape,

  // Palette icons
  palette: palette,

  // Pause icons
  pauseCircleOutlined: pauseCircleOutlined,
  pauseCircleShape: pauseCircleShape,

  // Phone icons
  phoneOutlined: phoneOutlined,
  phoneSharp: phoneSharp,

  // Plus icons
  plusCircleOutlined: plusCircleOutlined,
  plusCircleShape: plusCircleShape,

  // Question icons
  questionOutlined: questionOutlined,
  questionShape: questionShape,

  // Search icons
  searchOutlined: searchOutlined,
  searchShape: searchShape,

  // Settings icons
  settingsOutlined: settingsOutlined,
  settingsShape: settingsShape,

  // Star icons
  starOutlined: starOutlined,
  starShape: starShape,
  halfStarOutlined: halfStarOutlined,
  halfStarShape: halfStarShape,

  // Trash icons
  trashOutlined: trashOutlined,
  trashShape: trashShape,

  // User icons
  userOutlined: userOutlined,
  userSharp: userSharp,
  userAddOutlined: userAddOutlined,
  userAddSharp: userAddSharp,
  userEditOutlined: userEditOutlined,
  userEditSharp: userEditSharp,
  userRemoveOutlined: userRemoveOutlined,
  userRemoveSharp: userRemoveSharp,
  userSettingsOutlined: userSettingsOutlined,
  userSettingsSharp: userSettingsSharp,
  userCircleOutlined: userCircleOutlined,
  userCircleSharp: userCircleSharp,
};
