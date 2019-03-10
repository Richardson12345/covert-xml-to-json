const axios = require('axios');
const fs = require('fs');
const parser = require('xml2json');

var xml = '<?xml version="1.0" encoding="UTF-8" ?><business><company>Code Blog</company><owner>Nic Raboy</owner><employee><firstname>Nic</firstname><lastname>Raboy</lastname></employee><employee><firstname>Maria</firstname><lastname>Campos</lastname></employee></business>';

class Coverter {
    static convert (req, res) {
        console.log('check the woof data', req.body)
        axios
        .get("https://www.redhat.com/security/data/oval/com.redhat.rhsa-all.xml")
        .then((xmlData) => {
            let fullData = parser.toJson(xmlData.toString().slice(1, xmlData.length - 2))
            fs.writeFile('redhat.json', fullData, function (err) {
                console.log(fullData)
                if (err) {
                    console.log('check the error', err)
                    res
                    .status(404)
                    .send({
                        err: err
                    })
                } else {
                    console.log('file has been saved boi')
                    res.send({
                        "hello": "world"
                    })
                }
            })
            // parseString(xml, function (err, result) {
            //     // console.dir(JSON.stringify(result));
            // });
            // xml2js.parseString(result, (err, xmlString) => {
            //     if (err) {
            //         console.log('error occured on parsing xml', err)
            //     } else {
            //     }
            // })
        })
        .catch((err) => {
            console.log('cached an error', err)
            res
            .status(500)
            .send({
                err
            })
        })
    }
}

module.exports = Coverter;