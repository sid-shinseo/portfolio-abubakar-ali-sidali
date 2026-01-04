import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";

interface MenuItem {
  label: string;
  href: string;
  submenu?: Array<{
    label: string;
    href: string;
  }>;
}

interface MobileMenuProps {
  items: MenuItem[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSubmenu = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const handleItemClick = () => {
    setIsOpen(false);
    setExpandedItems([]);
  };

  return (
    <div className="md:hidden" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-accent rounded-md transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-50">
          <div className="container py-4 flex flex-col gap-2">
            {items.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full flex items-center justify-between py-2 px-3 text-sm font-medium hover:bg-accent rounded-md transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedItems.includes(item.label) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedItems.includes(item.label) && (
                      <div className="pl-4 flex flex-col gap-1">
                        {item.submenu.map((subitem, subindex) => (
                          <Link key={subindex} href={subitem.href}>
                            <span
                              onClick={handleItemClick}
                              className="block py-2 px-3 text-sm hover:bg-accent rounded-md transition-colors cursor-pointer"
                            >
                              {subitem.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href}>
                    <span
                      onClick={handleItemClick}
                      className="block py-2 px-3 text-sm font-medium hover:bg-accent rounded-md transition-colors cursor-pointer"
                    >
                      {item.label}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
