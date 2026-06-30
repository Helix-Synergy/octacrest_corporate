import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { gsap } from 'gsap';

const PrivacyPolicyPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  const renderList = (items: string[]) => (
    <Box component="ul" sx={{ color: '#A7B6C2', pl: 3, mb: 3 }}>
      {items.map((item, index) => (
        <Typography component="li" variant="body1" key={index} sx={{ lineHeight: 1.8, mb: 0.5 }}>
          {item}
        </Typography>
      ))}
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', pt: 12, pb: 8 }}>
      <Container maxWidth="lg" ref={containerRef}>
        <Paper
          elevation={0}
          sx={{
            background: 'rgba(30, 36, 43, 0.5)',
            backdropFilter: 'blur(15px)',
            p: { xs: 4, sm: 6, md: 8 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.15)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(90deg, #48AFF0 0%, #00FFCC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Privacy Policy
          </Typography>
          
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mb: 3 }}>
            OCTACREST CORPORATE PRIVATE LIMITED
          </Typography>

          <Typography variant="body1" sx={{ color: '#E0E8EF', mb: 4, lineHeight: 1.8, fontWeight: 500 }}>
            Effective Date: May 09, 2026
          </Typography>

          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            OCTACREST CORPORATE PRIVATE LIMITED (“OCTACREST,” “we,”) are committed to protecting the privacy, confidentiality, and security of personal information entrusted to us by our clients, customers, partners, researchers, readers, vendors, employees, and website users. This Privacy Policy outlines how we collect, use, disclose, process, store, and safeguard information across all business operations and digital platforms managed by OCTACREST CORPORATE PRIVATE LIMITED and its diversified business verticals.
          </Typography>

          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            This Privacy Policy applies to all services, websites, applications, digital platforms, events, journals, consulting activities, marketing operations, publications, and communication channels operated under OCTACREST CORPORATE PRIVATE LIMITED, including but not limited to:
          </Typography>

          {renderList([
            'Helix Conferences',
            'Code IT Consulting',
            'Peptides Knowledge Park',
            'Digigro Digital Marketing',
            'Channel 8 Network',
            'E-volve Digital Magazine',
            'Aura Business Consulting',
            'Helix Open Access Journals'
          ])}

          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            By accessing our websites, using our services, participating in our events, submitting information, or engaging with any of our platforms, users acknowledge and agree to the practices described in this Privacy Policy.
          </Typography>

          {/* Section 1 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            OCTACREST may collect personal, professional, technical, academic, and business-related information necessary for providing services, maintaining communications, improving operations, and fulfilling legal obligations.
            <br/><br/>
            The information collected may include:
          </Typography>
          
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#E0E8EF', mb: 1 }}>Personal Information</Typography>
          {renderList([
            'Full name',
            'Email address',
            'Contact number',
            'Residential or business address',
            'Professional designation',
            'Organization or institution details',
            'Government-issued identification details where legally required'
          ])}

          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#E0E8EF', mb: 1 }}>Professional and Academic Information</Typography>
          {renderList([
            'Research publications',
            'Academic affiliations',
            'Conference participation details',
            'Professional qualifications',
            'Manuscripts, abstracts, presentations, and scholarly submissions'
          ])}

          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#E0E8EF', mb: 1 }}>Technical and Digital Information</Typography>
          {renderList([
            'IP address',
            'Browser type and device information',
            'Cookies and analytics data',
            'Website usage behavior',
            'Login credentials and user preferences'
          ])}

          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#E0E8EF', mb: 1 }}>Business and Financial Information</Typography>
          {renderList([
            'Billing details',
            'Payment transaction information',
            'Tax-related details',
            'Service agreements and contracts'
          ])}

          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            We may also collect information voluntarily provided through forms, subscriptions, event registrations, consultations, surveys, newsletters, customer support interactions, and social media engagements.
          </Typography>

          {/* Section 2 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            2. Purpose of Information Collection
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            The information collected by OCTACREST is used strictly for lawful business and operational purposes, including:
          </Typography>
          {renderList([
            'Delivering products and services efficiently',
            'Managing conferences, webinars, and academic events',
            'Processing journal submissions and publications',
            'Providing IT consulting and digital marketing solutions',
            'Facilitating business consulting services',
            'Managing subscriptions, newsletters, and digital publications',
            'Improving customer experience and platform performance',
            'Conducting research, analytics, and service optimization',
            'Processing payments and maintaining financial records',
            'Responding to inquiries, complaints, and support requests',
            'Maintaining security, fraud prevention, and regulatory compliance'
          ])}
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            OCTACREST uses collected information responsibly and only to the extent necessary for legitimate business interests and legal obligations.
          </Typography>

          {/* Section 3 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            3. Data Protection and Security
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            OCTACREST CORPORATE PRIVATE LIMITED maintains appropriate administrative, technical, and organizational safeguards to protect personal and business information against unauthorized access, misuse, alteration, disclosure, loss, or destruction.
            <br/><br/>
            Our security measures may include:
          </Typography>
          {renderList([
            'Secure servers and encrypted communication channels',
            'Access-controlled systems and restricted data handling',
            'Firewall protection and cybersecurity monitoring',
            'Periodic security assessments and software updates',
            'Confidentiality agreements with employees and partners',
            'Data backup and disaster recovery mechanisms'
          ])}
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            While we strive to implement commercially acceptable security standards, no electronic transmission or storage system can be guaranteed to be completely secure. Users are encouraged to exercise caution while sharing confidential information online.
          </Typography>

          {/* Section 4 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            4. Cookies and Tracking Technologies
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            Our websites and digital platforms may use cookies, analytics tools, and tracking technologies to improve user experience, monitor website performance, analyze traffic patterns, and customize content.
            <br/><br/>
            Cookies may help us:
          </Typography>
          {renderList([
            'Recognize returning users',
            'Improve website functionality',
            'Understand user preferences',
            'Deliver relevant content and marketing communications'
          ])}
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            Users may modify browser settings to decline cookies; however, certain website functionalities may be affected as a result.
          </Typography>

          {/* Section 5 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            5. Information Sharing and Disclosure
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            OCTACREST does not sell, rent, or trade personal information to third parties for commercial gain. Information may only be shared under the following circumstances:
          </Typography>
          {renderList([
            'With authorized employees, consultants, and service providers performing operational functions',
            'With payment gateways and financial institutions for transaction processing',
            'With conference partners, journal editors, reviewers, or academic collaborators where necessary',
            'To comply with legal obligations, court orders, or regulatory authorities',
            'To protect organizational rights, property, security, or legal interests',
            'During mergers, acquisitions, restructuring, or lawful business transitions'
          ])}
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            All third-party service providers associated with OCTACREST are expected to maintain appropriate confidentiality and data protection standards.
          </Typography>

          {/* Section 6 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            6. Academic and Research Data
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            Certain OCTACREST verticals, including Helix Conferences, Peptides Knowledge Park, and Helix Open Access Journals, may collect academic manuscripts, research data, abstracts, presentations, and scholarly communications.
            <br/><br/>
            Authors and researchers retain intellectual ownership of their submitted work unless otherwise agreed through publication or licensing terms. Submitted content may undergo editorial review, peer-review processes, indexing procedures, and publication workflows according to academic and ethical standards.
            <br/><br/>
            OCTACREST is committed to maintaining research integrity, publication ethics, and confidentiality during editorial and peer-review activities.
          </Typography>

          {/* Section 7 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            7. Digital Marketing and Communication Practices
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            Through Digigro Digital Marketing, Channel 8 Network, and E-volve Digital Magazine, OCTACREST may distribute newsletters, promotional materials, event notifications, media content, and professional communications.
            <br/><br/>
            Users who subscribe to communication services may receive:
          </Typography>
          {renderList([
            'Marketing campaigns',
            'Promotional announcements',
            'Event invitations',
            'Educational or business content',
            'Industry updates and newsletters'
          ])}
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            Recipients may opt out of non-essential marketing communications at any time through unsubscribe options or written requests.
          </Typography>

          {/* Section 8 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            8. Data Retention
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            OCTACREST retains information only for as long as necessary to fulfill operational, contractual, academic, legal, financial, and regulatory purposes.
            <br/><br/>
            Retention periods may vary depending on:
          </Typography>
          {renderList([
            'Nature of the service provided',
            'Academic publication requirements',
            'Legal compliance obligations',
            'Business operational needs',
            'Financial and taxation regulations'
          ])}
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            Once data is no longer required, reasonable steps are taken to securely delete, archive, or anonymize the information.
          </Typography>

          {/* Section 9 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            9. User Rights and Choices
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            Subject to applicable laws and regulations, users may have the right to:
          </Typography>
          {renderList([
            'Access personal information held by OCTACREST',
            'Request correction or updates to inaccurate information',
            'Withdraw consent where processing is consent-based',
            'Request deletion of personal information where legally permissible',
            'Object to certain data processing activities',
            'Request restrictions on specific uses of personal information'
          ])}
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            Requests related to privacy rights may be submitted through official communication channels of OCTACREST CORPORATE PRIVATE LIMITED.
          </Typography>

          {/* Section 10 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            10. Third-Party Links and External Platforms
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            Our websites and platforms may contain links to external websites, academic repositories, social media platforms, payment gateways, or third-party services. OCTACREST is not responsible for the privacy practices, content, or security policies of external websites or organizations.
            <br/><br/>
            Users are encouraged to review the privacy policies of third-party platforms before sharing information.
          </Typography>

          {/* Section 11 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            11. Children’s Privacy
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            OCTACREST services are generally intended for professionals, businesses, researchers, students, and adults. We do not knowingly collect personal information from children below the age permitted under applicable laws without parental or legal guardian consent.
            <br/><br/>
            If such information is identified, reasonable steps will be taken to remove it promptly.
          </Typography>

          {/* Section 12 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            12. International Data Processing
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            As OCTACREST engages in global conferences, research collaborations, IT consulting, digital services, and publication activities, user information may be processed or accessed across different geographical locations in compliance with applicable legal and regulatory requirements.
            <br/><br/>
            We take reasonable measures to ensure that international data transfers maintain appropriate privacy and security protections.
          </Typography>

          {/* Section 13 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            13. Policy Updates and Modifications
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 5, lineHeight: 1.8 }}>
            OCTACREST CORPORATE PRIVATE LIMITED reserves the right to update, revise, or modify this Privacy Policy at any time to reflect operational, legal, technological, or regulatory changes.
            <br/><br/>
            Updated versions of this Privacy Policy will be published on official platforms with revised effective dates. Continued use of services after such updates constitutes acceptance of the revised policy.
          </Typography>

          {/* Section 14 */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 5, mb: 2 }}>
            14. Contact Information
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            For privacy-related concerns, data requests, legal notices, or further clarification regarding this Privacy Policy, users may contact:
          </Typography>
          <Typography variant="body1" sx={{ color: '#E0E8EF', mb: 5, lineHeight: 1.8, fontWeight: 500 }}>
            OCTACREST CORPORATE PRIVATE LIMITED<br />
            Corporate Communications & Compliance Division<br />
            Email: <a href="mailto:hello@octacrestcorporate.com" style={{ color: '#48AFF0', textDecoration: 'none' }}>hello@octacrestcorporate.com</a><br />
            Website: <a href="https://www.octacrestcorporate.com" target="_blank" rel="noopener noreferrer" style={{ color: '#48AFF0', textDecoration: 'none' }}>www.octacrestcorporate.com</a>
          </Typography>

          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(72,175,240,0.15)' }}>
            <Typography variant="body2" sx={{ color: '#A7B6C2', fontStyle: 'italic', textAlign: 'center', lineHeight: 1.8 }}>
              OCTACREST CORPORATE PRIVATE LIMITED remains committed to maintaining the highest standards of professionalism, transparency, confidentiality, and ethical responsibility in all its operations across academic, technological, media, consulting, and business sectors.
            </Typography>
          </Box>

        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
