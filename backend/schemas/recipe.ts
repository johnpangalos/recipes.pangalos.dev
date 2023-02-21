import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'prep_time',
      type: 'number',
      title: 'Prep Time',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cook_time',
      type: 'number',
      title: 'Cook Time',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'servings',
      type: 'number',
      title: 'Servings',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'course',
      type: 'string',
      title: 'Course',
      options: {
        list: ['Main', 'Starter', 'Dessert', 'Breakfast', 'Picnic', 'Snack'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'meal_parts',
      type: 'array',
      title: 'Meal Parts',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'ingredients',
              type: 'array',
              title: 'Ingredients',
              validation: (Rule) => Rule.required(),
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      type: 'string',
                      title: 'Name',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'quantity',
                      type: 'string',
                      title: 'Quantity',
                    },
                    {
                      name: 'unit',
                      type: 'string',
                      title: 'Unit',
                    },
                    {
                      name: 'optional',
                      type: 'boolean',
                      title: 'Optional',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'instructions',
      type: 'array',
      title: 'Instructions',
      of: [{type: 'text'}],
    },
  ],
} satisfies SchemaTypeDefinition
