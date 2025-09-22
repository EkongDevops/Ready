Portfolio Site - README
=======================

This zip contains a responsive, cloud-themed portfolio site ready for editing in VS Code and hosting on S3 + CloudFront.

Folder structure:
- index.html
- css/style.css
- js/script.js
- img/ (profile.jpg, linkedin.png, aws-architecture.png, devops-pipeline.png, cloud-security.png)

Contact form setup (Formspree):
1. Go to https://formspree.io and create a free form. They will provide an endpoint like:
   https://formspree.io/f/XXXXXXXX
2. Replace the placeholder in index.html form action attribute:
   action="https://formspree.io/f/{YOUR_FORM_ID}" with your actual endpoint.
3. Verify your email with Formspree to start receiving messages at your email address (christopher.ekong@gmail.com).

Notes on hosting:
- Upload all files to an S3 bucket and set up CloudFront with OAC for secure HTTPS delivery.
- Keep Block Public Access ON if using CloudFront origin access control.
- Use ACM to attach an SSL certificate to your CloudFront distribution.

If you want, I can replace the placeholder images with images you supply, or embed your real profile photo directly into the files for you.
