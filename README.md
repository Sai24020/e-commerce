# 🚀 🚀 Demo _ IndividuelltProjekt
# # 🚀 🚀 Deploy on Vercel
# 🚀 🚀 https://supal.vercel.app/   🚀 🚀

 # https://suzan-git-master-sai24020s-projects.vercel.app/
 Behöver inte email och user password
 
  # https://suzan-virid.vercel.app/login
  Behöver email:sm_pal_2025@info.se  password:2025
  
 ## 🚀  Min tema :
 Tema: Vad valde de för tema: "Productsdatabase" "E-Commerse"
 
 ## 🚀  SUMA Shop (SM_PAL_2025)
 är en modern, responsiv shoppingwebbplatsdemo
 byggd med Next.js och Tailwind CSS.
 Den har ett rent användargränssnitt,
 intuitiv navigering 
 och viktig e-handelsfunktionalitet – perfekt som grund för en fullfjädrad onlinebutik.
 med login

 ## 🚀   Funktioner
 -  Fullt responsiv layout
 -  Snabb prestanda med ett smidigt användargränssnitt
 -  Produktkategorier och listor av tags
 -  Individuella sidor med produktinformation
 -  Missa Filtrerings- och sorteringsalternativ men i framtid jag fixa den
 -  Lägg till i varukorgen funktionalitet och behöver fixa i LS också ,då  just nu inte spara när refresh data då data ta bort från cart page
 
 ## 🛠️ Teknisk stack
  - [Next.js](https://nextjs.org/)  
  - [React](https://reactjs.org/)  
  - [Tailwind CSS](https://tailwindcss.com/)  
  - [TypeScript](https://www.typescriptlang.org/)  
  - [shadcn/ui](https://ui.shadcn.com/)  
  - [Lucide Icons](https://lucide.dev/)  
  - [Aceternity UI](https://ui.aceternity.com/)  https://ui.aceternity.com/components/background-gradient
  - [Vercel](https://vercel.com/)   
 
 ![image](https://github.com/user-attachments/assets/b12084b3-a5a5-48c9-a4db-d7811609cbf5)
 ![image](https://github.com/user-attachments/assets/5b328814-c764-4d96-bab7-dcc3f270161d)

  
 ## 🚀  API-val och varför valde du just det?:
 API-val: [dummyjson API](https://dummyjson.com/docs/products).Det lätare men sen behöver vet hur kan göra i annan sätt
 
 ## 🚀 Vad var de största utmaningarna under projektet?
 Hantering av API-data. cartfunction utan LocalStorage men fixa den i framtid och favoritfunktionen med Local Storage funkar bra.Auth_supbase det behöver fixa också den nya för mig
 
 ## 🚀  Data Source: Använder API-Url som
 Drivs för närvarande av [dummyjson API](https://dummyjson.com/docs/products).
 
 ## 🚀 Arbetsgång Planering:
 Skapa en wireframe och planera funktionaliteten för din applikation.
 
 ## 🚀 Implementering av Local Storage:
 Börja med att implementera CRUD-funktionalitet med Local Storage ,änvanda LS i favourite page.
 
 ## 🚀 API-integration:
 Hämta och visa data från ditt valda API.
 
 ## 🚀 Felhantering:
 Lägg till felhantering för att hantera olika scenarier som kan uppstå.
 
 ## 🚀 Förbättringar:
 Lägg till extra funktioner eller förbättra användarupplevelsen.
 
  ## 📁 Getting Started
  
  ### 🚀  Installation
  
  Clone the repo and install dependencies:
  
  ```bash
  git clone https://github.com/Sai24020/suzan-project.git
  cd suzan-project
  npm install
  ```
  
  ### 🚀  Running the App
  
  To start the development server:
  
  ```bash
  npm run dev
  ```
  
  Then open your browser at http://localhost:3000.
 
 ## 🚀 🚀 Deploy on Vercel
 ## vi arbetar att lösa Error ..kvar 3 error just nu behöver lösa 
 
 Build Logs
 48s
 All Logs (40)
 ⑧ Errors (3)
 A Warnings（0)
 
 Failed to compile.
 app/page.tsx
 Type error: Type '{ searchParams?: { [key: string]: string | string[] | undefined; } | undefined; }' does not satisfy the constraint 'PageProps'.
   Types of property 'searchParams' are incompatible.
     Type '{ [key: string]: string | string[] | undefined; } | undefined' is not assignable to type 'Promise<any> | undefined'.
       Type '{ [key: string]: string | string[] | undefined; }' is missing the following properties from type 'Promise<any>': then, catch, finally, [Symbol.toStringTag]
 Next.js build worker exited with code: 1 and signal: null
 Error: Command "npm run build" exited with 1
 
 
 ## här inställningen ignorerar ESLint-fel vid bygg (build) på Vercel
 
 ![image](https://github.com/user-attachments/assets/b0a91bef-3991-4567-8a50-893046059d41)
 
   //file : next.config.ts
 
   },
   //Den här inställningen ignorerar ESLint-fel vid bygg (build) på Vercel
   eslint: {
     ignoreDuringBuilds: true,
   },
 };
 
 export default nextConfig;
 
 ![image](https://github.com/user-attachments/assets/9bdc5eec-8eb3-4ec2-a32c-b1b76abb8ff2)
 
 
 This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
 
  ## Idag ta bort den file här inställningen ignorerar ESLint-fel vid bygg (build) på Vercel
  Jag arbeta mycket att lösa problem själv för att jag fick inte hjälpa från er ,,bara fråga chatgpt ...men den error Error: Command "npm run build" exited with 1 kunna inte fixa...kvar den error 
  ![image](https://github.com/user-attachments/assets/53077bca-12a8-4d1a-a221-a64b5931921b)

  ![image](https://github.com/user-attachments/assets/eb841d85-56db-4e3f-88a7-426f4f1345c4)
Tyvärr att kunna inte göra den 
![image](https://github.com/user-attachments/assets/979257a5-5412-4268-a4da-3e36cd55d7d3)

 ## Jag fick hjälpa ..Jag är glad att jag kan dela min websida :)
 ![image](https://github.com/user-attachments/assets/a5ca0102-dcd8-43f3-b784-7296807ed10e)

 ## Getting Started
 
 First, run the development server:
 
 ```bash
 npm run dev
 # or
 yarn dev
 # or
 pnpm dev
 # or
 bun dev
 ```
 
 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 
 You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
 
 This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
 
 ## Learn More
 
 To learn more about Next.js, take a look at the following resources:
 
 - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
 - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
 
 You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
 
 ## Deploy on Vercel
 
 The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
 
 Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
