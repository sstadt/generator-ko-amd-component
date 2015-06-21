/*jslint browser: true*/
/*globals define*/

/**
 * <%= name %>
 *
 * <%= desc %>
 */

define([
  'knockout',
  'text!./template.html'
], function (ko, html) {
  'use strict';

  /**
   * <%= name %>ViewModel
   */
  function <%= name %>ViewModel(params) {

    var self = this;

    self.message = ko.observable('Hello, I\'m your new knockout component!');

  } /* End of View Model */

  return {
    viewModel: <%= name %>ViewModel,
    template: html
  };
});

