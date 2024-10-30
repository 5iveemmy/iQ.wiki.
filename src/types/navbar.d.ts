export {};

declare global {
  interface MenuItems {
    title: string;
    icon: React.JSX.Element;
    href: string;
  }

  interface Languages {
    language: string;
    abbr: string;
    flag: string;
  }

  interface MenuLinks {
    href: string;
    title: string;
  }

  interface Wikis {
    title: string;
    desc: string;
    img: string;
  }
}
