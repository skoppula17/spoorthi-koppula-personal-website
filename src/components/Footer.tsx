import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            Made with <Heart className="w-4 h-4 text-red-400" /> by Spoorthi Koppula
          </p>
          <p className="text-xs text-primary-foreground/70 mt-2">
            © 2025 Spoorthi Koppula. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;