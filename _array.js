/* global _ */
(function (global) {
  'use strict';
  var array_methods;

  if (!_) {
    console.warn('Missing underscore!');
    return;
  }


  function _Array () {}

  _Array.prototype = Object.create(Array.prototype);
  _Array.prototype.constructor = _Array;

  array_methods = ['each', 'map', 'reduce', 'reduceRight', 'find', 'filter',
    'where', 'findWhere', 'reject', 'every', 'some', 'contains', 'invoke', 'pluck',
    'max', 'min', 'sortBy', 'groupBy', 'countBy', 'shuffle',

    'first', 'initial', 'last', 'rest', 'compact', 'flatten', 'without', 'union',
    'intersection', 'difference', 'uniq', 'zip', 'object', 'lastIndexOf', 'sortedIndex'];

  /**
   * Returns a _Array from an array of values
   * @param  {Array} values
   * @return {_Array}
   */
  _Array.wrap = function (values) {
    var a = new _Array();
    a.push.apply(a, values);
    return a;
  }

  // puts array_methods on the _Array prototype
  _.each(array_methods, function (method_name) {
    _Array.prototype[method_name] = function () {
      var args = Array.apply(Array, arguments);
      args.unshift(this);
      var val = _[method_name].apply(_, args);
      return _Array.wrap(val);
    };
  });

  /**
   * Exposes the _Array object
   * don't call it with the `new` operator
   * @return {_Array}
   */
  global._Array = function () {
    return _Array.wrap(arguments);
  };

}(this));
