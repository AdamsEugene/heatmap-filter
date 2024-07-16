export type DataItem = {
  type: string;
  category: string;
  name: string;
  segment: string | null;
  sqlSegment: string | null;
  needsMostFrequentValues: boolean;
  sqlFilterValue?: any;
  acceptedValues?: string;
  suggestedValuesCallback?: any;
  unionOfSegments?: string[];
  sqlFilter?: any;
  suggestedValuesApi?: string;
  option: string;
  options?: string[];
  conditions?: string[];
};

export type AllData = {
  condition: "and" | "or";
  index: number;
  action: string;
  default: string;
  value: string | number;
  actionError: boolean;
  actionErrorMsg: string;
  conditionError: boolean;
  conditionErrorMsg: string;
  valueError: boolean;
  valueErrorMsg: string;
  actionOpen: boolean;
  defaultOpen: boolean;
  valueOpen: boolean;
  segment?: string | null;
  name?: string;
  actionValue?: DataItem;
};

export interface SessionDataItem {
  definition: string;
  iconSrc: string; // Assuming iconSrc is a URL string
  idsegment: number;
  name: string;
  title: string;
  notDone?: boolean; // Optional property
  isDefinitionValueSet?: boolean; // Optional property
  showSign?: boolean; // Optional property
  rawValues?: any[];
  id?: string;
}

export interface ECommerceDataItem {
  definition: string;
  iconSrc: string; // Assuming iconSrc is a URL string or a string identifier for an icon
  idsegment: number;
  name: string;
  title: string;
  isDefinitionValueSet?: boolean; // Optional property
  showSign?: boolean; // Optional property
}

interface CompareName {
  nameForCompare?: string;
  rawValues?: any;
  edit?: boolean;
  id?: string;
}

export type CombinedFilter = (SessionDataItem | ECommerceDataItem) &
  CompareName;

export interface DisableComparisonEvent extends Event {
  detail: {
    disabled: boolean;
  };
}

export interface Experiment {
  value: string;
  tag: string;
  variant_id: string;
  experiment_id: string | null;
  url?: string;
}

export interface Experiments {
  [x: string]: Experiment[];
}

export interface Partner {
  partners: string[];
  experiments: Experiments;
  partners_friendly: any;
  partners_url: any;
}

export interface CustomValues {
  action: string;
  default: string;
  name: string;
  segment: string;
  value: string;
}
