import { PrismicDocument } from "@prismicio/types";

export interface Project extends Record<string, any> {
    title: string;
    thumbnail: any;
    shortDescription: any;
    description: any;
    tags: string;
    sortOrder: number;
}

export type ProjectDocument = PrismicDocument<Project>;
