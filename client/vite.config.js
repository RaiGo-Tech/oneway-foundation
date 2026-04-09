import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'svg-as-component',
      transform(code, id) {
        if (id.endsWith('.svg') && !id.includes('?')) {
          // Remove xml declaration
          let svgCode = code.replace(/<\?xml[^>]*\?>/, '');
          
          // Convert SVG attributes to JSX
          svgCode = svgCode
            .replace(/class=/g, 'className=')
            .replace(/stroke-width=/g, 'strokeWidth=')
            .replace(/stroke-linecap=/g, 'strokeLinecap=')
            .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
            .replace(/fill-rule=/g, 'fillRule=')
            .replace(/clip-rule=/g, 'clipRule=')
            .replace(/clip-path=/g, 'clipPath=')
            .replace(/xmlns:xlink=/g, 'xmlnsXlink=');
          
          // Add {...props} to the svg element
          svgCode = svgCode.replace(/<svg/, '<svg {...props}');
          
          return {
            code: `
              import React from 'react';
              export default function IconComponent(props) {
                return ${svgCode};
              }
            `,
            map: null,
          };
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/services": path.resolve(__dirname, "./src/services"),
    },
  },
});
