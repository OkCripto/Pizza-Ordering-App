# Food Ordering Application

A full-stack food ordering application built with React Native and Expo, featuring real-time order management, secure authentication, and integrated Razorpay payment processing.

## Overview

This application provides a complete food ordering experience with separate interfaces for customers and administrators. Users can browse menu items, add products to their cart, and complete purchases using Razorpay. Administrators have access to order management and product catalog controls.

## Features

### Customer Features

- Browse menu with product images and pricing
- Add items to cart with size selection
- Secure user authentication and registration
- Integrated Razorpay payment gateway
- Real-time order tracking
- Order history view

### Admin Features

- Product catalog management (Create, Read, Update, Delete)
- Order status management
- Real-time order monitoring
- Image upload for products

## Technology Stack

### Frontend

- React Native 0.81.5
- Expo SDK 54
- Expo Router for navigation
- React Query (TanStack Query) for state management
- FlashList for optimized list rendering

### Backend

- Supabase for authentication and database
- PostgreSQL database
- Supabase Edge Functions (Deno)
- Razorpay payment integration

### Key Libraries

- @supabase/supabase-js
- react-native-razorpay
- @shopify/flash-list
- expo-image-picker
- expo-secure-store

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- Supabase account
- Razorpay account

## Installation

1. Clone the repository:

```bash
git clone https://github.com/OkCripto/Pizza-Ordering-App.git
cd FoodOrdering
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
EXPO_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
```

4. Update the Supabase configuration in `src/lib/supabase.ts` with your project credentials.

## Database Setup

The application uses the following Supabase tables:

- `products` - Product catalog
- `orders` - Order records with Razorpay payment IDs
- `order_items` - Individual items in each order
- `profiles` - User profiles with role management

### Edge Functions

Deploy the Razorpay order creation function:

```bash
supabase functions deploy razorpay-order
```

Set the required secrets in your Supabase dashboard:

- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

## Running the Application

### Development Mode

Start the Expo development server:

```bash
npm start
```

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

Note: The Razorpay integration requires a development build and will not work with Expo Go. Use:

```bash
npx expo run:android
```

or

```bash
npx expo run:ios
```

## Project Structure

```
FoodOrdering/
├── src/
│   ├── api/           # API integration layer
│   ├── app/           # Expo Router screens
│   ├── components/    # Reusable components
│   ├── constants/     # App constants and theme
│   ├── lib/           # Utility libraries
│   ├── providers/     # React Context providers
│   ├── types/         # TypeScript type definitions
│   └── database.types.ts
├── assets/            # Static assets
├── supabase/          # Supabase Edge Functions
└── app.json          # Expo configuration
```

## Security Considerations

- The Supabase anon key in `supabase.ts` is safe to commit as it is intended for client-side use
- Row Level Security (RLS) policies must be configured in Supabase for data protection
- Razorpay keys should never be committed to version control
- The `.env` file is excluded from git via `.gitignore`
- Edge Function secrets are managed through the Supabase dashboard

## Payment Flow

1. User adds items to cart
2. User clicks checkout
3. Application calls the `razorpay-order` Edge Function to create an order
4. Razorpay checkout modal opens
5. User completes payment
6. Payment ID is stored in the database
7. User is redirected to order details page

## Configuration

### Razorpay Setup

1. Create a Razorpay account at https://razorpay.com
2. Navigate to Settings API Keys
3. Copy your Key ID and Key Secret
4. Add them to your `.env` file
5. Configure the same secrets in Supabase Edge Functions

### Supabase Setup

1. Create a project at https://supabase.com
2. Set up the required tables using the schema in `src/database.types.ts`
3. Configure Row Level Security policies
4. Deploy Edge Functions
5. Update `src/lib/supabase.ts` with your project URL and anon key

## Contributing

This is a private project. For any questions or contributions, please contact the repository owner.

## License

All rights reserved.
