"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // login or signup
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("department_admin");
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // redirect if logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.push("/");
    });
  }, [router]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // sign-up path
      if (mode === "signup") {
        const { error } = await supabase.from("pending_users").insert([
          {
            name,
            phone,
            email,
            role,
            department,
            password, // you can hash before storing later
          },
        ]);
        if (error) throw error;

        await fetch("/api/notify-superadmin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, role, department }),
        });

        alert("🎉 Signup request sent! You’ll be notified once approved.");
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setDepartment("");
        setRole("department_admin");
        setMode("login");
      } else {
        // login path
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (loginError) throw loginError;
        router.push("/");
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm p-8 rounded-2xl border border-gray-700 shadow-[0_0_20px_rgba(230,57,70,0.15)]"
      >
        <h1 className="text-3xl goldman-bold text-center mb-6 text-[#E63946]">
          {mode === "login" ? "Welcome Back 👋" : "Join Altius 2025 🚀"}
        </h1>

        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          {mode === "signup" && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-[#E63946] outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-[#E63946] outline-none transition"
              />
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
                className="p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-[#E63946] outline-none transition"
              >
                <option value="">Select Department</option>
                <option value="CSE">Computer Science</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="ECE">Electronics</option>
                <option value="MECH">Mechanical</option>
                <option value="CIVIL">Civil</option>
                <option value="AERO">Aeronautical</option>
                {/* add others */}
              </select>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-[#E63946] outline-none transition"
              >
                <option value="department_admin">Department Admin</option>
                <option value="super_admin">Super Admin</option>
              </select>
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-[#E63946] outline-none transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-[#E63946] outline-none transition"
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="mt-2 py-3 rounded-md bg-[#E63946] hover:bg-[#E63946]/80 transition-all font-semibold"
          >
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Login"
              : "Sign Up"}
          </motion.button>
        </form>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mt-6 text-gray-400 text-sm"
          >
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-[#E63946] hover:underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-[#E63946] hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-gray-400 text-sm hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
