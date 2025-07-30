import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function SignInPage() {
  return (
    <div className='flex text-center flex-col justify-center p-4 min-h-screen'>
        <Card className='w-full max-w-md'>
            <CardHeader>
                <CardTitle>
                    <h1>Sign In</h1>
                </CardTitle>
                <CardDescription>
                    or {" "}
                    <Link href="/auth/signup" className='font-medium text-pink-400 hover:underline'>
                        Create an account
                    </Link>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className='space-y-4'>
                    <div className='space-y-2'>
                        <Label htmlFor="email">Email</Label>
                        <Input type='email' id='email' placeholder='Your Email' />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="password">Password</Label>
                        <Input type='password' id='password' placeholder='Your Password' />
                    </div>
                    <Button type='submit' className='w-full'>Sign In</Button>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}
