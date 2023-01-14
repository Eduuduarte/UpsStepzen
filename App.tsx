import { TailwindProvider } from 'tailwind-rn';
import CustomerScreen from './screen/CustomerScreen';
import utilities from './tailwind.json';

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <CustomerScreen />
    </TailwindProvider>
  );
}
