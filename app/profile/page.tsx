"use client";

import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ProfilePage() {
  useEffect(() => {
    async function getUserDetails() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
      } else {
        console.log("✅ Logged-in user details:", user);
      }
    }

    getUserDetails();
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-semibold">Profile</h1>
      <p>Check your browser console for logged-in user details 👀</p>
    </div>
  );
}
