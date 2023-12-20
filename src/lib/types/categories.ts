import { TSlug } from './products';

export interface Icategory{
	title: string;
	slug: TSlug;
	descroption?: string;
	parents?: any;
}