/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 19:46:24
 */

export interface StateOptions {
  setComponentId: boolean;
  setDisplayName: boolean;
  minify: boolean;
  customCssTags: string[];
  cssTags: string[];
  packageName: string;
  context: string;
}
