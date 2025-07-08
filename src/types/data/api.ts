interface WeatherData {
  location: {
    name: string;
    country: string;
    region: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
  };
  error?: {
    code: number;
    message: string;
  };
}

export type { WeatherData };
