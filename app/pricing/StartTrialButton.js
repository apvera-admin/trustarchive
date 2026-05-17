'use client';

export default function StartTrialButton({ slug, className, children }) {
  const onClick = async (e) => {
    const button = e.currentTarget;
    const original = button.textContent;
    button.disabled = true;
    button.textContent = 'Loading…';
    try {
      const res = await fetch(
        'https://lwmbgkmzcgftnnngbyco.supabase.co/functions/v1/create-checkout-session',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tier: slug }),
        }
      );
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || 'Checkout failed');
      window.location.href = data.url;
    } catch (err) {
      alert('Could not start checkout: ' + err.message);
      button.disabled = false;
      button.textContent = original;
    }
  };

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
