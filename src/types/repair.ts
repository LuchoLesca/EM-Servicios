import type { Category } from './category';

export interface Repair {
  id: number;
  title: string;
  category: Category;
  before: string;
  after: string;
  description: string;
  time: string;
}
