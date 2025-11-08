import globals from "globals";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react/prop-types": "off", // Desactiva la verificación de tipos con PropTypes.Esto se usa cuando el proyecto utiliza TypeScript (ya que los tipos ya están definidos allí) o cuando no se necesita validar props manualmente.

      "react/react-in-jsx-scope": "off", // Desactiva la regla que exige importar React en cada archivo con JSX. En versiones modernas de React (17+), ya no es necesario importar React explícitamente, porque el compilador JSX lo maneja automáticamente.
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  eslintConfigPrettier,
]);
