import React from 'react';
import { Head } from './head.js';
import { Foot } from './foot.js';

const Body = () => (
<div id="body" class="doc">

<p>Terms of Service</p>

<p>Last Updated: 1/24/2026</p>

<p>These Terms of Service (“Terms”) govern your use of Liminal Encounters and any related services, applications, or platforms operated by Paralevels LLC (“we,” “us,” or “our”). By accessing or using our services, you agree to these Terms.</p>

<p>1. Use of the Service</p>

<p>Our service provides access to gaming experiences delivered through mobile applications and any other platforms we may choose to support. You agree to use the service only for lawful purposes and in accordance with these Terms.</p>

<p>We reserve the right to modify, suspend, or discontinue any part of the service at any time.</p>

<p>2. Intellectual Property</p>

<p>All content, features, and materials provided through the service—including but not limited to graphics, gameplay elements, text, and software—are owned by us or licensed to us. You may not copy, modify, distribute, or reverse‑engineer any part of the service unless expressly permitted by law.</p>

<p>3. User Conduct</p>

<p>You agree not to:</p>

<ul>
    <li>Interfere with or disrupt the operation of the service</li>

    <li>Attempt to gain unauthorized access to servers, systems, or networks</li>

    <li>Use the service in a way that violates applicable laws or regulations</li>
</ul>

<p>4. Third‑Party Services</p>

<p>The service may interact with or rely on third‑party tools or platforms. We are not responsible for the content, policies, or practices of any third‑party services.</p>

<p>5. Disclaimer of Warranties</p>

<p>The service is provided on an “as is” and “as available” basis. We make no warranties, express or implied, regarding the operation, availability, or performance of the service.</p>

<p>We do not guarantee that the service will be uninterrupted, error‑free, or free of harmful components.</p>

<p>6. Limitation of Liability</p>

<p>To the fullest extent permitted by law:</p>

<ul>
    <li>We are not liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of the service.</li>

    <li>Our total liability for any claim related to the service will not exceed the amount you paid to use the service, if any.</li>

    <li>You use the service at your own risk, and you are solely responsible for any damage to your device or loss of data resulting from your use of the service.</li>
</ul>

<p>7. Termination</p>

<p>We may suspend or terminate your access to the service at any time, with or without notice, for conduct that we believe violates these Terms or is otherwise harmful to the service or other users.</p>

<p>8. Changes to These Terms</p>

<p>We may update these Terms from time to time. Continued use of the service after changes are posted constitutes acceptance of the updated Terms.</p>

<p>9. Contact Us</p>

<p>If you have questions about these Terms, you may contact us at:</p>

<p>contact@paralevels.com</p>

</div>
);

export const Terms = () => (
  <div id="app">
    <Head />
    <Body />
    <Foot />
  </div>
);
