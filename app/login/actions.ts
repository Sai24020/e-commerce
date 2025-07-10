'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(): Promise<void>
 {
  revalidatePath('/login', 'layout')
  redirect('/')
}

export async function signup(): Promise<void> 
{
  revalidatePath('/register', 'layout')
  redirect('/')
}