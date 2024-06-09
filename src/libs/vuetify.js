// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#E68F50',
          'primary-lighten-1': '#E7BF9F',
          'primary-darken-1': '#BC8864',
          secondary: '#FDFCFB',
          icons: '#3E3733',
          accent: '#E35D1C',
          error: '#FF5252',
          warning: '#FFC107',
          info: '#448AFF',
          success: '#4CAF50'
        }
      }
    }
  }
});

export default vuetify;
