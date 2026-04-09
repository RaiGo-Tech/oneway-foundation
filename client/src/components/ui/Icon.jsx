// Import all icons as React components
import PhoneIcon from '@/assets/icons/phone.svg';
import WhatsAppIcon from '@/assets/icons/whatsapp.svg';
import EmailIcon from '@/assets/icons/email.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import YoutubeIcon from '@/assets/icons/youtube.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import DonateIcon from '@/assets/icons/donate.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import MenuIcon from '@/assets/icons/menu.svg';
import CloseIcon from '@/assets/icons/close.svg';
import LocationIcon from '@/assets/icons/location.svg';
import VolunteerIcon from '@/assets/icons/volunteer.svg';
import EducationIcon from '@/assets/icons/education.svg';
import MedicalIcon from '@/assets/icons/medical.svg';
import FoodIcon from '@/assets/icons/food.svg';
import SupportIcon from '@/assets/icons/support.svg';
import CalendarIcon from '@/assets/icons/calendar.svg';
import UserIcon from '@/assets/icons/user.svg';
import DocumentIcon from '@/assets/icons/document.svg';
import VerificationIcon from '@/assets/icons/verification.svg';
import SearchIcon from '@/assets/icons/search.svg';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import CheckmarkIcon from '@/assets/icons/checkmark.svg';
import LightningIcon from '@/assets/icons/lightning.svg';
import EyeIcon from '@/assets/icons/eye.svg';
import ShieldIcon from '@/assets/icons/shield.svg';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import PlayIcon from '@/assets/icons/play.svg';
import ExternalLinkIcon from '@/assets/icons/external-link.svg';
import HeartIcon from '@/assets/icons/heart.svg';

// Icon mapping - maps icon names to their React components
const iconMap = {
  // Communication
  phone: PhoneIcon,
  whatsapp: WhatsAppIcon,
  email: EmailIcon,
  
  // Social Media
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  twitter: TwitterIcon,
  'twitter-x': TwitterIcon,
  linkedin: LinkedinIcon,
  
  // Actions
  donate: DonateIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-right-circle': ArrowRightIcon,
  menu: MenuIcon,
  close: CloseIcon,
  'x': CloseIcon,
  search: SearchIcon,
  'external-link': ExternalLinkIcon,
  
  // Location & Time
  location: LocationIcon,
  'map-pin': LocationIcon,
  calendar: CalendarIcon,
  
  // Services
  volunteer: VolunteerIcon,
  education: EducationIcon,
  'book-open': EducationIcon,
  medical: MedicalIcon,
  'heart-plus': MedicalIcon,
  health: MedicalIcon,
  food: FoodIcon,
  'utensils': FoodIcon,
  'utensils-crossed': FoodIcon,
  support: SupportIcon,
  'help-circle': SupportIcon,
  
  // User
  user: UserIcon,
  'user-circle': UserIcon,
  
  // Documents
  document: DocumentIcon,
  'file-text': DocumentIcon,
  
  // Security & Verification
  verification: VerificationIcon,
  'shield-check': VerificationIcon,
  shield: ShieldIcon,
  
  // UI Elements
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronDownIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  check: CheckmarkIcon,
  checkmark: CheckmarkIcon,
  lightning: LightningIcon,
  'zap': LightningIcon,
  eye: EyeIcon,
  spinner: SpinnerIcon,
  loader: SpinnerIcon,
  play: PlayIcon,
  heart: HeartIcon,
  'heart-filled': HeartIcon,
};

/**
 * Icon Component - Reusable SVG icon wrapper
 * @param {string} name - Icon name from iconMap
 * @param {number|string} size - Icon size (default: 24)
 * @param {string} className - Additional CSS classes
 * @param {string} color - Icon stroke/fill color
 */
const Icon = ({ name, size = 24, className = '', color = 'currentColor', ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap. Available icons:`, Object.keys(iconMap).join(', '));
    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        color: color,
      }}
      {...props}
    />
  );
};

export default Icon;

// Export all icons for direct usage if needed
export {
  PhoneIcon,
  WhatsAppIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  LinkedinIcon,
  DonateIcon,
  ArrowRightIcon,
  MenuIcon,
  CloseIcon,
  LocationIcon,
  VolunteerIcon,
  EducationIcon,
  MedicalIcon,
  FoodIcon,
  SupportIcon,
  CalendarIcon,
  UserIcon,
  DocumentIcon,
  VerificationIcon,
  SearchIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckmarkIcon,
  LightningIcon,
  EyeIcon,
  ShieldIcon,
  SpinnerIcon,
  PlayIcon,
  ExternalLinkIcon,
  HeartIcon,
};

