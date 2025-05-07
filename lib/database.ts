import { supabase } from "./supabase"
import type { Profile, SocialAccount, Post } from "@/types/supabase"

// Profile functions
export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

  if (error) {
    console.error("Error fetching profile:", error)
    return null
  }

  return data
}

export async function updateProfile(userId: string, updates: Partial<Profile>): Promise<Profile | null> {
  const { data, error } = await supabase.from("profiles").update(updates).eq("id", userId).select().single()

  if (error) {
    console.error("Error updating profile:", error)
    return null
  }

  return data
}

// Social Accounts functions
export async function getSocialAccounts(userId: string): Promise<SocialAccount[]> {
  const { data, error } = await supabase.from("social_accounts").select("*").eq("user_id", userId)

  if (error) {
    console.error("Error fetching social accounts:", error)
    return []
  }

  return data || []
}

export async function addSocialAccount(
  account: Omit<SocialAccount, "id" | "created_at" | "updated_at">,
): Promise<SocialAccount | null> {
  const { data, error } = await supabase.from("social_accounts").insert(account).select().single()

  if (error) {
    console.error("Error adding social account:", error)
    return null
  }

  return data
}

export async function removeSocialAccount(accountId: string): Promise<boolean> {
  const { error } = await supabase.from("social_accounts").delete().eq("id", accountId)

  if (error) {
    console.error("Error removing social account:", error)
    return false
  }

  return true
}

// Posts functions
export async function getPosts(userId: string, status?: string): Promise<Post[]> {
  let query = supabase.from("posts").select("*").eq("user_id", userId).order("created_at", { ascending: false })

  if (status) {
    query = query.eq("status", status)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching posts:", error)
    return []
  }

  return data || []
}

export async function getPost(postId: string): Promise<Post | null> {
  const { data, error } = await supabase.from("posts").select("*").eq("id", postId).single()

  if (error) {
    console.error("Error fetching post:", error)
    return null
  }

  return data
}

export async function createPost(post: Omit<Post, "id" | "created_at" | "updated_at">): Promise<Post | null> {
  const { data, error } = await supabase.from("posts").insert(post).select().single()

  if (error) {
    console.error("Error creating post:", error)
    return null
  }

  return data
}

export async function updatePost(postId: string, updates: Partial<Post>): Promise<Post | null> {
  const { data, error } = await supabase.from("posts").update(updates).eq("id", postId).select().single()

  if (error) {
    console.error("Error updating post:", error)
    return null
  }

  return data
}

export async function deletePost(postId: string): Promise<boolean> {
  const { error } = await supabase.from("posts").delete().eq("id", postId)

  if (error) {
    console.error("Error deleting post:", error)
    return false
  }

  return true
}
