/**
 * Chakra UI Theme Configuration
 * Defines the design system colors, fonts, and components to match the Coached dashboard
 */

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // Color palette matching the dashboard design
  colors: {
    brand: {
      50: '#fff5f5',
      100: '#fed7d7',
      200: '#feb2b2',
      300: '#fc8181',
      400: '#f56565',
      500: '#E53E3E', // Primary red/coral color
      600: '#c53030',
      700: '#9b2c2c',
      800: '#822727',
      900: '#63171b',
    },
    gray: {
      50: '#f9fafb',
      100: '#f4f5f7',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    }
  },
  
  // Typography to match the dashboard font
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  
  // Component customizations
  components: {
    Button: {
      variants: {
        // Primary button style (Book Session, Add Employee)
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
          fontWeight: '500',
          borderRadius: '8px',
        },
        // Ghost button for nav items
        ghost: {
          _hover: {
            bg: 'gray.50',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid',
          borderColor: 'gray.200',
        },
      },
    },
  },
  
  // Global styles
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
});

export default theme;