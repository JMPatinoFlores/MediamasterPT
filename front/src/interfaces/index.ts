export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProductsSliderProps {
  products: IProduct[];
}

export interface IParams {
  params: {
    id: string;
  };
}

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}
