import * as vc from '@digitalbazaar/vc';
import { eduCredentialDiwala } from './fixtures/education-credentials';
import { Ed25519VerificationKey2018 } from '@digitalbazaar/ed25519-verification-key-2018';
import { holder } from './fixtures/keys';
import {Ed25519Signature2018} from '@digitalbazaar/ed25519-signature-2018'
import { docLoader } from './docs';
import {encode, documentLoader} from '@digitalbazaar/cborld';

const RunFunctions = async () => {
  await createVPAndVerify()
  await createCborLDQRCode();
}

const createVPAndVerify = async () => {
  const vcs = [eduCredentialDiwala]
  const presentation = vc.createPresentation({
    verifiableCredential: vcs
  });

  const keyPair = await Ed25519VerificationKey2018.from(holder);

  const issuerSuite = new Ed25519Signature2018({key: keyPair});

  const challenge = 'adasdsadae211';
  
  const documentLoaderSelf = docLoader

  const vp = await vc.signPresentation({
    presentation, suite: issuerSuite, challenge, documentLoader: documentLoaderSelf
  });

  console.log(documentLoader)

  console.log(vp)

  const verifierSuite = new Ed25519Signature2018();

  const result = await vc.verify({presentation:vp, challenge, suite: [issuerSuite,verifierSuite], documentLoader});

  // console.log(result)
  console.log(JSON.stringify(result))
};

const createCborLDQRCode = async ()=> {
  const vcs = [eduCredentialDiwala]
  const presentation = vc.createPresentation({
    verifiableCredential: vcs
  });

  const keyPair = await Ed25519VerificationKey2018.from(holder);

  const issuerSuite = new Ed25519Signature2018({key: keyPair});

  const challenge = 'adasdsadae211';
  
  const documentLoaderSelf = docLoader

  const vp = await vc.signPresentation({
    presentation, suite: issuerSuite, challenge, documentLoader: documentLoaderSelf
  });

  const cborldBytes = await encode({jsonldDocument: vp, documentLoader:documentLoaderSelf});
  console.log(cborldBytes)
}

RunFunctions();
