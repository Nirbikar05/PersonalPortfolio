package com.nirbikar.portfolioapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nirbikar.portfolioapi.model.ContactForm;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${spring.mail.password:}")
    private String mailPassword;

    @Value("${email.recipient}")
    private String toEmail;

    public String getHealthStatus() {
        boolean configured = isMailConfigured();
        return configured
                ? "ok - mail configured"
                : "ok - api running, but mail is NOT configured (set MAIL_USERNAME, MAIL_PASSWORD, EMAIL_RECIPIENT)";
    }

    public void sendEmail(ContactForm contactForm) {
        validateMailConfig();

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setReplyTo(contactForm.getEmail());
        message.setTo(toEmail);
        message.setSubject("New Contact Form Submission from " + contactForm.getName());
        message.setText("Name: " + contactForm.getName() + "\n"
                + "Email: " + contactForm.getEmail() + "\n"
                + "Message: " + contactForm.getMessage());

        mailSender.send(message);
    }

    private void validateMailConfig() {
        if (!isMailConfigured()) {
            throw new IllegalStateException(
                    "Email is not configured on the server. Set MAIL_USERNAME, MAIL_PASSWORD, and EMAIL_RECIPIENT.");
        }
    }

    private boolean isMailConfigured() {
        return StringUtils.hasText(fromEmail)
                && StringUtils.hasText(mailPassword)
                && StringUtils.hasText(toEmail);
    }
}
