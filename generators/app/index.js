'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the lovely ' + chalk.red('KoAmdComponent') + ' generator!'));

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
      default: '',
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    projectfiles: function () {
      var folderName = this.props.dest + this.props.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '/',
        context = {
          name: this.props.name,
          desc: this.props.desc
        };

      this.fs.copyTpl(
       this.templatePath('_component.js'),
       this.destinationPath(folderName + 'component.js'),
       context
      );

      this.fs.copyTpl(
        this.templatePath('_template.html'),
        this.destinationPath(folderName + 'template.html'),
        context
      );
    }
  }
});
