export interface LaunchInterface {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: any[];
  };
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: null;
      launch: null;
      media: null;
      recovery: null;
    };
    flickr: {
      small: any[];
      original: any[];
    };
    presskit: null;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  };
  static_fire_date_utc: Date;
  static_fire_date_unix: number;
  tbd: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  details: string;
  crew: any[];
  ships: any[];
  capsules: [];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  launch_library_id: null;
  failures: [
    {
      time: number;
      altitude: null;
      reason: string;
    }
  ];
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: string;
  upcoming: boolean;
  cores: [
    {
      core: string;
      flight: number;
      gridfins: boolean;
      legs: boolean;
      reused: boolean;
      landing_attempt: boolean;
      landing_success: null;
      landing_type: null;
      landpad: null;
    }
  ];
  id: string;
}
