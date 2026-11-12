import { redirect } from 'next/navigation';
import { isUuid } from '../../../lib/waitlist';

// Old address for the demo page, from before there was one demo per audience.
// Early demo emails link here; every request before the split was a firm request.
export default function OldDemoPage({ searchParams }) {
  const id = isUuid(searchParams?.id) ? searchParams.id : null;
  redirect(id ? `/demo/firm?id=${id}` : '/demo/firm');
}
