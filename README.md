# Tournament Tables Hub

Веб-приложение для управления турнирными таблицами.

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/Pomidorkaeg/dasafds.git
cd dasafds
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите приложение локально:
```bash
npm run dev
```

## Развертывание на GitHub Pages

1. Откройте настройки репозитория: https://github.com/Pomidorkaeg/dasafds/settings/pages
   - В разделе "Source" выберите "GitHub Actions"
   - В разделе "Build and deployment":
     - Source: GitHub Actions
     - Branch: main
   - Сохраните настройки

2. Перейдите в раздел "Actions" вашего репозитория
   - Выберите последний workflow
   - Нажмите "Re-run all jobs" в правом верхнем углу

3. После успешного выполнения workflow, сайт будет доступен по адресу:
   https://pomidorkaeg.github.io/dasafds/

## Технологии

- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui
- React Query