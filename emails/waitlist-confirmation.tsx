import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WaitlistConfirmationProps {
  name?: string;
  industry?: string;
}

const LOGO_URL = "https://qplan.co.uk/qplan-logo-email.png";
const SITE_URL = "https://qplan.co.uk";

export default function WaitlistConfirmation({
  name,
  industry = "your field",
}: WaitlistConfirmationProps) {
  const greeting = name ? `You're on the list, ${name}.` : "You're on the list.";

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Plus Jakarta Sans"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4KrgZZOFjjNtZw.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Plus Jakarta Sans"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4KrgZZOFjoJtZw.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Preview>You&apos;re on the QPlan waitlist — early access is coming</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Brand mark */}
          <Section style={brandRow}>
            <Img
              src={LOGO_URL}
              width="36"
              height="36"
              alt="QPlan"
              style={logoImg}
            />
            <Text style={brandText}>
              Plan<span style={brandDot}>.</span>
            </Text>
          </Section>

          {/* Hero card */}
          <Section style={heroCard}>
            <Text style={eyebrow}>EARLY ACCESS · CONFIRMED</Text>
            <Heading as="h1" style={heading}>
              {greeting}
            </Heading>
            <Text style={paragraph}>
              Thanks for signing up for early access to QPlan. We&apos;re
              building the site intelligence platform for professionals in{" "}
              <span style={highlight}>{industry}</span> and the wider UK
              planning and construction sector.
            </Text>
            <Text style={paragraph}>
              You&apos;ll hear from us the moment your access is ready — with a
              private invite to try QPlan Ultimate before public launch.
            </Text>

            <Section style={ctaRow}>
              <Button href={SITE_URL} style={ctaButton}>
                Visit qplan.co.uk
              </Button>
            </Section>
          </Section>

          {/* What's next */}
          <Section style={nextSection}>
            <Text style={nextTitle}>While you wait</Text>
            <Text style={nextItem}>
              <span style={nextMark}>●</span> We&apos;re rolling out access by
              sector and region. Planning consultancies, architects, and
              developers get priority.
            </Text>
            <Text style={nextItem}>
              <span style={nextMark}>●</span> Expect a short onboarding call so
              we can tailor the platform to the work you actually do.
            </Text>
            <Text style={nextItem}>
              <span style={nextMark}>●</span> Got a teammate who should be on
              the list? Forward this email — they can sign up at{" "}
              <Link href={SITE_URL} style={inlineLink}>
                qplan.co.uk
              </Link>
              .
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              &copy; {new Date().getFullYear()} QPlan &middot;{" "}
              <Link href={SITE_URL} style={footerLink}>
                qplan.co.uk
              </Link>
            </Text>
            <Text style={footerMuted}>
              You&apos;re receiving this email because you joined the QPlan
              early-access waitlist. Reply to this email if you want to reach
              us directly.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* ─── Tokens (mirror globals.css) ─── */
const COLOR_BG = "#0F1923";
const COLOR_SURFACE = "#162231";
const COLOR_DIVIDER = "rgba(148,163,184,0.12)";
const COLOR_TEXT = "#F1F5F9";
const COLOR_TEXT_BODY = "#CBD5E1";
const COLOR_TEXT_MUTED = "#64748B";
const COLOR_CYAN = "#22D3EE";
const COLOR_ORANGE = "#E8722A";

const FONT_STACK =
  "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

/* ─── Styles ─── */
const body: React.CSSProperties = {
  backgroundColor: COLOR_BG,
  fontFamily: FONT_STACK,
  margin: 0,
  padding: 0,
  WebkitFontSmoothing: "antialiased",
};

const container: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "40px 24px 32px",
};

const brandRow: React.CSSProperties = {
  marginBottom: "28px",
  textAlign: "left" as const,
};

const logoImg: React.CSSProperties = {
  display: "inline-block",
  verticalAlign: "middle",
  marginRight: "10px",
};

const brandText: React.CSSProperties = {
  display: "inline-block",
  verticalAlign: "middle",
  margin: 0,
  fontSize: "22px",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: COLOR_TEXT,
};

const brandDot: React.CSSProperties = {
  color: COLOR_CYAN,
};

const heroCard: React.CSSProperties = {
  backgroundColor: COLOR_SURFACE,
  borderRadius: "14px",
  padding: "36px 32px",
  border: `1px solid ${COLOR_DIVIDER}`,
};

const eyebrow: React.CSSProperties = {
  margin: "0 0 16px",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.12em",
  color: COLOR_CYAN,
  textTransform: "uppercase" as const,
};

const heading: React.CSSProperties = {
  fontSize: "30px",
  fontWeight: 700,
  color: COLOR_TEXT,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  margin: "0 0 18px",
};

const paragraph: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.65,
  color: COLOR_TEXT_BODY,
  margin: "0 0 14px",
};

const highlight: React.CSSProperties = {
  color: COLOR_ORANGE,
  fontWeight: 600,
};

const ctaRow: React.CSSProperties = {
  marginTop: "24px",
  textAlign: "left" as const,
};

const ctaButton: React.CSSProperties = {
  backgroundColor: COLOR_ORANGE,
  color: "#FFFFFF",
  padding: "12px 26px",
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: "0.01em",
  borderRadius: "2px",
  textDecoration: "none",
  display: "inline-block",
};

const nextSection: React.CSSProperties = {
  marginTop: "28px",
  padding: "0 4px",
};

const nextTitle: React.CSSProperties = {
  margin: "0 0 14px",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  color: COLOR_TEXT,
  textTransform: "uppercase" as const,
};

const nextItem: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.65,
  color: COLOR_TEXT_BODY,
  margin: "0 0 10px",
};

const nextMark: React.CSSProperties = {
  color: COLOR_CYAN,
  marginRight: "10px",
};

const inlineLink: React.CSSProperties = {
  color: COLOR_CYAN,
  textDecoration: "underline",
};

const hr: React.CSSProperties = {
  borderColor: COLOR_DIVIDER,
  margin: "32px 0 20px",
};

const footer: React.CSSProperties = {
  padding: "0 4px",
};

const footerText: React.CSSProperties = {
  fontSize: "13px",
  color: COLOR_TEXT_MUTED,
  margin: "0 0 8px",
};

const footerLink: React.CSSProperties = {
  color: COLOR_CYAN,
  textDecoration: "underline",
};

const footerMuted: React.CSSProperties = {
  fontSize: "12px",
  color: COLOR_TEXT_MUTED,
  lineHeight: 1.6,
  margin: 0,
};
