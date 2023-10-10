export interface Contributor {
    name: string;
    image: string;
    message: string;
    checked: boolean;
}

export interface Type {
    name: string;
    contributors: Contributor[];
    checked: boolean;
}

export interface User {
    firstName: string;
    lastName: string;
    image: string;
}
