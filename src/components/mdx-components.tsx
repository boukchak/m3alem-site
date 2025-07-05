import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  // Ajoutez ici vos composants personnalisés si nécessaire
};

interface MdxProps {
  code: any; // Accepter le type Markdown de Contentlayer
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}

