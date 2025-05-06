import { Zap, Terminal, CloudCog, FileText, MousePointer, KeyRound, Mail, Router, Network, Server, Factory, Anchor, Container, FileType, ShieldQuestion } from 'lucide-react'; // Added new icons

const FeaturesSection = () => {
  const customDeceptions = [
    {
      icon: <Anchor className="w-8 h-8 text-shakuni-accent" />, // Changed from Zap to Anchor for Generic Webhook
      title: 'Generic Webhook',
      description: 'Generate unique webhook URLs to track link clicks and other custom events, providing immediate alerts on interactions.',
    },
    {
      icon: <Terminal className="w-8 h-8 text-shakuni-accent" />,
      title: 'SSH Log Capture',
      description: 'Deploy scripts that capture SSH login attempts and securely forward them for analysis, identifying brute-force attacks.',
    },
    {
      icon: <Container className="w-8 h-8 text-shakuni-accent" />, // Changed from CloudCog to Container for Kubernetes Decoy
      title: 'Kubernetes Decoy',
      description: 'Use Kubernetes YAML manifests with enticing secrets and service accounts to lure attackers and trigger alerts upon deployment.',
    },
    {
      icon: <FileType className="w-8 h-8 text-shakuni-accent" />, // Changed from FileText to FileType for Tracking PDF
      title: 'Tracking PDF',
      description: 'Generate PDF documents with embedded tracking to report when and where they are opened, tracing information leaks.',
    },
    {
      icon: <MousePointer className="w-8 h-8 text-shakuni-accent" />,
      title: 'HTML Decoy Button',
      description: 'Embed HTML content with login buttons that trigger tracking events when clicked, detecting phishing attempts.',
    },
    {
      icon: <KeyRound className="w-8 h-8 text-shakuni-accent" />,
      title: 'Decoy Password File',
      description: 'Create files with hidden trackers to detect unauthorized access and alert on potential breaches immediately.',
    },
    {
      icon: <Mail className="w-8 h-8 text-shakuni-accent" />,
      title: 'Email Deception',
      description: 'Utilize email templates with embedded tracking links and pixels to monitor opens and interactions, identifying targeted attacks.',
    },
    {
      icon: <Router className="w-8 h-8 text-shakuni-accent" />,
      title: 'Decoy Access Point',
      description: 'Simulate a vulnerable Wi-Fi access point to capture connection attempts and gather intelligence on nearby threats.', // Placeholder
    },
    {
      icon: <Network className="w-8 h-8 text-shakuni-accent" />,
      title: 'Decoy Switch',
      description: 'Mimic network switch activity to detect unauthorized network scanning and lateral movement attempts.', // Placeholder
    },
    {
      icon: <Server className="w-8 h-8 text-shakuni-accent" />,
      title: 'Decoy Active Directory',
      description: 'Create fake Active Directory objects to lure attackers and identify compromised credentials or internal reconnaissance.', // Placeholder
    },
    {
      icon: <Factory className="w-8 h-8 text-shakuni-accent" />,
      title: 'Decoy SCADA',
      description: 'Simulate SCADA/ICS components to detect threats targeting critical industrial control systems.', // Placeholder
    },
     {
      icon: <ShieldQuestion className="w-8 h-8 text-shakuni-accent" />,
      title: 'Decoy Access Point (Alt)', // From image, seems like 'Decoy Access Point' was listed twice, or it's a different type
      description: 'Alternative decoy access point for broader network threat detection.', // Placeholder
    },
  ];

  const terraformDeployments = [
    {
      icon: <CloudCog className="w-8 h-8 text-shakuni-accent" />,
      title: 'Web Honeypot (High Interaction)',
      description: 'Deploy an EC2 instance running a fake login portal. Credentials entered are captured and forwarded to the backend API. Includes log rotation and cron jobs for continuous monitoring.',
    },
    {
      icon: <CloudCog className="w-8 h-8 text-shakuni-accent" />,
      title: 'S3 Bucket Honeypot',
      description: 'Provision an S3 bucket with logging and tagging to attract attackers and monitor unauthorized access, detecting data exfiltration attempts.',
    },
    {
      icon: <CloudCog className="w-8 h-8 text-shakuni-accent" />,
      title: 'Cloud Native Honeypot (Low/Medium Interaction)',
      description: 'Use AWS Secrets Manager and other cloud resources to create enticing targets. All access attempts are logged and reported for comprehensive threat visibility.',
    },
  ];

  return (
    <div className="bg-shakuni-dark-bg pt-2 sm:pt-3 pb-4 sm:pb-6"> {/* Further reduced padding */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-2 sm:pt-3 pb-4 sm:pb-6"> {/* Further reduced padding */}
        {/* Custom Deceptions Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-shakuni-text">Custom Deception Integrations</h2>
          <p className="text-lg text-shakuni-text-muted text-center mb-12 max-w-3xl mx-auto">
            Configure Alert Webhooks & Decoys. Set up integrations or generate decoys to capture interaction data.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Adjusted grid to lg:grid-cols-4 */}
            {customDeceptions.map((deception, index) => (
              <div key={index} className="bg-shakuni-bg p-6 rounded-lg border border-white/10 shadow-lg hover:shadow-shakuni-accent/20 transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-shakuni-accent/10 mb-4">
                  {deception.icon}
                </div>
                <h3 className="text-xl font-semibold text-shakuni-text mb-2">{deception.title}</h3>
                <p className="text-shakuni-text-muted text-sm leading-relaxed flex-grow">{deception.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terraform Honeypot Deployments Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-shakuni-text">Automated Honeypot Deployments with Terraform</h2>
          <p className="text-lg text-shakuni-text-muted text-center mb-12 max-w-3xl mx-auto">
            Leverage our comprehensive Terraform templates for seamless honeypot deployment on AWS, designed for robust security and easy customization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terraformDeployments.map((deployment, index) => (
              <div key={index} className="bg-shakuni-bg p-6 rounded-lg border border-white/10 shadow-lg hover:shadow-shakuni-accent/20 transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-shakuni-accent/10 mr-4">
                    {deployment.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-shakuni-text">{deployment.title}</h3>
                </div>
                <p className="text-shakuni-text-muted text-sm leading-relaxed">{deployment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;