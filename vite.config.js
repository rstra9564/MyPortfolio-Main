import { defineConfig } from 'vite'

const REPO_NAME = 'MyPortfolio-Main'

export default defineConfig(({ mode }) => ({
  base:
    process.env.VITE_BASE_PATH ||
    (mode === 'production' ? `/${REPO_NAME}/` : '/'),
}))
