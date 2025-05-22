// https://github.com/facebook/relay/commit/7aceaa93a29ce1d5feff78261df70aafc3c93412#diff-02242dfb208a0cf38ba81080ad851b90ea1a1200c8babe81a010347f58c91915L33
// Model: .227

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

'use strict';

const {createHash} = require('crypto');

let projectToBuckets: ?Map<string, $ReadOnlyArray<boolean>> = null;

/**
 * This module helps gradually rolling out changes to the code generation by
 * gradually enabling more buckets representing randomly distributed artifacts.
 */
function set(newProjectToBuckets: Map<string, $ReadOnlyArray<boolean>>) {
  projectToBuckets = newProjectToBuckets;
}

function check(project: string, key: string): boolean {
  if (projectToBuckets == null) {
    return true;
  }
  const buckets = projectToBuckets.get(project);
  if (buckets == null || buckets.length === 0) {
    return true;
  }
  const hash = createHash('md5')
    .update(key)
    .digest()
    .readUInt16BE(0);
  return buckets[hash % buckets.length];
}

module.exports = {
  set,
  check,
};
