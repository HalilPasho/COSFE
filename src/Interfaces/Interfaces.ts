export interface SearchBarProps {
    onSearchSubmit: (str?: any, spec?: any) => void;
    clearResults: () => void;
}

export type Companies = {
    name: string;
    logo: string;
    specialities: string;
    city: string;
}