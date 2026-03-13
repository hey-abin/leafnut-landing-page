import { Leaf } from "lucide-react";

const AnnouncementBar = () => (
  <div className="bg-primary text-primary-foreground py-2 text-center">
    <p className="text-xs tracking-[0.2em] uppercase font-body flex items-center justify-center gap-2">
      <Leaf className="w-3 h-3" />
      Free shipping on orders over $50
      <Leaf className="w-3 h-3" />
    </p>
  </div>
);

export default AnnouncementBar;
