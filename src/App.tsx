import './styles.css';
import { EmurgoModule } from './lib/emurgo';
export const App = () => {
  EmurgoModule.CardanoWasm().then((cardano) => {
    console.log(cardano);
  });
  return <h1>React TypeScript Webpack 5 Starter Template</h1>;
};
