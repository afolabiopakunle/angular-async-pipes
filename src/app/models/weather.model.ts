export interface Pokedex {
  ip?:             string;
  type?:           string;
  continentCode?:  string;
  continentName?:  string;
  countryCode?:    string;
  countryName?:    string;
  isEu?:           string;
  geonameID?:      number;
  city?:           string;
  region?:         string;
  lat?:            number;
  lon?:            number;
  tzID?:           string;
  localtimeEpoch?: number;
  localtime?:      string;
}