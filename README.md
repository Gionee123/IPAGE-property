# 🏠 Property Finder - Real Estate Website

A modern, responsive property listing website built with React, featuring advanced search functionality, dark mode support, and a beautiful user interface.

## ✨ Features

### 🎨 **Modern Design**

- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Toggle**: Switch between light and dark themes
- **Professional UI**: Clean, modern design with Tailwind CSS
- **Beautiful Components**: Custom modals, cards, and interactive elements

### 🔍 **Advanced Search & Filtering**

- **Real-time Search**: Search properties by type, location, description, or price
- **Type Filtering**: Filter properties by specific types (Plot, Shed, Retail Store, etc.)
- **Combined Filters**: Search and type filters work together seamlessly
- **Instant Results**: No page refresh needed for filtering

### 📱 **Interactive Features**

- **Property Details Modal**: View detailed information about each property
- **Add Property Form**: Add new properties with a user-friendly form
- **Property Cards**: Beautiful cards displaying property information
- **Navigation**: Smooth navigation between pages

### 🏗️ **Technical Features**

- **React Context**: Centralized state management
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Beautiful icon library
- **Responsive Design**: Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd property
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
property/
├── public/
│   ├── download.jpeg          # Logo image
│   └── vite.svg              # Vite logo
├── src/
│   ├── common/
│   │   ├── Header.jsx        # Navigation header with search
│   │   └── Footer.jsx        # Website footer
│   ├── context/
│   │   └── PropertyContext.jsx # React Context for state management
│   ├── pages/
│   │   ├── Home.jsx          # Main property listing page
│   │   ├── About.jsx         # About us page
│   │   ├── Contact.jsx       # Contact page
│   │   ├── propertydetails.jsx # Property details modal
│   │   └── AddPropertyModal.jsx # Add property form modal
│   ├── index.css             # Global styles
│   └── main.jsx              # App entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── vite.config.js            # Vite configuration
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.7.1
- **Icons**: React Icons 5.5.0
- **State Management**: React Context API
- **Package Manager**: npm

## 🎯 Key Components

### Header Component

- **Logo**: Company branding
- **Navigation**: Home, About, Contact links
- **Search Bar**: Real-time property search
- **Dark Mode Toggle**: Theme switching
- **Mobile Menu**: Responsive hamburger menu

### Home Page

- **Property Dashboard**: Main listing interface
- **Filter Controls**: Type-based filtering
- **Property Grid**: Responsive card layout
- **Add Property Button**: Quick access to add form

### Property Context

- **Centralized State**: All property data management
- **Search Logic**: Real-time filtering implementation
- **Modal Management**: Property details and add forms
- **Data Operations**: Add, view, and filter properties

## 🎨 Design Features

### Color Scheme

- **Light Mode**: Clean whites and grays with blue accents
- **Dark Mode**: Deep grays with white text and blue highlights
- **Consistent Branding**: Professional color palette throughout

### Typography

- **Modern Fonts**: Clean, readable typography
- **Hierarchy**: Clear heading and text hierarchy
- **Responsive**: Scales appropriately on all devices

### Interactive Elements

- **Hover Effects**: Smooth transitions and feedback
- **Focus States**: Accessible focus indicators
- **Loading States**: Smooth loading animations

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: Full-featured experience with all controls
- **Tablet**: Adapted layout with touch-friendly elements
- **Mobile**: Streamlined interface with mobile-first design

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🌟 Features in Detail

### Search Functionality

- **Multi-field Search**: Searches across property type, location, description, and price
- **Case-insensitive**: Works regardless of capitalization
- **Real-time Results**: Instant filtering as you type
- **Combined with Filters**: Works alongside type filtering

### Dark Mode

- **Persistent**: Remembers user preference
- **Smooth Transitions**: Animated theme switching
- **Complete Coverage**: All components support dark mode
- **Accessibility**: Proper contrast ratios maintained

### Property Management

- **Add Properties**: User-friendly form with validation
- **View Details**: Comprehensive property information modal
- **Filter Options**: Multiple filtering criteria
- **Responsive Cards**: Beautiful property display

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel**: Easy deployment with Vercel CLI
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Static website hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Property Finder Team**

- Built with ❤️ using React and Tailwind CSS
- Modern web development practices
- Focus on user experience and performance

## 🙏 Acknowledgments

- **Tailwind CSS**: For the amazing utility-first CSS framework
- **React Team**: For the powerful frontend library
- **Vite**: For the fast build tool
- **React Icons**: For the beautiful icon library

---

**Happy Coding! 🎉**
