'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

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
      done();
    }.bind(this));
  },

  writing: {
    projectfiles: function () {
      var destination = (this.props.dest.charAt(this.props.dest.length - 1) === '/') ? this.props.dest : this.props.dest + '/',
        folderName = destination + this.props.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '/',
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
