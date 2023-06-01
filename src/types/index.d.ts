type RootStackParamList = {
  Home: undefined;
  Person: undefined;
  RealmCURD: undefined;
};

type RootTabParamList = {
  Profile: undefined;
};

type DrawerParamList = {
  Feed: undefined;
  Article: undefined;
};

declare interface Window {
  config: {
    BASE_URL: string;
  };
}

declare type SearchOperator =
  | 'eq'
  | 'ne'
  | 'gte'
  | 'ge'
  | 'lte'
  | 'le'
  | 'ltn'
  | 'between'
  | 'like'
  | 'in'
  | 'not in';

declare type SortType = 'asc' | 'desc';

declare interface SortParam {
  field_name?: string;
  sort_type?: SortType;
}

declare interface SearchParam {
  field_name?: string;
  operator?: SearchOperator;
  value?: any;
  value1?: any;
}

declare interface SearchCriteria {
  sort_params?: SortParam[];
  search_params?: SearchParam[];
  page?: number;
  size?: number;
  [key: string]: any;
}

declare interface ResData<T = any> {
  data: T;
  success: boolean;
  msg: string;
  code: number;
}

declare interface ListData<T = any> {
  list: T[];
  has_next: boolean;
  has_previous: boolean;
  is_first: boolean;
  is_last: boolean;
  page: number;
  size: number;
  total_elements: number;
  total_pages: number;
}

declare type ListResData<T = any> = ResData<ListData<T>>;

declare interface BaseResCriteria {
  create_by: string;
  update_by: string;
  create_time: string;
  update_time: string;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
