import type { Context } from "elysia/context";
import type { InlineConfig } from "vite";

export type GetLoadContext<T> = (context: Context) => T | Promise<T>;

export interface PluginOptions<T> {
  /**
   * in `development` mode it starts `vite` and in `production` it just served like static.
   *
   * @default process.env.NODE_ENV || "development"
   */
  mode?: "development" | "production";
  /**
   * The base path for the Remix app.
   * This should match the `basename` in your `vite` config.
   *
   * @default "/"
   */
  basename?: string;
  /**
   * The directory where the Remix app is built.
   * This should match the `buildDirectory` directory in your `vite` config.
   *
   * @default "build"
   */
  buildDirectory?: string;
  /**
   * The Remix server output filename.
   * This should match the `serverBuildFile` filename in your `vite` config.
   *
   * @default "index.js"
   */
  serverBuildFile?: string;
  /**
   * Configure `vite` server in `development` mode
   */
  vite?: InlineConfig;

  /**
   * A function that returns the value to use as `context` in route `loader` and
   * `action` functions.
   *
   * You can use declaration merging for type it correctly https://www.typescriptlang.org/docs/handbook/declaration-merging.html
   */
  getLoadContext?: GetLoadContext<T>;
}
