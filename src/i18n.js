import { createI18n } from 'vue-i18n'

// minimal setup. nothing translated yet, just wiring up the plugin
// so we can start using t() in components later
export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {},
    'zh-TW': {},
    'zh-CN': {}
  }
})
