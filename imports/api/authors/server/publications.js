/* eslint-disable prefer-arrow-callback */

import { Authors } from '../authors.js';

Meteor.publish('allAuthors', function allAuthors() {
  // Meteor._sleepForMs(2000);
  return Authors.find();
});
