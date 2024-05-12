const fs = require('fs');

const frontFile = (req, res) => {

    res.sendFile(__dirname + '/index.html');
}


const getCanciones = (req, res) => {

    const canciones = JSON.parse(fs.readFileSync('canciones.json', 'utf8'));
    res.json(canciones);
}

const createCancion = (req, res) => {

    const {titulo, artista, tono} = req.body;

    const canciones = JSON.parse(fs.readFileSync('canciones.json', 'utf8'));

    const newCanciones = {
        id: canciones.length + 1,
        titulo,
        artista,
        tono
    }

    canciones.push(newCanciones)


    fs.writeFileSync('canciones.json', JSON.stringify(canciones));

    res.json(newCanciones);
}

const updateCancion = (req, res) => {

    const { id } = req.params;
    //datos enviados, PAYLOAD
    const bodySong = req.body;

    const canciones = JSON.parse(fs.readFileSync('canciones.json', 'utf8'));

    const updateCanciones = canciones.map(cancion => cancion.id == id ? { ...cancion, titulo: bodySong.titulo, artista: bodySong.artista, tono: bodySong.tono } : cancion);

    fs.writeFileSync('canciones.json', JSON.stringify(updateCanciones));

    res.status(200).send('Canción modificada');
}

const deleteCancion = (req, res) => {
    const { id } = req.params;

    const canciones = JSON.parse(fs.readFileSync('canciones.json', 'utf8'));

    const filteredCanciones = canciones.filter(cancion => cancion.id != id);


    fs.writeFileSync('canciones.json', JSON.stringify(filteredCanciones));

    res.status(200).send('Eliminado');
}


module.exports = {
    frontFile,
    updateCancion,
    createCancion,
    deleteCancion,
    getCanciones
}