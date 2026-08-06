import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookies-accepted')) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handle = (accepted: boolean) => {
    localStorage.setItem('cookies-accepted', accepted ? 'true' : 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-4 right-4 z-50 mx-auto max-w-xl animate-[slide-up_0.4s_ease-out] glass-card rounded-2xl px-6 py-5 shadow-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-foreground">
          🍪 Wir verwenden Cookies, um Ihnen die beste Erfahrung zu bieten.{' '}
          <Link to="/datenschutz" className="text-primary font-medium hover:underline">
            Mehr erfahren
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" size="sm" onClick={() => handle(false)}>
            Ablehnen
          </Button>
          <Button size="sm" className="bg-gradient-blue text-primary-foreground shadow-md px-5" onClick={() => handle(true)}>
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
