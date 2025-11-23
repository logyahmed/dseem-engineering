import SignupModal from '../SignupModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function SignupModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Signup Modal</Button>
      <SignupModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
