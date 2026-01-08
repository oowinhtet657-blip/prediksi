# Color Scheme - HENING4D Web App

Skema warna web app telah disesuaikan untuk mencocokkan dengan warna logo **HENING4D**.

## Warna Utama (Brand Colors)

| Warna | Hex Code | Penggunaan |
|-------|----------|-----------|
| **Primary (Biru Tua)** | `#001F73` | Borders, headers, buttons, text utama |
| **Secondary (Biru Muda/Cyan)** | `#00B8E6` | Accents, highlights, borders, hover states |
| **Accent (Oranye/Kuning)** | `#FFB800` | Buttons aktif, "Hari Ini", highlights utama |
| **Dark (Biru Gelap)** | `#0a0e27` | Background gradients |

## Gradient Backgrounds

### Body Background
```
linear-gradient(135deg, #001F73 0%, #003DA6 50%, #1a1f3a 100%)
```

### Button Gradient (Default)
```
linear-gradient(135deg, #001F73 0%, #00B8E6 100%)
```

### Button Gradient (Active)
```
linear-gradient(135deg, #FFB800 0%, #FF9500 100%)
```

### Header Gradient
```
linear-gradient(to bottom, #001F73, #003DA6)
```

## File yang Diubah

### 1. **tailwind.config.js**
- Diperbarui `primary` color dari `#003DA6` ke `#001F73`
- Diperbarui `secondary` color dari `#0052D4` ke `#00B8E6`
- Menambah `accent` color `#FFB800`
- Menambah `dark` color `#0a0e27`

### 2. **app/globals.css**
- Background body diubah ke gradient baru
- `.number-box` ditambahkan border cyan dan shadow glow

### 3. **app/layout.tsx**
- Background body diubah ke gradient baru

### 4. **app/page.tsx**
- Header text color diubah ke cyan `#00B8E6`
- "Hari Ini" button color diubah ke orange `#FFB800`
- Loading spinner diubah ke cyan
- Navigation buttons diubah ke primary color

### 5. **app/components/PasaranMenu.tsx**
- Buttons ditambahkan style inline dengan gradient warna baru
- Active button gradient: orange `#FFB800` ke `#FF9500`
- Inactive button gradient: primary `#001F73` ke secondary `#00B8E6`

### 6. **app/components/CalendarCardClassic.tsx**
- Semua hardcoded `blue-700` diubah ke `#001F73`
- Semua `blue-50` diubah ke `#E6F2FF` (light blue)
- Semua `blue-300` diubah ke `#00B8E6`
- Schedule link button diubah ke orange `#FFB800`
- Shio card borders diubah ke primary color

### 7. **app/components/MarketPredictor.tsx**
- Loading gradient diubah ke primary colors
- Result box gradient diubah ke primary colors
- Text colors diubah ke primary `#001F73`
- Info message background diubah dengan opacity primary

### 8. **app/components/PredictionGuide.tsx**
- Container gradient diubah ke primary colors
- Numbered circles diubah ke primary color
- Grid boxes diubah ke light cyan background `#E6F2FF`
- Disclaimer background diubah ke light orange
- Tips section background diubah ke light cyan

## Elemen UI yang Berubah

✅ **Headers & Titles** - Sekarang primary color `#001F73`
✅ **Buttons Default** - Sekarang primary color
✅ **Buttons Active** - Sekarang accent color `#FFB800`
✅ **Borders** - Sekarang primary color `#001F73`
✅ **Accents & Highlights** - Sekarang secondary `#00B8E6`
✅ **Backgrounds** - Gradient dengan primary & dark colors
✅ **Table Headers** - Sekarang primary color
✅ **Cards** - Primary color borders
✅ **Navigation** - Primary & secondary color gradients

## Preview Warna di Logo

- **Biru Tua** (#001F73) - Bagian "K" dan tepi logo
- **Biru Muda** (#00B8E6) - Bagian "A", "L", "O", "K" bagian tengah
- **Oranye** (#FFB800) - Bagian "4", "D" dan aksen oranye
- **Gradasi** antara ketiga warna menciptakan visual yang menarik

Skema warna sekarang **konsisten** di seluruh web app dan **mencocokkan** identitas visual logo HENING4D!
