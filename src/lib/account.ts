import { generateMnemonic, mnemonicToEntropy, validateMnemonic } from 'bip39';

// For a 15 word seedphrase use size 160.
// For a 24 word seedphase use size 256.
export const generateMnemonicSeed = (size: number) => {
  return generateMnemonic(size);
};

export const validateSeedPhrase = (seedPhrase: string) => {
    return validateMnemonic(seedPhrase);
}
