const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const axios = require('axios');
const AJV = require("ajv");
const ajv = new AJV();
// Initialisation de l'application Express
const app = express();

// Middleware CORS pour permettre les requêtes provenant d'autres origines
app.use(cors());


// Route pour la racine
app.get("/", (req, res) => {
    res.send("Bienvenue sur la page d'accueil !");
});


// Route pour ouvrir Visual Studio Code avec des privilèges d'administrateur
app.get('/open-ip', (req, res) => {
    // Commande pour ouvrir VS Code avec runas
    const command = '"C:\\script\\ouvririp.bat"'; // Assurez-vous que ce chemin est correct
    // Exécution de la commande
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error("Erreur :", err);
            return res.status(500).send("Erreur lors de l'ouverture de VS Code.");
        }
        res.send("VS Code ouvert !");
    });
});
app.get('/open-vscode', (req, res) => {
    // Commande pour ouvrir VS Code avec runas
    const command = '"C:\\script\\ouvrirVSCode.bat"'; // Assurez-vous que ce chemin est correct
    // Exécution de la commande
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error("Erreur :", err);
            return res.status(500).send("Erreur lors de l'ouverture de VS Code.");
        }
        res.send("VS Code ouvert !");
    });
});




app.get('/open-note', (req, res) => {
    // Commande pour ouvrir VS Code avec runas
    const command = '"C:\\script\\ouvreNOTE.bat"'; // Assurez-vous que ce chemin est correct
    // Exécution de la commande
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error("Erreur :", err);
            return res.status(500).send("Erreur lors de l'ouverture de VS Code.");
        }
        res.send("VS Code ouvert !");
    });
});
app.get('/open-ia', (req, res) => {
    // Commande pour ouvrir VS Code avec runas
    const command = '"C:\\script\\ouvrirJARVIS.bat"'; // Assurez-vous que ce chemin est correct
    // Exécution de la commande
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error("Erreur :", err);
            return res.status(500).send("Erreur lors de l'ouverture de VS Code.");
        }
        res.send("VS Code ouvert !");
    });
});
// Rout
// Route pour ouvrir Visual Studio Code avec des privilèges d'administrateur
app.get('/open-xamp', (req, res) => {
    // Commande pour ouvrir VS Code avec runas
    const command = '"C:\\script\\ouvrirXAMP.bat"'; // Assurez-vous que ce chemin est correct
    // Exécution de la commande
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error("Erreur :", err);
            return res.status(500).send("Erreur lors de l'ouverture de VS Code.");
        }
        res.send("VS Code ouvert !");
    });
});
app.get('/open-cod', (req, res) => {
    // Commande pour ouvrir VS Code avec runas
    const command = '"C:\\script\\ouvrirCOD.bat"'; // Assurez-vous que ce chemin est correct
    // Exécution de la commande
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error("Erreur :", err);
            return res.status(500).send("Erreur lors de l'ouverture de VS Code.");
        }
        res.send("VS Code ouvert !");
    });
});
app.get('/open-boulot', (req, res) => {
    // Commande pour ouvrir VS Code avec runas
    const command = '"C:\\script\\ouvrirPKGY.bat"'; // Assurez-vous que ce chemin est correct
    // Exécution de la commande
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error("Erreur :", err);
            return res.status(500).send("Erreur lors de l'ouverture de VS Code.");
        }
        res.send("VS Code ouvert !");
    });
});

app.get('/open-mongo', (req, res) => {
    // Commande pour ouvrir VS Code avec runas
    const command = '"C:\\script\\ouvreMONGO.bat"'; // Assurez-vous que ce chemin est correct
    // Exécution de la commande
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error("Erreur :", err);
            return res.status(500).send("Erreur lors de l'ouverture de VS Code.");
        }
        res.send("VS Code ouvert !");
    });
});
app.get('/open-dock', (req, res) => {
    // Commande pour ouvrir VS Code avec runas
    const command = '"C:\\script\\ouvreCALLOF.BAT"'; // Assurez-vous que ce chemin est correct
    // Exécution de la commande
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error("Erreur :", err);
            return res.status(500).send("Erreur lors de l'ouverture de VS Code.");
        }
        res.send("VS Code ouvert !");
    });
});
app.get('/open-bye', (req, res) => {
    // Commande pour ouvrir VS Code avec runas
    const command = '"C:\\script\\eteindre.bat"'; // Assurez-vous que ce chemin est correct
    // Exécution de la commande
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error("Erreur :", err);
            return res.status(500).send("Erreur lors de l'ouverture de VS Code.");
        }
        res.send("VS Code ouvert !");
    });
});

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
    console.log("🚀 Serveur démarré sur http://localhost:3000");
});
