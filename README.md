# CryptoBroker - Professional Crypto Investment Platform

CryptoBroker is a modern, secure, and user-friendly cryptocurrency investment platform built with HTML, Tailwind CSS, and JavaScript. The platform offers various investment plans with daily returns and features a responsive design with dark mode support.

## Features

### 1. User Interface
- Responsive design that works on all devices (mobile, tablet, desktop)
- Dark mode support with system preference detection and manual toggle
- Modern and clean UI with smooth transitions
- Accessible navigation with mobile menu support

### 2. Investment Features
- Multiple investment plans:
  - Standard Plan (2% daily returns)
  - Premium Plan (3% daily returns)
  - Platinum Plan (4% daily returns)
- Live profit calculator
- Real-time investment tracking
- Secure withdrawal system

### 3. Security Features
- Two-factor authentication
- Advanced encryption for user data
- Cold wallet storage
- Regular security audits

### 4. User Dashboard
- Investment portfolio overview
- Transaction history
- Profit analytics
- Account settings
- Profile management

## Technology Stack

- HTML5
- Tailwind CSS 3.x
- JavaScript (ES6+)
- Font Awesome 6.0.0
- UI Avatars API for profile images

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Web browser (Chrome, Firefox, Safari, or Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/crypto-broker.git
cd crypto-broker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
crypto-broker/
├── public/
│   ├── index.html
│   ├── about.html
│   ├── login.html
│   └── register.html
├── src/
│   └── styles/
│       └── main.css
├── package.json
└── README.md
```

## Dark Mode Implementation

The platform includes a comprehensive dark mode feature:

- Automatic system preference detection
- Manual toggle with persistent state
- Custom color palette for dark theme
- Smooth transitions between modes

### Dark Mode Colors
```css
dark: {
    'bg-primary': '#1a1b1e',
    'bg-secondary': '#2c2e33',
    'text-primary': '#e4e6ea',
    'text-secondary': '#9ca3af',
}
```

## Pages

1. **Landing Page (index.html)**
   - Hero section with call-to-action
   - Investment plans
   - Features overview
   - Live profit calculator
   - Testimonials
   - FAQ section
   - Contact form

2. **About Page (about.html)**
   - Company history
   - Team members
   - Mission and values
   - Statistics and achievements

3. **Login/Register Pages**
   - User authentication
   - Account creation
   - Security verification

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security

- All user data is encrypted
- Regular security audits
- Protected API endpoints
- Input validation and sanitization
- XSS and CSRF protection

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please email support@cryptobroker.com or visit our [support page](https://cryptobroker.com/support).

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [UI Avatars](https://ui-avatars.com/)

## Roadmap

- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Additional investment plans
- [ ] Cryptocurrency exchange integration
- [ ] Social trading features

## Disclaimer

This platform is for demonstration purposes only. Always conduct proper research and understand the risks involved before making any investment decisions. 