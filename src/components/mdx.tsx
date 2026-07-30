import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { LineNote } from '@/components/line-note';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    LineNote,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}