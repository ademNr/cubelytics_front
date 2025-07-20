# Cubelytics
    
    > Unlock Market Insights with AI-Powered Product Analysis
    
    ![Language](https://img.shields.io/badge/Language-TypeScript-blue) ![Framework](https://img.shields.io/badge/Framework-Next.js-black) ![Styling](https://img.shields.io/badge/Styling-Tailwind CSS-cyan)
    
    ## 📝 Description
    An AI-powered frontend application for comprehensive product market analysis, allowing users to analyze products, view historical reports, and gain market insights.
    
    ## ✨ Features
    - AI-powered Product Market Analysis: Submit product details (title, country, keywords, image URL) for in-depth market reports.
- Comprehensive Market Reports: Generate detailed reports covering product trends, market saturation, audience profiles, pricing, and platform strategies.
- Ad Creative Analysis: View and analyze specific ad creatives (images/videos, text, calls to action) found during market scans.
- Historical Analysis Tracking: Access and review all past product analysis reports with a dedicated history table.
- Dashboard Overview: Get quick insights into key metrics like products analyzed, markets covered, and ads monitored.
- Actionable Insights & Verdicts: Receive clear recommendations and final verdicts on product viability and launch strategies.
- Responsive User Interface: Built with Next.js and Tailwind CSS for a modern and adaptable user experience.
    
    ## 🛠️ Tech Stack
    - TypeScript
- Next.js
- React
- Tailwind CSS
- Lucide React
- Vercel
    
    ## ⚙️ Installation
    ### Requirements
    - Node.js (LTS recommended)
- npm or Yarn
    
    ### Steps
    Clone the repository: `git clone https://github.com/ademNr/cubelytics_front.git`
Navigate to the project directory: `cd cubelytics_front`
Install dependencies: `npm install` or `yarn install`
Start the development server: `npm run dev` or `yarn dev`
Access the application at `http://localhost:3000` (default Next.js port).
Note: This frontend requires a running backend service. The provided code uses a hardcoded Vercel backend URL (`https://cubelytics-backend-lzji.vercel.app`).
    
    ## 🚀 Usage
    ### Basic
    After starting the application, navigate to the 'Analyze Product' section. Fill in the product title, target country, relevant keywords, and an example image URL. Click 'Analyze Product' to generate a comprehensive report.
    
    ### Advanced
    Once a report is generated, you will be redirected to its dedicated page. Explore various sections like 'Product Trend Insights', 'Market Saturation', and 'Ad Previews'. Click on individual ad previews to view detailed ad creative analysis. All your past analyses can be reviewed in the 'History' section.
    
    ## 🌐 API Reference
    
    ### `POST /api/analyze`
    Submits product details to the backend for market analysis.
    
    **Parameters:**
    - `productTitle` (string) [required]: Title of the product to analyze.
- `targetCountry` (string) [required]: The target market country for the product.
- `keywords` (string) [required]: Comma-separated keywords related to the product.
- `imageUrl` (string) [required]: URL of an example product image.
    
    **Example:**
    ```bash
    curl -X POST \
  https://cubelytics-backend-lzji.vercel.app/api/analyze \
  -H 'Content-Type: application/json' \
  -d '{
    "productTitle": "Wireless Bluetooth Headphones",
    "targetCountry": "USA",
    "keywords": "bluetooth headphones, noise cancelling, over-ear",
    "imageUrl": "https://example.com/headphone.jpg"
  }'
    ```
    

    ### `GET /api/dashboard-metrics`
    Fetches aggregate metrics for the dashboard (e.g., products analyzed, markets covered, ads monitored).
    
    **Parameters:**
    
    
    **Example:**
    ```bash
    curl https://cubelytics-backend-lzji.vercel.app/api/dashboard-metrics
    ```
    

    ### `GET /api/history`
    Retrieves a list of all past product analysis reports.
    
    **Parameters:**
    
    
    **Example:**
    ```bash
    curl https://cubelytics-backend-lzji.vercel.app/api/history
    ```
    

    ### `GET /api/history/{id}`
    Fetches a specific detailed product analysis report by its unique ID.
    
    **Parameters:**
    - `id` (string) [required]: The unique identifier of the analysis report.
    
    **Example:**
    ```bash
    curl https://cubelytics-backend-lzji.vercel.app/api/history/report_id_123
    ```
    
    
    ## 📂 File Structure
    - `app/`: Next.js App Router root directory.
- `app/(main)/`: Grouped routes for the main application pages (dashboard, analyze, history, settings, help).
- `app/(main)/analyze/page.tsx`: Frontend page for submitting product analysis requests.
- `app/(main)/dashboard/page.tsx`: Dashboard page displaying key metrics and recent analysis history.
- `app/(main)/history/`: Contains pages related to analysis history.
- `app/(main)/history/page.tsx`: Page listing all past product analysis reports.
- `app/(main)/history/[id]/page.tsx`: Dynamic page displaying a detailed product analysis report.
- `app/(main)/history/[id]/ad/[adId]/page.tsx`: Dynamic page for viewing detailed information about a specific ad creative.
- `app/(main)/layout.tsx`: Main application layout including sidebar and header.
- `app/landing/`: Contains pages specific to the application's landing page.
- `app/landing/page.tsx`: The main landing page of the application.
- `app/layout.tsx`: Root HTML layout for the Next.js application, including metadata.
- `app/lib/`: Directory for utility functions and helper modules.
- `components/`: Reusable React components used throughout the application.
- `components/ui/`: Generic UI components (e.g., Card, Badge) built with Tailwind CSS.
- `components/history/HistoryTable.tsx`: Component for displaying a table of analysis history.
- `components/layout/`: Components related to the application's layout (e.g., Header, Sidebar).
- `components/report/`: Components specifically designed for displaying sections of product analysis reports.
- `public/`: Static assets directory (e.g., images).
- `types/`: TypeScript type definitions for data structures like Scan and Report.
    
    ## 🤝 Contributing
    ### Setup
    Not specified in the provided code.
    
    ### Guidelines
    Not specified in the provided code.
    
    ### Process
    Not specified in the provided code.
    
    ## 📜 License
    This project is licensed under the Not specified License.
    
    ## 👤 Author
    Not specified
