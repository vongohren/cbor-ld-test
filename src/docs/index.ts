import credentialContext from './contexts/w3org-2018-credentials-v1.json';
import tracebilityContext from './contexts/w3cccg-tracebilitcyvocab-traceability-v1.json';
import cregContext from './contexts/creg-context-v1.json';
import bbsPlussSecurity from './contexts/bbs-pluss-security-v1.json';
import securityV1 from './contexts/security-v1.json';
import securityV2 from './contexts/security-v2.json';
import { documentLoaders } from 'jsonld';
import { resolve } from '@transmute/did-key.js';

export const documents = {
  'https://www.w3.org/2018/credentials/v1': credentialContext,
  'https://w3id.org/traceability/v1': tracebilityContext,
  'https://credreg.net/ctdlasn/schema/context/json': cregContext,
  'https://w3id.org/security/bbs/v1': bbsPlussSecurity,
  'https://w3id.org/security/v1': securityV1,
  'https://w3id.org/security/v2': securityV2,
};

export const docLoader = async (url: string) => {
  //Its worth considering caching contextes that we use alot, to speed up things
  //Ref: https://github.com/mattrglobal/jsonld-signatures-bbs/issues/115
  //If you want too see the url that is loaded uncomment this
  // console.log(url)
  const context = documents[url];
  if (context) {
    return {
      contextUrl: null, // this is for a context via a link header
      document: context, // this is the actual document that was loaded
      documentUrl: url, // this is the actual context URL after redirects
    };
  }

  if(url.includes('did:')) {
    const doc = await resolve(url, { accept: 'application/did+ld+json' });
    console.log(doc)
    return {
      document: doc.didDocument
    };
  }
  console.log(`Hitting document request for this url: ${url}`, { url }, 'WARNING');
  return documentLoaders.node()(url);
};
