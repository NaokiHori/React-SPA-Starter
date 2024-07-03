#!/usr/local/bin/zsh

npm install \
  react \
  react-dom \
  @vanilla-extract/css

npm install --save-dev \
  @types/react \
  @types/react-dom \
  @vanilla-extract/vite-plugin \
  husky \
  lint-staged \
  prettier \
  typescript \
  typescript-eslint \
  vite

npx husky init && echo "npx lint-staged" > .husky/pre-commit
