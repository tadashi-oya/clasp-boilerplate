# package.json

`-g` を使わずにインストールするので、claspコマンドは `npx clasp login` などとして実行する。

```
npm install @google/clasp
npm install -D vite typescript rollup-plugin-google-apps-script @types/node @rollup/plugin-typescript @types/google-apps-script
```

# tsconfig.json

```
{
  "compilerOptions": {
    "lib": ["esnext"],               // 新しめの書き方を許容する
    "esModuleInterop": true,         // JSONファイルをimportする＆vite.config.tsでpath が使えるようにする
    "resolveJsonModule": true,       // JSONファイルをimportする
  }
}
```

# vite.config.ts

https://github.com/mato533/rollup-plugin-gas の `README.md` をそのまま使っている。

`rollupPluginGas` を指定している以外に特記事項なし。

```
import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import rollupPluginGas from "rollup-plugin-google-apps-script";
import path from "path";

export default defineConfig({
  plugins: [typescript(), rollupPluginGas()],
  build: {
    rollupOptions: {
      input: "./src/main.ts",
      output: {
        dir: "./dist",
        entryFileNames: "[name].js",
      },
    },
    minify: false, // This option is requred.
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```
