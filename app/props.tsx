export interface props {
  img: string;
  text: string;
  amount: any;
  quality: any;
  className: string;
}

export interface dataObject {
  lang: string;
  title: string;
  description: string;
  buttons?: any; // Specify a more appropriate type if known
  labels?: any; // Specify a more appropriate type if known
  h1: {
    one: string;
    two: string;
    three: string;
  };
  radio: {
    card: {
      first: { amount: string; title: string };
      second: { amount: string; title: string };
      third: { amount: string; title: string };
    };
    device: {
      ios: string;
      android: string;
      other: string;
    };
  };
  section: {
    about: {
      title: string;
      description: string;
    };
    steps: {
      one: {
        title: string;
        description: string;
      };
      two: {
        title: string;
        description: string;
      };
      three: {
        title: string;
        description: string;
      };
    };
    howTo: {
      title: string;
      description: string;
      step: {
        one: {
          title: string;
          description: string;
        };
        two: {
          title: string;
          description: string;
        };
        three: {
          title: string;
          description: string;
        };
      };
    };
  };
  footer: {
    copyrights: {
      one: string;
      two: string;
    };
  };
  other: {
    nav: string;
    cta: {
      selectgift: string;
    };
    title: {
      agreement: string;
    };
  };
  errors: {
    input: { name: string; shortname: string; terms: string; device: string };
    email: {
      invalid: string;
      required: string;
    };
    gems: string;
    verification: string;
  };
  opengraph: {
    title: string;
    alt: string;
  };
  keywords: {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: string;
  };
}
