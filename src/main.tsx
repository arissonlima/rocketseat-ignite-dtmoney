import React from 'react';
import ReactDOM from 'react-dom/client';''
import App from './App';

import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Caneca Personalizada JS",
          type: "withdraw",
          category: "Personalizados",
          value: 50,
          createdAt: new Date("2022-02-12 09:00:00")
        },
        {
          id: 2,
          title: "Venda da Echo Dot Alexa",
          type: "deposit",
          category: "Eletrônicos",
          value: 450,
          createdAt: new Date("2022-04-18 19:50:00")
        }
      ]
    });
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
