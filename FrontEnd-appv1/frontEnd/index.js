//we're coding a server web from scratch , that's how node JS 

const express = require('express')

const path = require('path')

const PORT=process.env.PORT || 90;   //def port & host using les var d'environnement pour les def dynamiquement au lieu de statique
const HOST = process.env.HOST;

const app = express()   // appeler le constructeur pour demarrer l'app express

app.use('/',express.static(path.join(__dirname,'angular','filma-app','browser'))); //dans la racine de l'app ('/') , express : use nos fichiers static (css,..) ; __dirname <->chemin front end we're created this file(it resolves problems btw environment linux / & windows\) puis on le concatene (join) avec angular dossier

app.get('',(req,res)=> {   //coder une app REST : here dans la racine de l'app ('') <->GetMapping() , dans cette URL , execute as a result sendFile() : envoyer le fichier index.html dans angular
    res.sendFile(path.join(__dirname,'angular','filma-app','browser','index.html'));  //et c'est normalement la premiere chose que fait un serveur request -> renvoie index.html
})

app.listen(PORT,()=> {                 //demarrer serveur listening on port 
    console.log(`server running at http:localhost:${PORT}`);
})

//node-dev permet de redemarrer l'app automatiquement a chaque modification