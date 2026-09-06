/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // Base canvas is #EDEAD2
        canvas: "#EDEAD2",

        // Earthy Slate / Sand Neutral System tuned for #EDEAD2
        slate: {
          50: "#EDEAD2",   // The primary canvas background
          100: "#F6F4E8",  // Warm soft cream card surface
          200: "#E5E1C7",  // Subdued secondary card surface
          300: "#D3CEAE",  // Crisp tactile border
          400: "#8A8463",  // Muted informational text
          500: "#696347",  // Secondary body text
          600: "#4D4830",  // Readable medium text
          700: "#36321F",  // Deep earthy headers
          800: "#242113",  // Dark warm bark
          900: "#16150C",  // Deepest charcoal earth (optimal contrast on #EDEAD2)
          950: "#0C0C07",  // Pure black earth
        },

        // Organic Harvest Green Palette (Icons & Buttons)
        brand: {
          50: "#F2F7F0",
          100: "#DFEED7",  // Soft pale green for badge / icon container
          200: "#C2DFC0",  // Light sprout green
          300: "#9CCB99",  // Fresh herbal green
          400: "#6FA86B",  // Medium foliage green
          500: "#3F8242",  // Rich leaf green
          600: "#246B35",  // Primary green button / icon (WCAG AAA compliant with white text)
          700: "#1B542A",  // Deep green hover
          800: "#153E20",  // Dark green active
          900: "#0E2B16",  // Midnight forest
          950: "#07170C",
        },

        // Earth & Wheat Accents
        earth: {
          50: "#FAF9F2",
          100: "#F6F4E8",
          200: "#EDEAD2",  // Exact base match
          300: "#DDD8BD",
          400: "#CDC7A4",
          500: "#A69E74",
          600: "#827A53",
          700: "#615A39",
          800: "#433D24",
          900: "#262212",
        },

        // Sprout & Foliage accents
        sprout: {
          light: "#C2DFC0",
          DEFAULT: "#3F8242",
          dark: "#246B35",
        },

        cream: {
          50: "#FCFBF5",
          100: "#F6F4E8",
          200: "#EDEAD2",
          300: "#E2DEC2",
          400: "#D3CEAE",
        },

        amber: {
          50: "#FEFDF5",
          100: "#FCF9E8",
          200: "#F9F1C5",
          300: "#F4E496",
          400: "#ECCF60",
          500: "#E2B632",
          600: "#C69420",
          700: "#A07018",
          800: "#835819",
          900: "#6E481A",
          950: "#3F250B",
        },

        success: "#246B35",
        warning: "#E2B632",
        danger: "#C05621",
        info: "#246B35",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(22, 21, 12, 0.05)',
        'md': '0 4px 10px -1px rgba(22, 21, 12, 0.07), 0 2px 4px -1px rgba(22, 21, 12, 0.04)',
        'lg': '0 10px 20px -3px rgba(22, 21, 12, 0.09), 0 4px 6px -2px rgba(22, 21, 12, 0.04)',
        'xl': '0 20px 25px -5px rgba(22, 21, 12, 0.11), 0 10px 10px -5px rgba(22, 21, 12, 0.04)',
      },
    },
  },

  plugins: [],
};
