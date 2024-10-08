export interface Footer {
  a: string;
  label; string;
}

export interface Meta {
  title: string;
  url: string;
  description: string;
  keywords: string;
}

type TextBlockType = "p";

export type HealthDisease = "diabetes" | "ischemic" | "lungcancer" | "lri" | "stroke" | "nd" | "copd";

export type AgreementName = "eanet" | "asean-trans" | "male" | "neaspec" 
  | "rapap" | "clrtap" | "eu-directive" | "us-canada" 
  | "lusaka" | "nairobi" | "abidjan" | "lat-caribbean" | "arctic";

export type TextBlock = Record<TextBlockType, string>;

export type DropdownOptionBlock = {
  label: string;
  value: string;
};

export interface Content {
  type: string;
  head?: string;
  dropdown?: DropdownOptionBlock[]; //Allows you to put a dropdown in the title of the page
  text?: TextBlock[];
  menu?: string;
  icon?: string;
  embed?: string;
}

interface Region {
  posX: number;
  posY: number;
  region: string;
  types: Sector[];
  numCountries: number
  totalValue: number
}

export type HeadBlock = {
  type: "dropdown" | "title";
  title?: string;
  dropdown?: DropdownOptionBlock[];
};

export interface CartoRegionData {
  regions: Region[];
  scale_width: number;
  scale_height: number;
  type: string;
}

type CSSOMString = string;
type FontFaceLoadStatus = 'unloaded'|'loading'|'loaded'|'error';
type FontFaceSetStatus = 'loading'|'loaded';

interface FontFace {
  family: CSSOMString;
  style: CSSOMString;
  weight: CSSOMString;
  stretch: CSSOMString;
  unicodeRange: CSSOMString;
  variant: CSSOMString;
  featureSettings: CSSOMString;
  variationSettings: CSSOMString;
  display: CSSOMString;
  readonly status: FontFaceLoadStatus;
  readonly loaded: Promise<FontFace>;
  load(): Promise<FontFace>;
}

interface FontFaceSet {
  readonly status: FontFaceSetStatus;
  readonly ready: Promise<FontFaceSet>;
  check(font: string, text?: string): boolean;
  load(font: string, text?: string): Promise<FontFace[]>
}

declare global {
  interface Document {
    fonts: FontFaceSet
  }
}