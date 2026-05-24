export const article = {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'beat',
      title: 'Beat',
      type: 'string',
      options: {
        list: [
          { title: 'Eagles', value: 'Eagles' },
          { title: 'Phillies', value: 'Phillies' },
          { title: 'Sixers', value: 'Sixers' },
          { title: 'Flyers', value: 'Flyers' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Garrett R.'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'estimatedReadTime',
      title: 'Estimated Read Time (minutes)',
      type: 'number'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}