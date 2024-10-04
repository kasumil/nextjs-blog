export type LinkType = {
  children: React.ReactNode;
  href: string;
  Tag?: keyof JSX.IntrinsicElements; // Optional, to support dynamic HTML tags
  logo?: boolean;
  textColor?: string;
  props?: React.HTMLAttributes<HTMLElement>; // Props for HTML attributes
};

export type PropsType = {
  props: React.HTMLAttributes<HTMLElement>;
};

export interface PostsDetailProps {
  params: {
    id: number; // Ensure the id is the correct type (string if it's from URL params)
  };
}
