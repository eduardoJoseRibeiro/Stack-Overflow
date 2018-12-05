const meuJSON = {
  "_id": {
    "$oid": "5b0f4a926724c71d945299f9"
  },
  "_class": "notificador.domain.entity.mongodb.WebhookNotification",
  "externalId": "EVE-XXXXXXXXXXXX",
  "resourceId": "TRA-XXXXXXXXXXXX",
  "accountId": "MPA-XXXXXXXXXXXX",
  "channelId": "APP-XXXXXXXXXXXX",
  "event": "TRANSFER.FAILED",
  "url": "{{url}}",
  "token": "{{token}}",
  "resource": {
    "createdAt": "2018-05-29T15:16:03.000-03",
    "amount": 0,
    "entries": [],
    "ownId": "00",
    "_links": {
      "self": {
        "href": "https://api.moip.com.br/v2/transfers/TRA-XXXXXXXXXXXX"
      }
    },
    "fee": 0,
    "cancellationDetails": {
      "cancelledBy": "BANK",
      "description": "CPF/CNPJ nao pertence ao titular da conta",
      "code": 5
    },
    "id": "TRA-XXXXXXXXXXXX",
    "transferInstrument": {
      "method": "BANK_ACCOUNT",
      "bankAccount": {
        "id": "BKA-XXXXXXXXXXXX",
        "agencyNumber": "0000",
        "holder": {
          "taxDocument": {
            "number": "{{NUMBER}}",
            "type": "CPF"
          },
          "fullname": "{{NAME}}"
        },
        "accountNumber": "000000",
        "accountCheckNumber": "0",
        "bankName": "XX",
        "type": "CHECKING",
        "bankNumber": "000"
      }
    },
    "events": [
      {
        "createdAt": "2018-05-29T15:16:03.000-03",
        "description": "Requested",
        "type": "TRANSFER.REQUESTED"
      },
      {
        "createdAt": "2018-05-30T00:00:00.000-03",
        "description": "Failed",
        "type": "TRANSFER.FAILED"
      }
    ],
    "updatedAt": "2018-05-30T00:00:00.000-03",
    "status": "FAILED"
  },
  "status": "SENT",
  "response": {
    "headers": {},
    "status": 200
  },
  "createdAt": {
    "$date": "2018-05-31T01:06:26.909Z"
  },
  "updatedAt": {
    "$date": "2018-05-31T01:06:27.231Z"
  },
  "webhookToFire": {
    "$ref": "webhook_to_fire",
    "$id": {
      "$oid": "5b0f4a926724c71d945299f8"
    }
  }
}

const purificaJSON = elemento => {
  const PRIMEIRO_CARACTER = elemento[0]

  if (PRIMEIRO_CARACTER === '$') return elemento.slice(1, elemento.length)
  
  return elemento
}

let KEYS = Object.keys(meuJSON)
let VALUES = Object.values(meuJSON)

let normalObjetc = (keys, values) => {
  let novoObjeto = {}

  keys.forEach((key, index) => {
    if (typeof values[index] === 'object') {
      let novoOjetoInterno = {}
      let valueKeyArray = Object.keys(values[index])
      let valueValueArray = Object.values(values[index])

      valueKeyArray = purificaJSON(valueKeyArray)

      novoOjetoInterno[valueKeyArray] = valueValueArray

      novoObjeto[purificaJSON(key)] = novoOjetoInterno

    } else novoObjeto[purificaJSON(key)] = values[index]
  })

  return novoObjeto
}

console.log(normalObjetc(KEYS, VALUES))

VALUES = VALUES.map(element => {

  if (typeof element === 'object') {
    let keyArray = Object.keys(element)
    let valueArray = Object.keys(element)

    keyArray = purificaJSON(keyArray)
    
    let novoObjeto = {}

    novoObjeto[keyArray] = valueArray
    return novoObjeto
  }
  return element
});

KEYS = KEYS.map(key => {
  return purificaJSON(key)
})

VALUES = Object.values(VALUES)

let novoJSON = KEYS.map((key, index) => {
  let novoObjeto = {}
  novoObjeto[key] = VALUES[index]

  return novoObjeto
})

console.log(meuJSON)
console.log(novoJSON)
