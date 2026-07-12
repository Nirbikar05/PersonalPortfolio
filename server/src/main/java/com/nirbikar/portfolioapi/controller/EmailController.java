package com.nirbikar.portfolioapi.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirbikar.portfolioapi.model.ContactForm;
import com.nirbikar.portfolioapi.service.EmailService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class EmailController {

    private static final Logger logger = LoggerFactory.getLogger(EmailController.class);

    @Autowired
    private EmailService emailService;

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok(emailService.getHealthStatus());
    }

    @PostMapping("/contact")
    public ResponseEntity<String> sendEmail(@RequestBody ContactForm contactForm) {
        try {
            emailService.sendEmail(contactForm);
            logger.info("Contact email sent for submission from {}", contactForm.getEmail());
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            logger.error("Failed to send contact email for {}", contactForm.getEmail(), e);
            return ResponseEntity.badRequest().body("Failed to send email: " + e.getMessage());
        }
    }
}
