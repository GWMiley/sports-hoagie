import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schema from './schema'

export default defineConfig({
  name: 'default',
  title: 'Sports Hoagie',
  projectId: 'va4ztedl',
  dataset: 'production',
  plugins: [structureTool()],
  schema
})