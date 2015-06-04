import renderApp from './renderApp';
import React from 'react';


var bootstrap = () => {
  // Shortcuts for development
  window.React = React;
  window.Perf = React.addons.Perf;
  renderApp();
};


document.addEventListener('DOMContentLoaded', bootstrap, false);
