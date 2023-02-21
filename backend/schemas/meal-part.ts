import {createSchema} from 'sanity'
import {schemaTypes} from '.'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [{type: 'row'}],
    },
  ]),
})
