# Contact Form Setup Guide

This guide explains how to properly set up the contact form in both development and production environments.

## EmailJS Configuration

The contact form uses [EmailJS](https://www.emailjs.com/) as a fallback mechanism when the backend API is not available. To set this up correctly:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail is recommended)
3. Create a new email template with the following variables:
   - `from_name`: Sender's name
   - `from_email`: Sender's email
   - `message`: The message content
   - `to_name`: Your name
   - `to_email`: Your email address

4. Get your EmailJS credentials:
   - Service ID: Found in the "Email Services" section
   - Template ID: Found in the "Email Templates" section
   - Public Key: Found in the "Account" > "API Keys" section

5. Update these values in your `.env` and `.env.production` files:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Testing EmailJS Configuration

You can test your EmailJS configuration using the utility script:

1. Open your browser console
2. Run the following command:
   ```javascript
   import('./utils/emailjs-test.js').then(module => module.testEmailJSConfig());
   ```

If successful, you should see a success message in the console. If not, you'll see an error message with details.

## Spring Boot Backend Configuration

The primary contact form submission method uses a Spring Boot backend API. To set this up:

1. Ensure your backend is properly configured in `application.properties`
2. Check that the email credentials are correct
3. Deploy your backend to a hosting service like Heroku

## Environment Variables

Make sure both `.env` and `.env.production` files have the correct API URLs:

```
# Development
REACT_APP_API_URL=http://localhost:8080/api/contact

# Production
REACT_APP_PRODUCTION_API_URL=https://your-production-backend-url.com/api/contact
```

## Deployment Checklist

- [ ] Verify EmailJS credentials are correct
- [ ] Test EmailJS configuration
- [ ] Deploy backend to production
- [ ] Update production API URL in `.env.production`
- [ ] Test the contact form in production

## Troubleshooting

If you encounter the error: `The Public Key is invalid. To find this ID, visit https://dashboard.emailjs.com/admin/account`

1. Go to https://dashboard.emailjs.com/admin/account
2. Copy your public key
3. Update the public key in both `.env` and `.env.production` files
4. Re-deploy your application 