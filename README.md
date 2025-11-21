# Ready — Portfolio Webpage

This is a **responsive, cloud-themed portfolio website** that I edited using **Cursor AI**, deployed on **AWS EC2**, and managed via **GitHub**. The project demonstrates my hands-on experience with AI-assisted code edits, cloud deployment, and version control.

> ⚠️ Note: The website is currently **not live**. The EC2 instance was stopped to control costs, but all files and deployment instructions are included here.

---

## 🗂 Repository Structure (Top-Level)

Ready/ ├── index.html ├── css/ ├── js/ ├── img/ ├── Dockerfile └── .github/

---

## Technologies Used

- **Frontend Editing:** HTML, CSS, JavaScript (edited, not written from scratch)  
- **AI Tool:** Cursor AI (for editing and debugging code)  
- **Version Control:** Git + GitHub  
- **Deployment:** AWS EC2 (static site hosting), Docker (optional container setup)  
- **Monitoring / Logging:** Datadog, Grafana  
- **Form Handling:** Formspree for contact form submissions  

---

## ⚡ Features

- Responsive cloud-themed design  
- Portfolio showcase with images, pipeline diagrams, and AWS architecture diagrams  
- Contact form integrated with Formspree  
- Demonstrates AI-assisted code editing workflow and cloud deployment setup  

---

## 🚀 Deployment Instructions

1. **Clone the repository**  
```bash
git clone https://github.com/EkongDevops/Ready.git
cd Ready

2. Edit code using Cursor AI + Bash



Modify HTML, CSS, or JS files as needed

Commit and push changes:


git add .
git commit -m "Update portfolio"
git push

3. Deploy on AWS EC2



SSH into your EC2 instance:


ssh -i /path/to/key.pem ec2-user@your-ec2-ip

Copy files to the web directory:


scp -r ./index.html ./css ./js ./img ec2-user@your-ec2-ip:/var/www/html/

Restart your web server:


sudo systemctl restart nginx

4. Optional Docker deployment



Build Docker image:


docker build -t ready-portfolio .

Run container:


docker run -d -p 80:80 ready-portfolio


📌 Notes

EC2 instance is not live to save costs; instructions included for redeployment.

Contact form requires a Formspree endpoint; see instructions in index.html.

All edits were made using Cursor AI and tracked via GitHub.



---

📬 Contact

GitHub: github.com/EkongDevops

Email: christopher.ekong@gmail.com

LinkedIn: linkedin.com/in/christopherekong
