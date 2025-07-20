# Cubelytics
    
    > Unlock Market Insights with AI-Powered Product Analysis.
    
    ![Status](https://img.shields.io/badge/Status-Frontend-blue) ![Language](https://img.shields.io/badge/Language-TypeScript-blue) ![Framework](https://img.shields.io/badge/Framework-Next.js-black)
    
    ## 📝 Description
    AI-powered product market analysis tool.
    
    ## ✨ Features
    - AI-powered comprehensive product market analysis reports.
- Detailed insights on product trends, market saturation, audience profiles, and pricing.
- Analysis of ad creatives and search demand.
- Historical tracking and review of all product analysis reports.
- Dashboard displaying key metrics like products analyzed, markets covered, and ads monitored.
- User-friendly interface for submitting product details for analysis.
    
    ## 🛠️ Tech Stack
    - Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Vercel
    
    ## ⚙️ Installation
    ### Requirements
    - Node.js (LTS recommended)
- npm or yarn
    
    ### Steps
    Clone the repository: `git clone https://github.com/ademNr/cubelytics_front.git`
Navigate to the project directory: `cd cubelytics_front`
Install dependencies: `npm install` (or `yarn install`)
Run the development server: `npm run dev` (or `yarn dev`)
Open your browser to `http://localhost:3000`
    
    ## 🚀 Usage
    ### Basic
    After launching the application, navigate to the 'Analyze Product' page. Fill in the product title, target country, relevant keywords, and an optional example image URL. Submit the form to initiate an AI-powered market analysis. You will be redirected to the detailed report upon completion.
    
    ### Advanced
    Explore the 'Dashboard' to view overall statistics and key metrics. Visit the 'Analysis History' section to review all your past reports. Each report provides in-depth insights, including ad previews, search demand, market saturation, and an action plan. You can click on individual ads within a report for a detailed view of their creative.
    
    ## 🌐 API Reference
    
    ### `POST https://cubelytics-backend-lzji.vercel.app/api/analyze`
    Initiates a new product market analysis by sending product details to the backend.
    
    **Parameters:**
    - `productTitle` (string) [required]: Title of the product to analyze.
- `targetCountry` (string) [required]: Target country for market analysis.
- `keywords` (string) [required]: Comma-separated keywords related to the product.
- `imageUrl` (string): URL of an example product image.
    
    **Example:**
    ```bash
    fetch('https://cubelytics-backend-lzji.vercel.app/api/analyze', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ productTitle: 'Wireless Bluetooth Headphones', targetCountry: 'USA', keywords: 'headphones, wireless, audio', imageUrl: 'https://example.com/image.jpg' }) })
    ```
    

    ### `GET https://cubelytics-backend-lzji.vercel.app/api/dashboard-metrics`
    Fetches aggregated metrics for the dashboard, such as products analyzed, markets covered, and ads monitored.
    
    **Parameters:**
    
    
    **Example:**
    ```bash
    fetch('https://cubelytics-backend-lzji.vercel.app/api/dashboard-metrics')
    ```
    

    ### `GET https://cubelytics-backend-lzji.vercel.app/api/history`
    Retrieves a list of all past product analysis reports.
    
    **Parameters:**
    
    
    **Example:**
    ```bash
    fetch('https://cubelytics-backend-lzji.vercel.app/api/history')
    ```
    

    ### `GET https://cubelytics-backend-lzji.vercel.app/api/history/{id}`
    Fetches a specific detailed product analysis report by its ID.
    
    **Parameters:**
    - `id` (string) [required]: The unique ID of the analysis report.
    
    **Example:**
    ```bash
    fetch('https://cubelytics-backend-lzji.vercel.app/api/history/654321')
    ```
    
    
    ## 📂 File Structure
    - `app/`: Next.js application directory containing pages, layouts, and client-side components.
- `components/`: Reusable React components for UI elements, layout, history tables, and report sections.
- `public/`: Static assets like images (e.g., application logo).
- `types/`: TypeScript type definitions for data structures like `Scan` and `Report`.
- `lib/`: Utility functions and helper modules.
    
    ## 🤝 Contributing
    ### Setup
    Contribution guidelines are not yet defined. Please contact the repository owner for development setup instructions.
    
    ### Guidelines
    Code style guidelines are not explicitly defined. Please follow standard TypeScript and React best practices.
    
    ### Process
    The pull request process is not yet defined. Please open an issue to discuss any proposed changes before submitting a pull request.
    
    ## 📜 License
    This project is licensed under the Proprietary License.
    
    ## 👤 Author
    The Cubelytics Team
