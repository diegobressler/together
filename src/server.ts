import express, { response } from "express";
import axios from "axios";


const app = express();
const token = 'b85e8ee4854850a0c0cdccb971434298513a155c';

app.get('/oi', async(req, res) => {
    try{
        const { data } = await axios('https://api.brasil.io/v1/dataset/socios-brasil/empresas/data/?cnpj=92343375000172',
        {
            headers:{
                Authorization: 'Token '+token
            }
        })
        return res.json(data["results"][0].cnpj)
        
    }catch(error){
        return res.send(error)
        
    }
})

    

app.listen(3000, () => {
    console.log(`Server Run`)
  })

  /* var options = {
    setHeaders: function (res, path, stat) {
      res.set('Authorization', token)
    }
  
  }
app.get('https://api.brasil.io/v1/dataset/socios-brasil/empresas/data/?cnpj=92343375000172', ( request, response) => {
    request.header('Authorization'): token;

    response.set('Authorization',token)
    return response.send(" Ola nwwl");
});
app.get("/test",( request, response) => {
    response.set('Authorization',token)
    return response.send(request.headers);
});
app.post("/test-post",( request, response) => {
    return response.send("tes");
});
*/