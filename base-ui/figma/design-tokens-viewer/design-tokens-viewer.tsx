import React from 'react';
import styles from './design-tokens-viewer.module.scss';

export type DesignTokensViewerProps = {
  /*
   * JSON object of tokens
   */
  tokens: object;
  /*
   * styles to be added to boxes
   */
  additionalStyles?: object;
  /*
   * css key to be added to the styles property
   */
  cssKey?: string;
  /*
   * show or hide box used for background colors, borders etc
   */
  box?: boolean;
};

export function DesignTokensViewer({
  tokens,
  additionalStyles,
  cssKey = 'background-color',
  box = true
}: DesignTokensViewerProps) {
  return (
    <div className={styles.grid}>
      {Object.entries(tokens).map(([key, value]) => (
        <>
          {box ? (
            <div
              className={styles.box}
              style={{
                ...additionalStyles,
                [cssKey]: value
              }}
            />
          ) : (
            <div />
          )}

          <div>
            <span style={{ display: 'block', marginBottom: '4px' }}>{key}</span>
            <span>--{key.replace(/[A-Z]/g, '-$&').toLowerCase()}</span>
          </div>
          <div>
            <code>{value}</code>
          </div>
        </>
      ))}
    </div>
  );
}
