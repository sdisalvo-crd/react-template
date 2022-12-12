import './styles.css';
import { EmurgoModule } from './lib/emurgo';
import { generateMnemonicSeed } from './lib/account';

export const App = () => {
  EmurgoModule.CardanoWasm().then((cardano) => {
    console.log(cardano);
    console.log(generateMnemonicSeed(160));
  });
  return <h1>React TypeScript Webpack 5 Starter Template</h1>;
};
