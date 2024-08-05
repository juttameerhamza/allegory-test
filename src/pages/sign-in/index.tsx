import { SignInCard } from 'components';
import { AuthLayout } from 'layout/auth.layout';
import { useAppSelector } from 'store/hooks';
import { AuthStep } from './components/auth-step/auth-step.component';

const steps = [AuthStep, () => <p>OTP Step</p>];

export function SignIn() {
  const { step } = useAppSelector((state) => state.auth);
  const Component = steps[step - 1];

  return (
    <AuthLayout>
      <SignInCard>
        <Component />
      </SignInCard>
    </AuthLayout>
  );
}
