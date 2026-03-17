# Product Listing App

A simple product listing application built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Features
- Fetches products from FakeStore API
- Responsive grid layout
- Product cards with image, title, and price
- Search filter by product title
- Loading & error states
- Clean UI with Tailwind CSS



## Approach
I used the Next.js App Router with TypeScript and client components for fetching and filtering. The UI is built with Tailwind for responsiveness. Search filtering happens locally in state.

## Trade-offs
- Fetch happens on the client side for simplicity
- Error handling is basic but user-friendly
- No backend caching

## If I had more time
- Add skeleton loaders
- Add favorites / cart functionality
- Dynamic product details page