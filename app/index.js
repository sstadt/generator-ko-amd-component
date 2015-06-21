/**
 * AMD KnockoutJS Component Generator
 */

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    var prompts = [{
      name: 'name',
      message: 'Component Name: ',
    }, {
      name: 'desc',
      message: 'Description: ',
      default: 'An awesome KnockoutJS component.'
    }, {
      name: 'dest',
      message: 'Destination: ',
      store: true,
      default: './',
    }];

    this.prompt(prompts, function (answers) {
      this.name = answers.name;
      this.dest = answers.dest;
      done();
    }.bind(this));
  },

  writing: function () {
    var folderName = this.dest + '/' + this.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '/',
      templateVars = {
        name: this.name
      };

    this.fs.copyTpl('./templates/_component.js', folderName + 'component.js', templateVars);
    this.fs.copyTpl('./templates/_template.html', folderName + 'template.html', templateVars);
  }
});