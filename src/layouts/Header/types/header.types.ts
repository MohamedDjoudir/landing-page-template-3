export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavDropdownGroup {
  id: string;
  label: string;
  items: NavDropdownItem[];
}

export interface NavLinkItem {
  label: string;
  href: string;
}
