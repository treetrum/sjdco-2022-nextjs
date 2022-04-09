import { PrismicDocument } from "@prismicio/types";

export interface Project extends Record<string, any> {
    title: string;
    thumbnail: any;
    shortDescription: any;
    description: any;
}

export type ProjectDocument = PrismicDocument<Project>;
