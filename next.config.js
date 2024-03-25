module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '/**',
        },
      ],
    },
    i18n: {
      locales: ["ru", "en"], //Достыпные языки
      defaultLocale: "ru", // Язык по умолчанию
    },
    
  }
  