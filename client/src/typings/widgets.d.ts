declare namespace Weather {
  interface Forecast {
    astro?: any;
    cond?: any;
    date: string;
    hum: string;
    pcpn?: string;
    pop: string;
    pres: string;
    tmp: any;
    uv?: string;
    vis?: string;
    wind: {
      deg: string;
      dir: string;
      sc: string;
      spd: string;
    };
  }

  interface Basic {
    city: string;
    cnty: string;
    id: string;
    lat: string;
    lon: string;
    update: {
      loc: string;
      utc: string;
    };
  }

  interface Now {
    cond: {
      code: string;
      txt: string;
    };
    fl: string;
    hum: string;
    pcpn: string;
    pres: string;
    tmp: string;
    vis: string;
    wind: {
      deg: string;
      dir: string;
      sc: string;
      spd: string;
    };
  }
}
