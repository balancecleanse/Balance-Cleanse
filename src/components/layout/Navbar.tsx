'use client'

import { Button, Link } from "@nextui-org/react"

export function Navbar() {
  return (
    <nav className="py-4 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-brand-primary">
          Balance Cleanse
        </Link>
        <div className="flex gap-4">
          <Button as={Link} href="/products" variant="light">
            Products
          </Button>
          <Button as={Link} href="/cart" variant="light">
            Cart
          </Button>
        </div>
      </div>
    </nav>
  );
}
