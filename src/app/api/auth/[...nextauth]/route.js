import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
         
          name: 'Credentials',
          
          credentials: {
           email: { label: "Email", type: "text", placeholder: "test@example.com" },
            password: { label: "Password", type: "password" },
            confirmPassword: { label: "confirm-password", type: "confirm-password" },
            terms: { label: "terms", type: "checkbox" },
           
          },
          async authorize(credentials, req) {
            
            const res = await fetch("/your/endpoint", {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()
      
           
            if (res.ok && user) {
              return user
            }
         
            return null
          }
        })
      ]
})

export { handler as GET, handler as POST }