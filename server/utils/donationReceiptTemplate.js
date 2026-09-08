/**
 * Donation Receipt Email Template
 * Used to send donation receipts to donors
 */

const donationReceiptTemplate = (donation) => {
  const date = new Date(donation.createdAt).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Donation Receipt - ONEWAY FOUNDATION</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
  
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
          ONEWAY FOUNDATION
        </h1>
        <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">
          Serving Humanity Since 2017
        </p>
      </td>
    </tr>

    <!-- Thank You Message -->
    <tr>
      <td style="padding: 40px 30px 20px 30px; text-align: center;">
        <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 24px;">
          Thank You for Your Generosity! 🙏
        </h2>
        <p style="color: #6b7280; margin: 0; font-size: 16px; line-height: 1.6;">
          Dear <strong>${donation.name}</strong>,
          <br><br>
          Thank you for your generous donation of 
          <strong style="color: #f97316; font-size: 20px;">₹${donation.amount.toLocaleString('en-IN')}</strong>.
          Your support makes a real difference in the lives of those we serve.
        </p>
      </td>
    </tr>

    <!-- Receipt Details -->
    <tr>
      <td style="padding: 0 30px 30px 30px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="padding: 20px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px;">Receipt Number</span>
                    <br>
                    <span style="color: #1f2937; font-size: 16px; font-weight: 600;">OWF-${donation._id.toString().slice(-8).toUpperCase()}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px;">Donor Name</span>
                    <br>
                    <span style="color: #1f2937; font-size: 16px; font-weight: 600;">${donation.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px;">Email</span>
                    <br>
                    <span style="color: #1f2937; font-size: 16px;">${donation.email}</span>
                  </td>
                </tr>
                ${donation.phone ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px;">Phone</span>
                    <br>
                    <span style="color: #1f2937; font-size: 16px;">${donation.phone}</span>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px;">Donation Amount</span>
                    <br>
                    <span style="color: #f97316; font-size: 20px; font-weight: 700;">₹${donation.amount.toLocaleString('en-IN')}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px;">Payment ID</span>
                    <br>
                    <span style="color: #1f2937; font-size: 14px; font-family: monospace;">${donation.paymentId}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;">
                    <span style="color: #6b7280; font-size: 14px;">Date</span>
                    <br>
                    <span style="color: #1f2937; font-size: 16px;">${date}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Tax Exemption Note -->
    <tr>
      <td style="padding: 0 30px 30px 30px;">
        <div style="background-color: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 15px;">
          <p style="color: #065f46; margin: 0; font-size: 14px;">
            <strong>📋 Tax Exemption:</strong> 
            ONEWAY FOUNDATION is a registered NGO under Section 80G of the Income Tax Act.
            Your donation is eligible for tax exemption. 
            <strong>PAN: ABJFS7865R</strong>
          </p>
        </div>
      </td>
    </tr>

    <!-- What Your Donation Does -->
    <tr>
      <td style="padding: 0 30px 30px 30px;">
        <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">What Your Donation Does 💝</h3>
        <ul style="color: #6b7280; margin: 0; padding-left: 20px; line-height: 1.8;">
          <li>Provides medical support to those in need</li>
          <li>Supports education for underprivileged children</li>
          <li>Feeds the hungry through our food distribution program</li>
          <li>Provides shelter and living support to families</li>
          <li>Emergency relief during crises</li>
        </ul>
      </td>
    </tr>

    <!-- Contact Info -->
    <tr>
      <td style="background-color: #1f2937; padding: 30px; text-align: center;">
        <p style="color: #9ca3af; margin: 0 0 10px 0; font-size: 14px;">
          <strong>ONEWAY FOUNDATION</strong>
        </p>
        <p style="color: #9ca3af; margin: 0 0 5px 0; font-size: 13px;">
          📍 PGI Hospital, Chandigarh, India
        </p>
        <p style="color: #9ca3af; margin: 0 0 5px 0; font-size: 13px;">
          📞 +91 98765 43210
        </p>
        <p style="color: #9ca3af; margin: 0 0 15px 0; font-size: 13px;">
          ✉️ info@onewayfoundation.info
        </p>
        <p style="color: #6b7280; margin: 0; font-size: 12px;">
          <a href="https://onewayfoundation.org" style="color: #f97316; text-decoration: none;">Website</a> | 
          <a href="https://instagram.com/oneway_foundation_" style="color: #f97316; text-decoration: none;">Instagram</a> | 
          <a href="https://facebook.com/share/17uZ3sf7DP/" style="color: #f97316; text-decoration: none;">Facebook</a>
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="color: #9ca3af; margin: 0; font-size: 12px;">
          This is an automated receipt. Please retain this for your tax purposes.
        </p>
        <p style="color: #9ca3af; margin: 5px 0 0 0; font-size: 11px;">
          © ${new Date().getFullYear()} ONEWAY FOUNDATION. All Rights Reserved.
        </p>
      </td>
    </tr>
  </table>

</body>
</html>
  `;
};

export default donationReceiptTemplate;

