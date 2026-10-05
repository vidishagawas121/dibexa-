/**
 * Dibexa Infotech - Enterprise Inquiry Webhook & Lead Automation
 * 
 * Web App URL: https://script.google.com/macros/s/AKfycbzN8Ez_bv05hyQ6aT2BMqdMzJjLMomxNdXsp6QPgtSPCnA8oSUKO-5SvIvP_XplS95z/exec
 * Library: https://script.google.com/macros/library/d/1mzfUdNLmdc8Q5QfQxdJa4XnzYQrd8_z3AidfuLYz0r0Cpeg_NAvu-FNJ/6
 */

const TO_ADDRESS = "dibexainfotech@gmail.com";

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const data = e.parameter;
    const currentDate = new Date();
    
    // 1. Generate the Current Month's Sheet Name (e.g., "September 2026")
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthName = monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();
    
    // 2. Try to get the sheet for the current month. If it doesn't exist, create it!
    let sheet = ss.getSheetByName(currentMonthName);
    
    if (!sheet) {
      sheet = ss.insertSheet(currentMonthName);
      // Add Headers since it's a brand new sheet
      sheet.appendRow([
        "Timestamp", "Full Name", "Company", "Email", "Phone", 
        "Service", "Budget", "Timeline", "Project Details"
      ]);
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#f3f4f6");
      sheet.setFrozenRows(1); // Freezes the top row
    }
    
    // 3. Log the actual inquiry data into the correct month's sheet
    sheet.appendRow([
      currentDate, 
      data.fullName || "", 
      data.companyName || "", 
      data.email || "", 
      data.phone || "", 
      data.serviceInterestedIn || "", 
      data.budgetRange || "", 
      data.timeline || "", 
      data.projectDetails || ""
    ]);
    
    // ====================================================================
    // 4. Send the Internal Lead Notification (To You / Your Boss)
    // ====================================================================
    const internalSubject = "🚨 New Lead: " + (data.companyName || data.fullName || "Inquiry") + " (" + (data.serviceInterestedIn || "General") + ")";
    const internalHtmlBody = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 8px;">
        <div style="background-color: #0f172a; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Enterprise Lead</h1>
          <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 14px;">Submitted via Dibexa Infotech Website</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
          <h2 style="color: #0f172a; font-size: 18px; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 500;">Name:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.fullName || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 500;">Company:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.companyName || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 500;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${data.email || "N/A"}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 500;">Phone:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.phone || "N/A"}</td></tr>
          </table>

          <h2 style="color: #0f172a; font-size: 18px; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Project Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 500;">Service:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.serviceInterestedIn || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 500;">Budget:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.budgetRange || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 500;">Timeline:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.timeline || "N/A"}</td></tr>
          </table>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #2563eb;">
            <p style="color: #64748b; margin: 0 0 8px 0; font-size: 13px; font-weight: 600; text-transform: uppercase;">Message / Scope:</p>
            <p style="color: #0f172a; margin: 0; line-height: 1.6;">${data.projectDetails ? data.projectDetails.replace(/\n/g, '<br>') : 'None provided'}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center;">
            <a href="mailto:${data.email}?subject=Re: Your Inquiry to Dibexa Infotech" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: 600; display: inline-block;">Reply Directly to ${(data.fullName || "Lead").split(' ')[0]}</a>
          </div>
        </div>
      </div>
    `;
    
    MailApp.sendEmail({
      to: TO_ADDRESS,
      replyTo: data.email, 
      subject: internalSubject,
      htmlBody: internalHtmlBody
    });

    // ====================================================================
    // 5. Send the Sophisticated Automated Reply (To the Customer)
    // ====================================================================
    if (data.email) {
      const customerSubject = "Your AI Requirement Is Now With Our Team | Dibexa Infotech";
      const customerHtmlBody = `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #1e293b; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          
          <div style="background-color: #0f172a; background-image: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); text-align: center; padding: 40px 20px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 4px; text-transform: uppercase;">DIBEXA INFOTECH</h2>
            <div style="height: 1px; width: 40px; background-color: #3b82f6; margin: 20px auto 0;"></div>
          </div>
          
          <div style="padding: 45px 40px; background-color: #ffffff; line-height: 1.8;">
            <p style="font-size: 16px; margin-top: 0; color: #334155;">Dear ${(data.fullName || "Partner").split(' ')[0]},</p>
            
            <p style="font-size: 16px; color: #334155;">Thank you for initiating a conversation with Dibexa Infotech. We have successfully registered your inquiry regarding <strong>${data.serviceInterestedIn || "Enterprise AI"}</strong>.</p>
            
            <p style="font-size: 16px; color: #334155;">At Dibexa, we partner with visionary organizations to engineer scalable digital architectures and intelligent automation. Your project details have been securely routed to our Enterprise Solutions team for an immediate technical review.</p>
            
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin: 35px 0; border: 1px solid #f1f5f9;">
              <p style="margin: 0 0 10px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Inquiry Reference</p>
              <p style="margin: 0 0 5px 0; font-size: 15px; color: #0f172a;"><strong>Capability Focus:</strong> ${data.serviceInterestedIn || "Enterprise Solutions"}</p>
              <p style="margin: 0; font-size: 15px; color: #0f172a;"><strong>Organization:</strong> ${data.companyName || 'Private'}</p>
            </div>
            
            <p style="font-size: 16px; color: #334155;">A dedicated technical consultant will contact you shortly to schedule an initial discovery architecture session.</p>
            
            <p style="font-size: 16px; color: #334155;">Should you wish to provide additional documentation or technical specifications in advance, simply reply directly to this communication.</p>
            
            <div style="margin-top: 45px;">
              <p style="font-size: 16px; margin-bottom: 5px; color: #334155;">Sincerely,</p>
              <p style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0; letter-spacing: 0.5px;">Business Development Team</p>
              <p style="font-size: 14px; color: #64748b; margin: 5px 0 0 0;">Dibexa Infotech Pvt. Ltd.</p>
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 30px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-weight: 600; letter-spacing: 1px;">ENGINEERING THE MODERN ENTERPRISE</p>
            <p style="margin: 15px 0 0 0;">© ${new Date().getFullYear()} Dibexa Infotech Pvt. Ltd. All rights reserved.</p>
            <p style="margin: 5px 0 0 0;">This transmission is confidential and intended solely for the authorized recipient.</p>
          </div>
        </div>
      `;
      
      MailApp.sendEmail({
        to: data.email,
        subject: customerSubject,
        htmlBody: customerHtmlBody,
        name: "Dibexa Infotech"
      });
    }
    
    // Return success to the website
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error to the website if something fails
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": String(error) })).setMimeType(ContentService.MimeType.JSON);
  }
}
