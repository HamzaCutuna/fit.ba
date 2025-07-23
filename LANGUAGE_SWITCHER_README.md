# Language Switcher Implementation

A lightweight, context-based language switcher for Next.js without routing complications.

## Features

- ✅ Simple React Context-based language management
- ✅ No URL routing changes or middleware
- ✅ Persistent language choice via localStorage
- ✅ Dynamic translation loading from JSON files
- ✅ TypeScript support with proper typing
- ✅ Fallback handling for missing translations

## Files Created

### Core Files
- `contexts/LanguageContext.tsx` - Main language context provider
- `components/LanguageSwitcher.tsx` - Language toggle button component
- `public/locales/bs.json` - Bosnian translations
- `public/locales/en.json` - English translations

### Integration
- Updated `app/layout.tsx` - Wrapped app with LanguageProvider
- Updated `components/Navbar.tsx` - Added LanguageSwitcher to navigation
- Updated `components/Hero.tsx` - Added translation examples
- Updated `components/NewsSection.tsx` - Added translation examples

## Usage

### 1. Using Translations in Components

```tsx
import { useTranslation } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('common.description')}</p>
    </div>
  );
};
```

### 2. Adding New Translations

Add new keys to both `public/locales/bs.json` and `public/locales/en.json`:

```json
{
  "mySection": {
    "title": "My Title",
    "description": "My description"
  }
}
```

### 3. Nested Translation Keys

The system supports nested keys using dot notation:

```tsx
t('hero.title')          // Direct access
t('common.buttons.save') // Nested access
```

### 4. Fallback Handling

If a translation key is missing, the key itself is returned:

```tsx
t('missing.key') // Returns 'missing.key' if not found
```

## Language Switcher Component

The language switcher appears in the navbar and shows:
- Globe icon with current language code (BS/EN)
- Smooth animations on hover/click
- Persists choice to localStorage

## Context API

### LanguageProvider Props
- `children: ReactNode` - Components to wrap

### useLanguage Hook Returns
- `language: 'bs' | 'en'` - Current language
- `setLanguage: (lang) => void` - Change language function
- `translations: object` - Current translation object
- `t: (key: string) => string` - Translation function
- `isLoading: boolean` - Loading state

### useTranslation Hook Returns
- `t: (key: string) => string` - Translation function
- `isLoading: boolean` - Loading state

## How It Works

1. **Initialization**: Context loads saved language from localStorage (defaults to 'bs')
2. **Translation Loading**: Fetches appropriate JSON file from `/public/locales/`
3. **Language Switch**: Updates state, saves to localStorage, loads new translations
4. **Component Updates**: All components using `useTranslation` re-render with new text

## No Routing Issues

This implementation specifically avoids:
- Next.js i18n routing configuration
- URL prefixes like `/en` or `/bs`
- Middleware complications
- Server-side locale detection
- Automatic redirects

## Adding More Languages

To add a new language:

1. Create `public/locales/[lang].json`
2. Update the `Language` type in `LanguageContext.tsx`:
   ```tsx
   type Language = 'bs' | 'en' | 'de'; // Add new language
   ```
3. Update validation in the context initialization

## Performance

- Translations are loaded only when language changes
- Uses React Context for efficient re-renders
- Lightweight JSON files (~2KB each)
- No server-side processing required 