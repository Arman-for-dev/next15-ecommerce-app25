import bcrypt from "bcryptjs"
import NextAuth from "next-auth"
export const { handlers, auth, signIn, signOut } = NextAuth({ providers: [  ] })

export async function hashedPassword(password: string){
    const saltround = await bcrypt.genSalt(10);
    return await bcrypt.hashSync(password, saltround);
}

export async function comparedPassword(password: string, hashedPassword: string){
    return await bcrypt.compareSync(password, hashedPassword);
} {
    
}