//teste
import express from "express";

const app = express();
const token = 'b85e8ee4854850a0c0cdccb971434298513a155c';

 
 var options = {
    setHeaders: function (res, path, stat) {
      res.set('Authorization', token)
    }
  
  }
  
app.get('https://api.brasil.io/v1/dataset/socios-brasil/empresas/data/?cnpj=92343375000172', ( request, response) => {
    response.set('Authorization',token)
    return response.send(" Ola nwwl");
});

app.post("/test-post",( request, response) => {
    return response.send(" Ola nwwl");
});