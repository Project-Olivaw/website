export interface LayoutProps {
  title: string;
  description: string;
  canonicalURL?: string;
  ogImage?: string;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  href?: string;
  external?: boolean;
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: IconName;
  iconRight?: IconName;
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  badgeText?: string;
  badgeColor?: 'blue' | 'red' | 'yellow' | 'gray';
  iconName?: IconName;
  accentColor?: 'blue' | 'red' | 'yellow';
}

export interface BadgeProps {
  text: string;
  color: 'blue' | 'red' | 'yellow' | 'gray';
}

export interface CodeBlockProps {
  code: string;
  // Use a broad union of common languages supported by Shiki/Astro's Code component
  language: 'rust' | 'toml' | 'bash' | 'json' | 'yaml' | 'typescript' | 'javascript' | 'css' | 'html' | 'text';
  filename?: string;
}

export interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export interface IconProps {
  name: IconName;
  size?: number;
  ariaHidden?: boolean;
  ariaLabel?: string;
  class?: string;
}

export type IconName =
  | 'github'
  | 'moon'
  | 'sun'
  | 'external-link'
  | 'arrow-right'
  | 'shield'
  | 'bolt'
  | 'cpu-chip'
  | 'code-bracket'
  | 'terminal'
  | 'copy'
  | 'check'
  | 'chart-bar'
  | 'cog-6-tooth'
  | 'users'
  | 'star'
  | 'cube'
  | 'wrench-screwdriver';

export interface FeaturePillar {
  iconName: IconName;
  title: string;
  description: string;
  accentColor: 'blue' | 'red' | 'yellow';
}

export interface ProjectCardData {
  title: string;
  description: string;
  tags: string[];
  githubHref: string;
  badgeText: string;
  badgeColor: 'blue' | 'red' | 'yellow' | 'gray';
  iconName: IconName;
  accentColor: 'blue' | 'red' | 'yellow';
}
