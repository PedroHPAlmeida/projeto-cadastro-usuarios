export interface User {
    name: string;
    username: string;
    email: string;
    password: string;
    birthDate: string;
    state: number;
    musics: Music[];
}

export interface Music {
    title: string;
    band: string;
    genre: number;
    isFavorite: boolean;
}
