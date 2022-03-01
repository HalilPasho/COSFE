export interface SearchBarProps {
    onSearchSubmit: (str: string) => void;
    clearResults: () => void;
  }

export interface QuoteProps {
    anime: string;
    character: string;
    quote: string;
  }