# MiniShop - E-commerce Platform

A modern, responsive e-commerce platform built with Next.js 15, TypeScript, and Tailwind CSS. This project features a complete online shopping experience with product management, shopping cart functionality, and a beautiful Persian/Arabic RTL interface.

![simple screen](https://github.com/Aria-Hosseini/minishop/blob/master/public/screenshots/shot1.png?raw=true)
## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **RTL Support**: Full Persian/Arabic right-to-left language support
- **Product Management**: Display and manage products with categories
- **Shopping Cart**: Full cart functionality with quantity management
- **Search Functionality**: Product search capabilities
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **TypeScript**: Full type safety throughout the application
- **Performance**: Built with Next.js 15 and Turbopack for optimal performance

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - Latest React version with modern features
- **TypeScript 5** - Type-safe JavaScript development
- **Tailwind CSS 4** - Utility-first CSS framework

### Key Libraries
- **@supabase/ssr & @supabase/supabase-js** - Database and authentication
- **axios** - HTTP client for API requests
- **js-cookie** - Cookie management
- **json-server** - Mock API server for development
- **react-hot-toast** - Toast notifications
- **react-icons** - Icon library (FontAwesome icons)

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## 📁 Project Structure

```
minishop/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   ├── ProductCart.tsx # Product display cards
│   │   │   ├── CartItemCard.tsx # Cart item display
│   │   │   ├── Search.tsx     # Search functionality
│   │   │   └── AddtoCart.tsx  # Add to cart button
│   │   ├── context/           # React Context
│   │   │   └── CartContext.tsx # Shopping cart state management
│   │   ├── api/               # API routes
│   │   ├── cart/              # Cart page
│   │   ├── product/           # Product pages
│   │   ├── admin/             # Admin panel
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── db/                    # Mock database
│   │   ├── product.json       # Product data
│   │   └── orders.json        # Order data
│   └── middleware.ts          # Next.js middleware
├── public/                    # Static assets
│   └── img/                   # Product images
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── next.config.ts             # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd minishop
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up the mock database**
   ```bash
   # Start JSON server for mock API
   npx json-server --watch src/db/product.json --port 4565
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Setup

The project uses Supabase for backend services. You'll need to configure your Supabase credentials:

1. Create a `.env.local` file in the root directory
2. Add your Supabase configuration:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Tailwind CSS

The project is configured with Tailwind CSS 4 and includes custom Persian font support (Vazir). The configuration is in `tailwind.config.js`.

### TypeScript

Full TypeScript support with strict mode enabled. The configuration includes path aliases for clean imports (`@/*` maps to `src/*`).

## 📱 Features in Detail

### Shopping Cart System
- Add/remove products
- Quantity management
- Persistent cart state
- Real-time cart updates

### Product Management
- Product display with images
- Category-based organization
- Stock management
- Featured products section

### User Interface
- Responsive navigation
- Search functionality
- RTL layout support
- Modern card-based design

## 🎨 Design System

The project uses a carefully crafted color palette:
- Primary: `#d24d42` (Red)
- Secondary: `#F4E7D1` (Cream)
- Accent: `#e2ca83` (Gold)
- Text: `#454543` (Dark Gray)

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the development team

## 🔮 Future Enhancements

- User authentication and profiles
- Payment gateway integration
- Order management system
- Admin dashboard improvements
- Multi-language support
- Advanced search and filtering
- Wishlist functionality
- Product reviews and ratings

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
