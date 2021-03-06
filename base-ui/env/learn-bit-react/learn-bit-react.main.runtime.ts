import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { LearnBitReactAspect } from './learn-bit-react.aspect';
import { UseTailwindTransformer } from '@bit-foundations/styling.tailwind.webpack-transformer';
// import { tailwindConfigPath } from '@learn-bit-react/base-ui.env.learn-bit-react.tailwind';

/**
 * Uncomment to include config files for overrides of Typescript or Webpack
 */
// const tsconfig = require('./typescript/tsconfig');
// const webpackConfig = require('./webpack/webpack.config');

export class LearnBitReactMain {
  static slots = [];
  static dependencies = [ReactAspect, EnvsAspect];
  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    /**
     * Tailwind config
     */
    const {
      previewConfigTransformer: twPreviewTransformer,
      devServerConfigTransformer: twDevServerTransformer
      // } = UseTailwindTransformer(tailwindConfigPath); // <-- this is for shareable tailwind config
    } = UseTailwindTransformer(
      require.resolve('./tailwind/tailwind.config.js')
    ); // <-- this is for locally-defined tw config

    const learnBitReactEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      // react.overrideTsConfig(tsconfig),
      // react.overrideDevServerConfig(webpackConfig),
      react.overrideJestConfig(require.resolve('./jest/jest.config')),

      react.useWebpack({
        previewConfig: [twPreviewTransformer],
        devServerConfig: [twDevServerTransformer]
      }),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      react.useEslint({
        transformers: [
          (config) => {
            config.setRule('no-console', ['error']);
            return config;
          }
        ]
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      react.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 2);
            return config;
          }
        ]
      }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        devDependencies: {
          // '@types/react': '17.0.3'
        }
      })
    ]);

    envs.registerEnv(learnBitReactEnv);

    return new LearnBitReactMain();
  }
}

LearnBitReactAspect.addRuntime(LearnBitReactMain);
