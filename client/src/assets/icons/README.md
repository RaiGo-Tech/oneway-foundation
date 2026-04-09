# ONEWAY FOUNDATION - Custom Icon System

A lightweight, secure, and optimized SVG icon system for the ONEWAY FOUNDATION NGO website.

## 📁 Folder Structure

```text
src/assets/icons/
├── arrow-right.svg
├── calendar.svg
├── checkmark.svg
├── chevron-down.svg
├── chevron-left.svg
├── chevron-right.svg
├── close.svg
├── document.svg
├── donate.svg
├── education.svg
├── email.svg
├── external-link.svg
├── eye.svg
├── facebook.svg
├── food.svg
├── heart.svg
├── instagram.svg
├── lightning.svg
├── linkedin.svg
├── location.svg
├── medical.svg
├── menu.svg
├── phone.svg
├── play.svg
├── search.svg
├── shield.svg
├── spinner.svg
├── support.svg
├── twitter.svg
├── user.svg
├── verification.svg
├── volunteer.svg
├── whatsapp.svg
└── youtube.svg
```

## 🎯 Features

- ✅ Pure SVG files - no external icon libraries
- ✅ Lightweight and optimized
- ✅ No inline styles
- ✅ Uses `currentColor` for stroke/fill
- ✅ 24x24 viewBox standard
- ✅ stroke-width="2" for consistent look
- ✅ Rounded stroke-linecap and stroke-linejoin
- ✅ No scripts, no external references
- ✅ Secure and production-ready

## 🚀 Usage

### Using the Icon Component (Recommended)

```jsx
import Icon from '@/components/ui/Icon';

<Icon name="phone" />

<Icon name="whatsapp" size={32} />

<Icon name="email" className="text-orange-500" />

<Icon name="facebook" color="#1877F2" />
```

### Available Icon Names

| Category | Icons |
| -------- | ----- |
| **Communication** | `phone`, `whatsapp`, `email` |
| **Social Media** | `facebook`, `instagram`, `youtube`, `twitter`, `linkedin` |
| **Actions** | `donate`, `arrow-right`, `menu`, `close`, `search`, `external-link` |
| **Location & Time** | `location`, `calendar` |
| **Services** | `volunteer`, `education`, `medical`, `food`, `support` |
| **User** | `user` |
| **Documents** | `document` |
| **Security** | `verification`, `shield` |
| **UI Elements** | `chevron-down`, `chevron-left`, `chevron-right`, `checkmark`, `lightning`, `eye`, `spinner`, `play`, `heart` |

### Direct SVG Import (Advanced)

```jsx
import PhoneIcon from '@/assets/icons/phone.svg';
import DonateIcon from '@/assets/icons/donate.svg';

<PhoneIcon width={24} height={24} className="text-orange-500" />
```

## 🎨 Icon Style Guidelines

All icons follow these standards:

- **ViewBox**: 24x24
- **Stroke Width**: 2
- **Fill**: none (except social logos)
- **Stroke**: currentColor
- **Stroke Linecap**: round
- **Stroke Linejoin**: round

## 🔒 Security

- No script tags inside SVG
- No external references
- No event handlers inside SVG
- No data URI embeddings
- Clean production-ready code

## 📦 Performance

- Minimal file sizes (~500 bytes per icon)
- No external CDN dependencies
- Vite transforms SVGs to React components automatically
- Tree-shakeable imports

## 🔧 Integration

The icon system is automatically integrated with Vite through a custom plugin in `vite.config.js`. This plugin:

1. Transforms SVG files to React components
2. Converts SVG attributes to JSX (camelCase)
3. Adds {...props} support for dynamic styling

## ✅ Requirements Met

- [x] No external icon library (no react-icons, no fontawesome CDN, no lucide CDN)
- [x] Pure SVG files
- [x] Each icon saved as separate .svg file
- [x] Optimized and lightweight
- [x] No inline style attributes
- [x] Uses currentColor
- [x] No unnecessary metadata
- [x] No external references
- [x] No scripts inside SVG
- [x] Safe and secure
