import { pejs } from '@sphereon/pe-js';

// const VC = {"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/traceability/v1"],"issuer":"did:key:z6MkkgfrEB9gSvpJui6yLmqHhcuuLjto9QXKCSa4WtHai4KR","type":["VerifiableCredential"],"name":"Verified email","description":"This is a credential of email attribute that has been verified through sending an email to the owner","issuanceDate":"Tue Nov 09 2021","credentialSubject":{"id":"did:key:z6MksHao6YiBsXsQgf4vRkHzo5G1UVfh7m2vtJtqWF71hJ16","type":["Person"],"identifier":"zJGSJgkK96eTdyeo2MpKsgwKGHT2","email":"poppy@vongohren.me"},"proof":{"type":"Ed25519Signature2018","created":"2021-11-09T11:44:02Z","jws":"149,168,100,194,78,89,253,192,78,38,169,120,0,67,94,131,6,185,99,154,243,166,94,242,237,251,202,157,77,199,101,73,198,102,124,161,60,162,15,75,119,151,33,40,98,210,133,173,148,128,78,250,241,207,173,189,123,159,202,109,103,227,220,12","proofPurpose":"assertionMethod","verificationMethod":"did:key:z6MkkgfrEB9gSvpJui6yLmqHhcuuLjto9QXKCSa4WtHai4KR#z6MkkgfrEB9gSvpJui6yLmqHhcuuLjto9QXKCSa4WtHai4KR"}}
const VC = {"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/traceability/v1"],"id":"aosdksodkaodkaodkadoka","issuer":"did:key:z6MkkgfrEB9gSvpJui6yLmqHhcuuLjto9QXKCSa4WtHai4KR","type":["VerifiableCredential"],"name":"Verified email","description":"This is a credential of email attribute that has been verified through sending an email to the owner","issuanceDate":"2021-12-07T18:07:17Z","credentialSubject":{"type":"ContactPoint","id":"did:key:z6MkeaZK2DXafo8Rr4bBMCNwt5LXEBEvGyPdacuDRxxF8gCt","identifier":"K5IN6SrVV5ZxoAQhUNW1UF3ZTqd2","email":"johnjohn@vongohren.me"},"proof":{"type":"Ed25519Signature2018","created":"2021-12-07T17:07:17Z","verificationMethod":"did:key:z6MkkgfrEB9gSvpJui6yLmqHhcuuLjto9QXKCSa4WtHai4KR#z6MkkgfrEB9gSvpJui6yLmqHhcuuLjto9QXKCSa4WtHai4KR","proofPurpose":"assertionMethod","jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..SVHeq_XmVxqiMDAWH3M4hSfsfhn_CjnKi9JzPcGLL3uAg_h-u6kiyVdM11LJpCGLKM7EKkDijv4zrwnoy_Q6CQ"}}
const DiwalaContactPD = {
  "id": "1188",
  "input_descriptors": [
      {
          "id": "diwala_contact_verification",
          "name": "Diwala Contact Verification",
          "purpose": "We need your contact information to be able to match you to the real world",
          "schema": [
              {
                  "uri": "https://w3id.org/traceability/v1"
              }
          ],
          "types": [
              {
                  "path": [
                      "$.@context[1]"
                  ],
                  "filter": {
                      "type": "string",
                      "pattern": "https://w3id.org/traceability/v12222"
                  }
              },
              {
                  "path": [
                      "$.credentialSubject.type"
                  ],
                  "filter": {
                      "type": "string",
                      "pattern": "ContactPointzzzzzz"
                  }
              }
          ]
      }
  ]
}

const Main = async () => {
  // Definition from verifier request
  const presentationDefinition = DiwalaContactPD

  const holderDid = ["did:key:z6MkeaZK2DXafo8Rr4bBMCNwt5LXEBEvGyPdacuDRxxF8gCt"]
  // Example for loading credentials
  const credentials = [VC]

  // Find matching credentials
  const pe = new pejs(); 
  const srMatches = pe.selectFrom(presentationDefinition, credentials, holderDid, []);

  // An example that selects the first 'count' credentials from
  // the matches. in a real scenario, the user has to select which 
  // credentials to use. PE-JS did the first filtering, 
  // but there still could be multiple credentials satisfying a presentation definition
  console.log(srMatches)
  // const selectedCredentials = srMatches.map(
  //   ({ matches, count }) => matches.slice(0, count)
  // ).flat();

};

Main();
