# Portfolio Website

A modern, responsive portfolio website with a futuristic design and interactive elements. The website includes various sections such as About, Skills, Experience, Projects, Social Media, and Contact.

## Features

- Modern UI with animated elements and neon effects
- Fully responsive design (mobile, tablet, desktop)
- Backend email sending functionality with Spring Boot
- Contact form with email validation
- Social media integration
- Resume download

## Technologies Used

### Frontend
- React
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- EmailJS (as fallback for email sending)
- React Icons

### Backend
- Spring Boot
- Java Mail Sender
- Spring Validation

## Setup and Installation

### Frontend

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

### Backend (Email Service)

1. Navigate to the server directory
```bash
cd server
```

2. Configure email settings in `src/main/resources/application.properties`
   - Update the SMTP settings with your email provider information
   - Set your recipient email address

3. Build the Spring Boot application
```bash
./gradlew build
```

4. Run the Spring Boot application
```bash
./gradlew bootRun
```

## Email Configuration

### Option 1: Backend Spring Boot (Recommended)
1. Update the following properties in `server/src/main/resources/application.properties`:
   - `spring.mail.username`: Your email address
   - `spring.mail.password`: Your email app password
   - `email.recipient`: Where to receive contact messages

### Option 2: EmailJS (Fallback)
1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the EmailJS configuration in `src/components/Contact.tsx`:
   - `service_portfolio`: Your EmailJS service ID
   - `template_contact`: Your EmailJS template ID
   - `YOUR_PUBLIC_KEY`: Your EmailJS public key

## Customization

- Update personal information in `src/constants/index.ts`
- Replace project images in the `public` directory
- Modify color schemes in `tailwind.config.js`
- Add or remove sections as needed

## License

MIT
