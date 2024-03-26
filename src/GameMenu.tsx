// GameMenu.tsx
import React, { useState, useRef } from 'react';
import './css/GameMenu.css';

interface MenuItem {
  label: string;
  onClick: () => void;
}

interface GameMenuProps {
  items: MenuItem[];
}

const GameMenu: React.FC<GameMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: MenuItem) => {
    item.onClick();
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="game-menu" ref={menuRef}>
      <div className="menu-header" onClick={toggleMenu}>
        Menu
      </div>
      {isOpen && (
        <div className="menu-items">
          {items.map((item, index) => (
            <div key={index} className="menu-item" onClick={() => handleItemClick(item)}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameMenu;
