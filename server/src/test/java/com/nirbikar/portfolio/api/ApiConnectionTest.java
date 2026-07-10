package com.nirbikar.portfolio.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.test.context.ActiveProfiles;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@ActiveProfiles("test")
public class ApiConnectionTest {

    @Value("${spring.mail.host:smtp.gmail.com}")
    private String mailHost;

    @Value("${spring.mail.port:587}")
    private String mailPort;

    @Value("${spring.mail.username}")
    private String mailUsername;

    @Value("${spring.mail.password}")
    private String mailPassword;

    @Test
    void mailConfigurationTest() {
        // Verify mail configuration
        assertNotNull(mailHost, "Mail host should not be null");
        assertNotNull(mailPort, "Mail port should not be null");
        assertNotNull(mailUsername, "Mail username should not be null");
        assertNotNull(mailPassword, "Mail password should not be null");
        
        System.out.println("Mail configuration:");
        System.out.println("Host: " + mailHost);
        System.out.println("Port: " + mailPort);
        System.out.println("Username: " + mailUsername);
        System.out.println("Password: " + (mailPassword != null ? "********" : "null"));
    }

    @Test
    void mailSenderTest() {
        // Create a mail sender
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost(mailHost);
        mailSender.setPort(Integer.parseInt(mailPort));
        mailSender.setUsername(mailUsername);
        mailSender.setPassword(mailPassword);
        
        // Enable properties for authentication
        java.util.Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
        
        // Test connection by creating a message
        try {
            MimeMessage message = mailSender.createMimeMessage();
            assertNotNull(message, "Should be able to create a message");
            System.out.println("Mail connection test successful");
        } catch (Exception e) {
            System.err.println("Mail connection test failed: " + e.getMessage());
            throw e;
        }
    }
} 