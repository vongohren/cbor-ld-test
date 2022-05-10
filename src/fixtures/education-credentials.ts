export const eduCredentialDiwala = {
  "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://credreg.net/ctdlasn/schema/context/json"
  ],
  "type": [
      "VerifiableCredential"
  ],
  "issuer": "did:key:z6MkpYpkXs9u5ZzV3nij3AbdmPkwmiBQvxNeNFiRPvNz5ArP",
  "issuanceDate": "2022-05-02T11:03:53Z",
  "credentialSubject": {
      "id": "did:key:z6MkfwmZep5ZvkHfeXszxhxEuvkmGFRc8H9Nv9ZaQG4vhFzZ",
      "schema:hasCredential": {
          "type": "ceterms:MicroCredential",
          "ceterms:name": "Ogi ogi",
          "ceterms:description": "This is a proof that things work!",
          "ceterms:relatedAction": {
              "type": "ceterms:CredentialingAction",
              "ceterms:startDate": "2022-05-02T09:03:48.964Z",
              "ceterms:endDate": "2022-05-04T09:03:48.964Z"
          },
          "ceterms:subject": [
              {
                  "type": "ceterms:CredentialAlignmentObject",
                  "ceterms:targetNodeName": {
                      "en-US": "Making sure you know Javascript"
                  }
              }
          ]
      }
  },
  "proof": {
      "type": "Ed25519Signature2018",
      "created": "2022-05-02T09:03:53Z",
      "verificationMethod": "did:key:z6MkpYpkXs9u5ZzV3nij3AbdmPkwmiBQvxNeNFiRPvNz5ArP#z6MkpYpkXs9u5ZzV3nij3AbdmPkwmiBQvxNeNFiRPvNz5ArP",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..VfMimieNyIcvZTaXaEBxpfFNGLxc7UNZ9tEZ-reLI9wNtr701p5Z6CHBKVdpEZqeu62LdsL2Z3rOi--B7iMDAg"
  }
}
