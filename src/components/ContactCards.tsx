import { useState } from 'react';
import { Check, Copy, Mail, Phone } from 'lucide-react';

function CopyCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: 'mail' | 'phone';
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="glass glass-card interactive-glass contact-card">
      <h2>
        {icon === 'mail' ? (
          <Mail className="inline mr-2 size-4" />
        ) : (
          <Phone className="inline mr-2 size-4" />
        )}
        {label}
      </h2>
      <p className="contact-value">{value}</p>
      <button
        type="button"
        onClick={handleCopy}
        className="btn btn-outline btn-sm"
      >
        {copied ? <Check className="size-4 inline mr-1" /> : <Copy className="size-4 inline mr-1" />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

export default function ContactCards({
  email,
  phone,
}: {
  email: string;
  phone: string;
}) {
  return (
    <div className="contact-grid">
      <CopyCard label="Email" value={email} icon="mail" />
      <CopyCard label="Phone" value={phone} icon="phone" />
    </div>
  );
}
