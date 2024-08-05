import { Toaster } from 'components';
import { SignIn } from 'pages/sign-in';

function App() {
  return (
    <main className='h-full'>
      <SignIn />

      <Toaster />
    </main>
  );
}

export default App;
