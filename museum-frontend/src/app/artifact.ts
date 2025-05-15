export interface Artifact {
    id: number;
    code: string;
    name: string;
    category: string;
    material: string;
    period: string;
    authorOrOrigin: string;
    shortDescription: string;
    photoUrl: string | null;
    museumLocation: string;
    relatedItems: string;
}
