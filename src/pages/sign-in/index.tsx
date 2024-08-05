import { SignInCard } from 'components';
import { AuthLayout } from 'layout/auth.layout';
import { useAppSelector } from 'store/hooks';
import { AuthStep } from './components/auth-step/auth-step.component';
import { FinishStep } from './components/finish/finish.component';
import { OTPStep } from './components/otp-step/otp-step.component';

const steps = [AuthStep, OTPStep, FinishStep];

export function SignIn() {
  const { step } = useAppSelector((state) => state.auth);
  const Component = steps[step - 1];

  return (
    <AuthLayout>
      <SignInCard title={step - 1 === steps.length ? 'Sign In' : 'Welcome!'}>
        <Component />
      </SignInCard>
    </AuthLayout>
  );
}
