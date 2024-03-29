const mongoose = require('mongoose');
const connection = require('../helper/db');

const reportimage = new mongoose.Schema({
  isreport: Boolean,
  reportuser: String,
  reason: String,
  imageid: mongoose.Schema.Types.ObjectId,
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});
reportimage.virtual('posts', {
  ref: 'uploadimage',
  localField: 'imageid',
  foreignField: '_id',
  justOne: true,
});

const report = mongoose.model('Reportimage', reportimage);
module.exports = report;
