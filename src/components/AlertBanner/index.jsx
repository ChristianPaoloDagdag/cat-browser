import React from 'react';

import Alert from 'react-bootstrap/Alert';

export default function AlertBanner() {
  return (
    <Alert variant="danger">
      Apologies but we could not load new cats for you at this time! Miau! 😿
    </Alert>
  );
}
