import type { Category } from './category';

export interface Repair {
  id: number;
  title: string;
  category: Category;
  imgs: {
    after: string;
    before: string;
    all: string[];
  };
  description: string;
  time: string;
}
