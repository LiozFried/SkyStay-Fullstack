# SkyStay - Airbnb Clone

A full-stack vacation rental marketplace inspired by Airbnb. Browse stays, book accommodations, and manage listings with a modern, responsive interface.

**[Live Demo](https://skystay-ovyh.onrender.com)**

![SkyStay Preview](https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg)

## Features

- **Browse Stays** - Explore vacation rentals with filtering by location, dates, and guests
- **Interactive Maps** - Google Maps integration showing stay locations
- **User Authentication** - Secure login/signup with encrypted passwords
- **Booking System** - Reserve stays with date selection and guest count
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Image Gallery** - Browse multiple photos for each listing
- **Reviews & Ratings** - Read and write reviews for stays

## Tech Stack

### Frontend
- **React 18** - Component-based UI with hooks
- **Redux** - Global state management
- **React Router** - Client-side routing (HashRouter)
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom responsive styles with CSS Grid & Flexbox
- **Google Maps API** - Interactive location maps

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5** - Web application framework
- **MongoDB** - NoSQL database (Atlas)
- **bcrypt** - Password hashing
- **Cryptr** - Token encryption
- **Cookie-based Auth** - Secure session management

## Project Structure

```
SkyStay E2E/
├── SkyStay/                 # Frontend (React)
│   ├── src/
│   │   ├── cmps/           # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API & utility services
│   │   ├── store/          # Redux state management
│   │   └── assets/         # Styles & static files
│   └── ...
│
├── skystay-backend/         # Backend (Node.js)
│   ├── api/                # Route handlers
│   │   ├── stay/          # Stay CRUD operations
│   │   ├── user/          # User management
│   │   ├── auth/          # Authentication
│   │   ├── review/        # Reviews system
│   │   └── order/         # Booking orders
│   ├── services/          # Database & utilities
│   ├── config/            # Environment configs
│   └── public/            # Built frontend files
│
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Google Maps API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/LiozFried/SkyStay-Fullstack.git
cd SkyStay-Fullstack
```

2. **Setup Backend**
```bash
cd skystay-backend
npm install

# Create .env file (see .env.example)
cp .env.example .env
# Edit .env with your MongoDB URL and secret
```

3. **Setup Frontend**
```bash
cd ../SkyStay
npm install

# Create .env file (see .env.example)
cp .env.example .env
# Edit .env with your Google Maps API key
```

4. **Seed the Database**
```bash
cd ../skystay-backend
node seed.js
```

5. **Run Development Servers**

Backend (Terminal 1):
```bash
cd skystay-backend
npm run dev
```

Frontend (Terminal 2):
```bash
cd SkyStay
npm run dev
```

Visit `http://localhost:5173`

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=3030
MONGO_URL=mongodb+srv://...
DB_NAME=skystay
SECRET=your_secret_key
```

### Frontend (.env)
```
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_LOCAL=false
VITE_API_URL=http://localhost:3030/api/
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/stay` | Get all stays (with filters) |
| GET | `/api/stay/:id` | Get stay by ID |
| POST | `/api/stay` | Create new stay |
| PUT | `/api/stay/:id` | Update stay |
| DELETE | `/api/stay/:id` | Delete stay |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/signup` | User registration |
| POST | `/api/auth/logout` | User logout |
| GET | `/api/user` | Get all users |
| GET | `/api/order` | Get user orders |
| POST | `/api/order` | Create booking order |

## Deployment

The app is deployed on **Render** with the backend serving the built frontend as static files.

### Build for Production
```bash
cd SkyStay
npm run build

# Copy build to backend
cp -r dist/* ../skystay-backend/public/
```

## Screenshots

### Home Page
Browse available stays with search and filter options.

### Stay Details
View detailed information, photos, amenities, and book your stay.

### Mobile Responsive
Fully responsive design for all screen sizes.

## Author

**Lioz Fried**

- GitHub: [@LiozFried](https://github.com/LiozFried)

## License

This project is for educational purposes.

---

Built with React, Node.js, Express & MongoDB
