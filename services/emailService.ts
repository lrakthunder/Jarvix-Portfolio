export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp?: string;
}

export interface EmailTemplate {
  subject: string;
  htmlBody: string;
  textBody: string;
}

/**
 * Generates a JARVIX-themed email template from contact form data
 */
export const generateEmailTemplate = (formData: ContactFormData): EmailTemplate => {
  const timestamp = formData.timestamp || new Date().toISOString();
  const formattedDate = new Date(timestamp).toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long'
  });

  const subject = `🔵 New Contact: ${formData.name}`;

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Courier New', monospace;
      background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
      color: #e0f7ff;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: rgba(15, 23, 42, 0.95);
      border: 2px solid #06b6d4;
      box-shadow: 0 0 30px rgba(6, 182, 212, 0.3);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(90deg, #0e7490 0%, #06b6d4 100%);
      padding: 20px;
      text-align: center;
      border-bottom: 2px solid #22d3ee;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      letter-spacing: 4px;
      color: #ffffff;
      text-shadow: 0 0 10px rgba(34, 211, 238, 0.8);
    }
    .status-bar {
      background: rgba(6, 182, 212, 0.1);
      padding: 10px 20px;
      border-bottom: 1px solid #06b6d4;
      font-size: 11px;
      color: #22d3ee;
      letter-spacing: 2px;
    }
    .content {
      padding: 30px 20px;
    }
    .field-group {
      margin-bottom: 25px;
      border-left: 3px solid #06b6d4;
      padding-left: 15px;
    }
    .field-label {
      font-size: 10px;
      color: #22d3ee;
      letter-spacing: 2px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    .field-value {
      font-size: 14px;
      color: #e0f7ff;
      line-height: 1.6;
      word-wrap: break-word;
    }
    .message-box {
      background: rgba(6, 182, 212, 0.05);
      border: 1px solid #06b6d4;
      padding: 15px;
      margin-top: 10px;
      border-radius: 4px;
    }
    .footer {
      background: rgba(6, 182, 212, 0.05);
      padding: 20px;
      text-align: center;
      border-top: 2px solid #06b6d4;
      font-size: 11px;
      color: #64748b;
    }
    .corner-decor {
      width: 40px;
      height: 40px;
      position: absolute;
    }
    .top-left {
      top: 0;
      left: 0;
      border-top: 2px solid #22d3ee;
      border-left: 2px solid #22d3ee;
    }
    .bottom-right {
      bottom: 0;
      right: 0;
      border-bottom: 2px solid #22d3ee;
      border-right: 2px solid #22d3ee;
    }
    a {
      color: #22d3ee;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>⚡ JARVIX UPLINK ⚡</h1>
    </div>
    
    <div class="status-bar">
      ▸ STATUS: TRANSMISSION RECEIVED | ENCRYPTION: VERIFIED | PRIORITY: STANDARD
    </div>
    
    <div class="content">
      <div class="field-group">
        <div class="field-label">◆ ORIGIN SIGNATURE</div>
        <div class="field-value">${escapeHtml(formData.name)}</div>
      </div>
      
      <div class="field-group">
        <div class="field-label">◆ COMMS CHANNEL</div>
        <div class="field-value">
          <a href="mailto:${escapeHtml(formData.email)}">${escapeHtml(formData.email)}</a>
        </div>
      </div>
      
      <div class="field-group">
        <div class="field-label">◆ TRANSMISSION TIMESTAMP</div>
        <div class="field-value">${formattedDate}</div>
      </div>
      
      <div class="field-group">
        <div class="field-label">◆ ENCRYPTED MESSAGE</div>
        <div class="message-box">
          <div class="field-value">${escapeHtml(formData.message).replace(/\n/g, '<br>')}</div>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <p>This message was or will be sent via your portfolio contact form</p>
      <p>© ${new Date().getFullYear()} JARVIX Portfolio System</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  const textBody = `
═══════════════════════════════════════════════════
⚡ JARVIX UPLINK - NEW TRANSMISSION RECEIVED ⚡
═══════════════════════════════════════════════════

▸ STATUS: TRANSMISSION RECEIVED
▸ ENCRYPTION: VERIFIED
▸ PRIORITY: STANDARD

───────────────────────────────────────────────────
◆ ORIGIN SIGNATURE
───────────────────────────────────────────────────
${formData.name}

───────────────────────────────────────────────────
◆ COMMS CHANNEL
───────────────────────────────────────────────────
${formData.email}

───────────────────────────────────────────────────
◆ TRANSMISSION TIMESTAMP
───────────────────────────────────────────────────
${formattedDate}

───────────────────────────────────────────────────
◆ ENCRYPTED MESSAGE
───────────────────────────────────────────────────
${formData.message}

═══════════════════════════════════════════════════
This message was sent via your portfolio contact form
© ${new Date().getFullYear()} JARVIX Portfolio System
═══════════════════════════════════════════════════
  `.trim();

  return {
    subject,
    htmlBody,
    textBody
  };
};

/**
 * Escapes HTML special characters to prevent XSS
 */
const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
};

const RATE_LIMIT_KEY = 'jarvis_contact_last_sent';
const RATE_LIMIT_HOURS = 24;

/**
 * Checks if the user can send an email based on rate limiting
 */
export const canSendEmail = (): { allowed: boolean; timeRemaining?: string } => {
  const lastSent = localStorage.getItem(RATE_LIMIT_KEY);
  
  if (!lastSent) {
    return { allowed: true };
  }

  const lastSentTime = new Date(lastSent).getTime();
  const now = new Date().getTime();
  const hoursPassed = (now - lastSentTime) / (1000 * 60 * 60);

  if (hoursPassed >= RATE_LIMIT_HOURS) {
    return { allowed: true };
  }

  // Calculate remaining time
  const hoursRemaining = Math.ceil(RATE_LIMIT_HOURS - hoursPassed);
  const timeRemaining = hoursRemaining === 1 ? '1 hour' : `${hoursRemaining} hours`;

  return { allowed: false, timeRemaining };
};

/**
 * Sends contact form email via Formspree with HTML template embedded
 * No backend required - works entirely client-side
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Check rate limiting
    const rateCheck = canSendEmail();
    if (!rateCheck.allowed) {
      return {
        success: false,
        message: `⏱ Rate limit: Wait ${rateCheck.timeRemaining} before sending another message`
      };
    }

    const FORMSPREE_FORM_ID = 'xwvogznr';

    // Add timestamp if not provided
    const dataWithTimestamp = {
      ...formData,
      timestamp: formData.timestamp || new Date().toISOString()
    };

    // Generate the email template
    const template = generateEmailTemplate(dataWithTimestamp);

    // Submit to Formspree with formatted content
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: template.subject,
        _replyto: formData.email,
        _format: 'plain', // Use plain format to preserve formatting
        // Include formatted message
        formatted_message: `
═══════════════════════════════════════
⚡ JARVIX UPLINK - NEW TRANSMISSION ⚡
═══════════════════════════════════════

👤 FROM: ${formData.name}
📧 EMAIL: ${formData.email}
⏰ TIME: ${new Date(dataWithTimestamp.timestamp).toLocaleString()}

───────────────────────────────────────
MESSAGE:
───────────────────────────────────────
${formData.message}
        `.trim()
      })
    });

    const responseData = await response.json();

    if (response.ok) {
      // Store timestamp for rate limiting
      localStorage.setItem(RATE_LIMIT_KEY, dataWithTimestamp.timestamp);
      
      console.log('✅ Email sent successfully via Formspree');
      console.log('Response:', responseData);
      return {
        success: true,
        message: '✓ Transmission Complete - Message Delivered'
      };
    } else {
      console.error('❌ Formspree error:', response.status, responseData);
      
      // Check for common errors
      if (responseData.error) {
        console.error('Error details:', responseData.error);
      }
      if (responseData.errors) {
        console.error('Validation errors:', responseData.errors);
      }
      
      return {
        success: false,
        message: `✗ Failed: ${responseData.error || 'Unknown error'}`
      };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: '✗ Connection error. Please try again.'
    };
  }
};

/**
 * Preview the email template in a new window
 */
export const previewEmailTemplate = (formData: ContactFormData): void => {
  const template = generateEmailTemplate(formData);
  const previewWindow = window.open('', '_blank');
  if (previewWindow) {
    previewWindow.document.write(template.htmlBody);
    previewWindow.document.close();
  }
};
