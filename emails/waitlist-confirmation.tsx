import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WaitlistConfirmationProps {
  industry: string;
}

export default function WaitlistConfirmation({
  industry,
}: WaitlistConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>You&apos;re on the QPlan waitlist</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Logo / Brand */}
          <Section style={logoSection}>
            <Text style={logoText}>
              QPlan<span style={logoDot}>.</span>
            </Text>
          </Section>

          <Heading style={heading}>You&apos;re on the list!</Heading>

          <Text style={paragraph}>
            Thanks for signing up for early access to QPlan. We&apos;re building
            something special for professionals in{" "}
            <strong style={highlight}>{industry}</strong> and the wider UK
            planning and construction sector.
          </Text>

          <Text style={paragraph}>
            We&apos;ll be in touch soon with updates on our progress and your
            invitation to try QPlan before everyone else.
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            &copy; {new Date().getFullYear()} QPlan. All rights reserved.
            <br />
            <Link href="https://qplan.co.uk" style={footerLink}>
              qplan.co.uk
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ─── Styles ─── */

const body: React.CSSProperties = {
  backgroundColor: "#0F1923",
  fontFamily:
    "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: 0,
  padding: 0,
};

const container: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "48px 24px",
};

const logoSection: React.CSSProperties = {
  marginBottom: "32px",
};

const logoText: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 700,
  color: "#F1F5F9",
  letterSpacing: "-0.02em",
  margin: 0,
};

const logoDot: React.CSSProperties = {
  color: "#22D3EE",
};

const heading: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: 700,
  color: "#F1F5F9",
  lineHeight: 1.3,
  margin: "0 0 16px",
};

const paragraph: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.6,
  color: "#CBD5E1",
  margin: "0 0 16px",
};

const highlight: React.CSSProperties = {
  color: "#E8722A",
};

const hr: React.CSSProperties = {
  borderColor: "rgba(148,163,184,0.12)",
  margin: "32px 0",
};

const footer: React.CSSProperties = {
  fontSize: "13px",
  color: "#64748B",
  lineHeight: 1.5,
};

const footerLink: React.CSSProperties = {
  color: "#22D3EE",
  textDecoration: "underline",
};
