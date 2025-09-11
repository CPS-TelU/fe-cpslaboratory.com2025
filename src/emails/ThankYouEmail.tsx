import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Img,
} from '@react-email/components';
import * as React from 'react';

interface ThankYouEmailProps {
  firstName: string;
  lastName: string;
}

export const ThankYouEmail = ({
  firstName,
  lastName,
}: ThankYouEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting CPS Laboratory!</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* CPS Logo */}
        <Section style={logoSection}>
          <Img
            src="https://cpslaboratory.com/logocps.png"
            alt="CPS Laboratory Logo"
            style={logo}
          />
        </Section>

        <Heading style={h1}>Thank You for Your Message!</Heading>
        
        <Section style={section}>
          <Text style={text}>
            Dear {firstName} {lastName},
          </Text>
          
          <Text style={text}>
            Thank you for reaching out to us! We have received your message and truly appreciate you taking the time to contact CPS Laboratory.
          </Text>
          
          <Text style={text}>
            Our team will review your inquiry and get back to you as soon as possible. We typically respond within 24-48 hours during business days.
          </Text>
          
          <Text style={text}>
            If you have any urgent matters, please don't hesitate to contact us directly.
          </Text>
        </Section>

        <Section style={section}>
          <Text style={text}>
            Best regards,<br />
            <strong>The CPS Laboratory Team</strong>
          </Text>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            This is an automated response. Please do not reply to this email.
          </Text>
          <Text style={footerText}>
            © 2025 CPS Laboratory. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const logoSection = {
  textAlign: 'center' as const,
  padding: '20px 0',
  borderBottom: '1px solid #e0e0e0',
};

const logo = {
  height: '60px',
  width: 'auto',
};

const h1 = {
  color: '#dc2626',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '40px 0 20px',
  padding: '0',
  textAlign: 'center' as const,
};

const section = {
  padding: '0 48px',
  margin: '20px 0',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
};

const footer = {
  borderTop: '1px solid #e0e0e0',
  padding: '20px 48px',
  marginTop: '40px',
  backgroundColor: '#f8f9fa',
};

const footerText = {
  color: '#666',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center' as const,
  margin: '8px 0',
};

export default ThankYouEmail;
