import React from 'react';
import { Button, Typography } from 'antd';

const { Title } = Typography;

export const App = () => (
  <html>
    <head>
      <link rel="stylesheet" href="./reset.css" />
    </head>
    <body>
      <Title>Hello world!</Title>
      <Button type="primary">Click me!</Button>
      <script src="./antd.min.js"></script>
    </body>
  </html>
);
