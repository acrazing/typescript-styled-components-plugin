/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 17:52:46
 */

import fs from 'fs';
import murmurhash from 'murmurhash';
import path from 'path';
import { itos } from './numberFormat';
import { StateOptions } from './types';

export class State {
  readonly context: string;
  readonly packageName: string;
  readonly setComponentId: boolean;
  readonly setDisplayName: boolean;
  readonly minify: boolean;
  readonly cssTags: string[];
  readonly customCssTags: string[];
  readonly cssTagsRecord: Set<string>;
  readonly files: Record<string, number>;
  filename: string;
  fileHash: string;

  constructor({
    setDisplayName = true,
    setComponentId = true,
    minify = true,
    packageName,
    context,
    customCssTags = [],
    cssTags = ['keyframes', 'css', 'injectGlobal', 'createGlobalStyle'],
  }: Partial<StateOptions>) {
    const cwd = process.cwd();
    this.setComponentId = setComponentId;
    this.setDisplayName = setDisplayName;
    this.minify = minify;
    this.customCssTags = customCssTags;
    this.cssTags = cssTags;
    this.cssTagsRecord = new Set(cssTags.concat(customCssTags));
    this.context = context ? path.resolve(context) : cwd;
    this.fileHash = '';
    this.filename = '';
    if (!packageName) {
      const contextFile = path.join(this.context, 'package.json');
      const cwdFile = path.join(cwd, 'package.json');
      const name = fs.existsSync(contextFile)
        ? require(contextFile).name
        : fs.existsSync(cwdFile)
        ? require(cwdFile).name
        : void 0;
      this.packageName = name || path.basename(this.context);
    } else {
      this.packageName = packageName;
    }
    this.files = {};
  }

  setFile(filename: string) {
    this.filename = filename;
    this.fileHash = '';
  }

  getId() {
    this.fileHash =
      this.fileHash ||
      itos(
        murmurhash(
          path.join(
            this.packageName,
            path.relative(this.context, this.filename),
          ),
        ),
      );
    if (!this.files[this.fileHash]) {
      this.files[this.fileHash] = 1;
      return this.fileHash;
    } else {
      return this.fileHash + '-' + this.files[this.fileHash]++;
    }
  }
}
