import { type SchemaTypeDefinition } from 'sanity'

import { startup } from './startups';
import { author } from './author'
import { playlist } from './playlist';

export const schema: { types: SchemaTypeDefinition[] } = {
types: [author, startup, playlist],
};
