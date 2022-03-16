import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { MemoryRouter } from 'react-router';
import { LearnBitReactAspect } from './learn-bit-react.aspect';
import { BaseTheme } from '@learn-bit-react/base-ui.themes.base-theme';

// import '@learn-bit-react/base-ui.configs.tailwind-config/styles.css'; // <-- this is for shareable tw styles from a component
import './tailwind/styles.css'; // <-- this is for locally defined tailwind styles

export class MyReactPreview {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const myReactPreview = new MyReactPreview();
    // register a new provider to wrap all compositions in our custom react environment.
    react.registerProvider([BaseTheme, MemoryRouter]);

    return myReactPreview;
  }
}

LearnBitReactAspect.addRuntime(MyReactPreview);
