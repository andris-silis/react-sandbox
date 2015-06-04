import React from 'react';

import ApplicationLayoutView from './ApplicationLayoutView.jsx';
import TableView from '../table/TableView.jsx';


export default function (state) {
  React.render(
    <ApplicationLayoutView>
      <TableView />
    </ApplicationLayoutView>,
    document.querySelector('.content-wrapper')
  );
};
