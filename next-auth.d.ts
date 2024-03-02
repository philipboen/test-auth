/* eslint-disable no-unused-vars */
import { UserRole } from "@prisma/client"
import NextAuth from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            role: UserRole
        }
    }
}

