module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send ('rota de atendimentos e vc esta realizando um get'))

    app.post('/atendimentos', (req, res) => { 

        console.log(req.body)    
        res.send('voce esta na rota de atendimentos e está realizando um post')
    })

}
