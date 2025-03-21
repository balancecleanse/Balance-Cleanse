Create a modern e-commerce website based on current content on https://balancecleanse.com/ using Next.js 14, TypeScript, Tailwind CSS, and Next-UI. You will break this down into multiple parts for better organization.

1. First, let's set up the project structure:

```bash
npx create-next-app@latest balance-cleanse
```

When prompted, select:
- Would you like to use TypeScript? › Yes
- Would you like to use ESLint? › Yes
- Would you like to use Tailwind CSS? › Yes
- Would you like to use `src/` directory? › Yes
- Would you like to use App Router? › Yes
- Would you like to customize the default import alias (@/*)? › Yes

2. Install additional dependencies:

```bash
npm install @nextui-org/react framer-motion @heroicons/react next-themes
```

3. Let's create the basic project structure:

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── products/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   └── checkout/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── ui/
│   │   ├── ProductCard.tsx
│   │   ├── CartItem.tsx
│   │   └── Button.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── FeaturedProducts.tsx
│       └── Newsletter.tsx
├── lib/
│   └── types.ts
└── styles/
    └── globals.css
```

4. Let's implement the main layout with NextUI provider:

```typescript:src/app/layout.tsx
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
```

5. Create the providers file for NextUI:

```typescript:src/app/providers.tsx
'use client'

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
```

6. Let's create a modern Navbar component:

```typescript:src/components/layout/Navbar.tsx
'use client'

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/70 backdrop-blur-md"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground">
            <Image
              src="/logo.png"
              alt="Balance Cleanse"
              width={150}
              height={40}
              className="h-auto"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/products" color="foreground">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" color="foreground">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/cart"
            variant="light"
            startContent={<ShoppingCartIcon className="h-5 w-5" />}
          >
            Cart (0)
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {["Products", "About", "Contact"].map((item) => (
          <NavbarMenuItem key={item}>
            <Link
              href={`/${item.toLowerCase()}`}
              color="foreground"
              className="w-full"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  )
}
```

7. Create a ProductCard component:

```typescript:src/components/ui/ProductCard.tsx
'use client'

import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react"
import { motion } from "framer-motion"

interface ProductCardProps {
  title: string
  price: number
  image: string
  slug: string
}

export function ProductCard({ title, price, image, slug }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="w-full max-w-sm">
        <CardBody className="p-0">
          <Image
            src={image}
            alt={title}
            className="w-full object-cover h-[200px]"
            radius="none"
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2 p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-default-500">${price.toFixed(2)}</p>
          <Button
            as="a"
            href={`/products/${slug}`}
            color="primary"
            className="w-full"
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
```

8. Create a sample home page:

```typescript:src/app/page.tsx
import { Button } from "@nextui-org/react"
import { ProductCard } from "@/components/ui/ProductCard"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-image.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
            Balance Your Life
          </h1>
          <p className="text-white text-xl mb-8 max-w-xl">
            Discover our range of natural cleansing products designed to help you
            achieve balance and wellness.
          </p>
          <Button
            as="a"
            href="/products"
            color="primary"
            size="lg"
            className="font-semibold"
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add your product cards here */}
        </div>
      </section>
    </div>
  )
}
```

To complete the website, you'll need to:

1. Add proper product data and images
2. Implement the cart functionality
3. Add a checkout system
4. Create product detail pages
5. Add authentication
6. Implement a backend API
7. Add a CMS for product management
8. Set up payment processing

Would you like me to provide implementation details for any of these additional features? Also, you'll need to:

1. Configure Tailwind CSS with NextUI colors
2. Add proper TypeScript types for products and cart items
3. Set up environment variables
4. Add proper SEO metadata
5. Implement error boundaries and loading states

Let me know which aspects you'd like me to elaborate on further!

The website will feature:
- Smooth animations and transitions using Framer Motion
- Responsive design for all screen sizes
- Modern UI components from NextUI
- Type-safe code with TypeScript
- Optimized images and performance
- SEO-friendly structure
- Intuitive navigation and user experience
