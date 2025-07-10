"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

export default function DemoClientComponent() {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      const getUser = async () => {
        const supabase = createClient(); // Skapa Supabase-klienten
        const {
          data: { user },
          error,
        } = await (await supabase).auth.getUser(); // Hämta användaren
  
        if (error || !user) {
          console.log('Ingen användare inloggad');
        } else {
          setUser(user); // Spara användaren i state
        }
      };
  
      getUser();
    }, []);
  
    console.log({ user });
  
    return (
      <h2 className="mb-1 ml-1 text-3xl text-amber-300">
        Välkommen till SU MA Shop e-handel {user?.email ? `, ${user.email}` : '...'}
      </h2>
    );
  }