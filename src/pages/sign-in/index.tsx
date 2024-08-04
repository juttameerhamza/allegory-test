import { SignInCard } from 'components';
import { AuthLayout } from 'layout/auth.layout';
import { AuthStep } from './components/auth-step/auth-step.component';

const steps = [AuthStep];

export function SignIn() {
  const Component = steps[0];

  return (
    <AuthLayout>
      <SignInCard>
        <Component />
      </SignInCard>
    </AuthLayout>
  );
}
